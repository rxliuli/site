---
title: Recording a Migration from Prisma to Drizzle
slug: recording-a-migration-from-prisma-to-drizzle
date: 2025-04-28
summary: Recently, I've been using Cloudflare D1 as the server database and chose Prisma as the ORM, which is recommended by many people. However, I encountered several issues during use, including
tags: [SQL, JavaScript, Prisma, Drizzle]
status: published
---

## Background

Recently, I've been using Cloudflare D1 as the server database and chose Prisma as the ORM, which is recommended by many people. However, I encountered several issues during use, including:

1. No support for D1's batch processing, completely lacking transaction capabilities <https://www.prisma.io/docs/orm/overview/databases/cloudflare-d1#transactions-not-supported>
2. No support for complex queries, such as multi-table JOIN SQL syntax <https://github.com/prisma/prisma/discussions/12715>
3. Slow single queries, typically taking over 200ms, which is **strange** - I believe this is related to Prisma's internal use of WASM causing longer initialization times <https://github.com/prisma/prisma/discussions/23646#discussioncomment-9059560>

### No Transaction Support

Regarding the first issue, Cloudflare D1 itself doesn't support transactions but offers batch processing with some limitations. <https://developers.cloudflare.com/d1/worker-api/d1-database/#batch>

For example:

```ts
const companyName1 = `Bs Beverages`
const companyName2 = `Around the Horn`
const stmt = env.DB.prepare(`SELECT * FROM Customers WHERE CompanyName = ?`)
const batchResult = await env.DB.batch([
  stmt.bind(companyName1),
  stmt.bind(companyName2),
])
```

If you use Prisma's `$transaction` function, you'll get a warning:

```sh
prisma:warn Cloudflare D1 does not support transactions yet. When using Prisma's D1 adapter, implicit & explicit transactions will be ignored and run as individual queries, which breaks the guarantees of the ACID properties of transactions. For more details see https://pris.ly/d/d1-transactions
```

This warning points to [cloudflare/workers-sdk](https://github.com/cloudflare/workers-sdk/issues/2733), suggesting it's a Cloudflare D1 issue. However, the real question is why doesn't Prisma internally use D1's batch function? Simply put, it doesn't support it, as evident in [@prisma/adapter-d1 transaction implementation](https://github.com/prisma/prisma/blob/0091f7f590b4daf760a025bc72a7d2218fddd744/packages/adapter-d1/src/d1.ts#L139-L142).

### No Support for Complex Queries

Consider this statistical query with counting and deduplication - seems simple, right?

```ts
SELECT spamUserId, COUNT(DISTINCT reportUserId) as reportCount
FROM SpamReport
GROUP BY spamUserId;
```

You might try to write it in Prisma like this:

```ts
const result = await context.prisma.spamReport.groupBy({
  by: ['spamUserId'],
  _count: {
    reportUserId: { distinct: true },
  },
})
```

Unfortunately, Prisma doesn't support this. Check [issue#4228](https://github.com/prisma/prisma/issues/4228), which has been open for **4 years**.

By the way, Drizzle allows you to do this easily:

```ts
const result = await context.db
  .select({
    spamUserId: spamReport.spamUserId,
    reportCount: countDistinct(spamReport.reportUserId),
  })
  .from(spamReport)
  .groupBy(spamReport.spamUserId)
```

### Slow Single Queries

I haven't thoroughly analyzed this, but server API requests felt very slow, averaging up to 1 second, despite my largest table having only 30K+ records and most others having fewer than 1K. After switching from Prisma to Drizzle, the bundle size decreased from `2776.05 KiB / gzip: 948.21 KiB` to `487.87 KiB / gzip: 93.10 KiB` - a 90% reduction after gzip, which makes the performance difference more understandable.

![image](https://gist.github.com/user-attachments/assets/2881c806-e8c6-4bea-b72c-5e0afbc82c9f)

Some users have reported even worse performance issues with batch inserts of 1K records, taking over 30 seconds: <https://github.com/prisma/prisma/discussions/23646#discussioncomment-10965747>

## Challenges Encountered

After discussing Prisma's issues, let me share the challenges I faced during migration.

### Challenge 1: Issues Generating schema.ts from schema.prisma

When migrating, I used Grok to automatically generate the drizzle-required schema.ts from schema.prisma, but encountered several problems.

Original table structure:
```sql
CREATE TABLE "LocalUser" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
)
```

Grok's auto-converted output:
```ts
export const localUser = sqliteTable('LocalUser', {
  id: text('id')
    .primaryKey()
    .default(sql`uuid()`),
  createdAt: integer('createdAt', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: integer('updatedAt', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
})
```

The automatic conversion had several issues:
1. `` sql`uuid()` `` is handled by Prisma's application abstraction layer, but should also be handled there in schema.ts
2. updatedAt has the same issue with `` sql`CURRENT_TIMESTAMP` ``
3. createdAt/updatedAt are actually text types, but schema.ts used integer, preventing data insertion into old tables and causing "Invalid Date" errors

The correct implementation should be:
```ts
export const localUser = sqliteTable('LocalUser', {
  id: text('id').primaryKey().$defaultFn(uuid),
  createdAt: text('createdAt')
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
  updatedAt: text('createdAt')
    .notNull()
    .$defaultFn(() => new Date().toISOString()),
})
```

### Challenge 2: Incorrect Model Data in db.batch Query Results

Drizzle doesn't automatically resolve column name conflicts in join queries. Consider User and ModList tables:

| id     | screenName       | name      |
| ------ | ---------------- | --------- |
| user-1 | user-screen-name | user-name |

| id        | name         | userId |
| --------- | ------------ | ------ |
| modlist-1 | modlist-name | user-1 |

When executing the following code, non-batch query results will differ from batch query results:

```ts
const query = db
  .select()
  .from(modList)
  .innerJoin(user, eq(user.id, modList.userId))
  .where(eq(modList.id, 'modlist-1'))
const q = query.toSQL()
const stmt = context.env.DB.prepare(q.sql).bind(...q.params)
console.log((await stmt.raw())[0])
console.log((await context.env.DB.batch([stmt]))[0].results[0])
```

```ts
// Non-batch query
;[
  'modlist-1',
  'modlist-name',
  'user-1',

  'user-1',
  'user-screen-name',
  'user-name',
]

// Batch query
{
  // id: 'modlist-1', overwritten
  // name: 'modlist-name', overwritten
  id: 'user-1',
  name: 'user-name',
  userId: 'user-1',
  screenName: 'user-screen-name',
}
```

This occurs because ModList and User have conflicting column names (id/name), and in batch queries, later columns overwrite earlier ones. See related issues:
<https://github.com/cloudflare/workers-sdk/issues/3160>
<https://github.com/drizzle-team/drizzle-orm/issues/555>

The solution is to manually specify column aliases:

```ts
db.select({
  modList: {
    id: sql<string>`${modList.id}`.as('modlist_id'),
    name: sql<string>`${modList.name}`.as('modlist_name'),
  },
  user: {
    id: sql<string>`${user.id}`.as('user_id'),
    screenName: sql<string>`${user.screenName}`.as('user_screen_name'),
    name: sql<string>`${user.name}`.as('user_name'),
  },
})
  .from(modList)
  .innerJoin(user, eq(user.id, modList.twitterUserId))
  .where(eq(modList.id, 'modlist-1'))
```

This produces consistent results:

```ts
// Non-batch query
;[
  'modlist-1',
  'modlist-name',
  'user-1',
  'user-screen-name',
  'user-name'
]
// Batch query
{
  modlist_id: 'modlist-1',
  modlist_name: 'modlist-name',
  user_id: 'user-1',
  user_screen_name: 'user-screen-name',
  user_name: 'user-name'
}
```

You can even implement a generic alias generator:

```ts
import {
  AnyTable,
  TableConfig,
  InferSelectModel,
  getTableName,
  getTableColumns,
  sql,
  SQL,
} from 'drizzle-orm'

export function getTableAliasedColumns<T extends AnyTable<TableConfig>>(
  table: T,
) {
  type DataType = InferSelectModel<T>
  const tableName = getTableName(table)
  const columns = getTableColumns(table)
  return Object.entries(columns).reduce(
    (acc, [columnName, column]) => {
      ;(acc as any)[columnName] = sql`${column}`.as(
        `${tableName}_${columnName}`,
      )
      return acc
    },
    {} as {
      [P in keyof DataType]: SQL.Aliased<DataType[P]>
    },
  )
}
```

Then you can use it without manual alias setting, and it's type-safe!

```ts
db.select({
  modList: getTableAliasedColumns(modList),
  user: getTableAliasedColumns(user),
})
  .from(modList)
  .innerJoin(user, eq(user.id, modList.twitterUserId))
  .where(eq(modList.id, 'modlist-1'))
```

## Conclusion

Compatibility is paramount during data migration, with schema modifications or optimizations best left until after migration. Overall, this migration was quite successful, and I'll be using Drizzle as my ORM of choice for new database projects going forward.