// Build-time Open Graph image generator.
//
// Reads the frontmatter of every published blog post and renders a 1200x630 PNG
// banner (title + unified brand background) for each one. Images land in the
// target output dir (e.g. dist/og or public/og) and are referenced by the
// og:image / twitter:image tags via `/og/<slug>.png`.
//
// Usage (CLI):  node scripts/generate-og.mjs [--out dist/og] [--src src/data/blog]
// Usage (API):  import { generateOgImages } from './scripts/generate-og.mjs'
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import satori from 'satori'
import { Resvg } from '@resvg/resvg-js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')

// ---------------------------------------------------------------------------
// Style — tweak this block to change the visual language of every banner.
// ---------------------------------------------------------------------------
const BRAND = {
  site: 'rxliuli.com',
  section: 'BLOG',
  // Flat warm graphite — restrained, matches the site's minimal dark aesthetic.
  background: '#1c1e22',
  headerColor: '#8e8a81',
  titleColor: '#f3f1ea',
  footerColor: '#8e8a81',
  accent: '#8f8371',
}

let FONTS = null
function loadFonts(fontsDir) {
  if (FONTS) return FONTS
  const font = (file, weight) => ({ name: 'Inter', data: readFileSync(join(fontsDir, file)), weight })
  FONTS = [
    font('inter-latin-400.woff', 400),
    font('inter-latin-700.woff', 700),
  ]
  return FONTS
}

// Minimal frontmatter parser (the files use simple `key: value` lines).
function parseFrontmatter(file) {
  const raw = readFileSync(file, 'utf8')
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!m) return {}
  const out = {}
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!mm) continue
    let val = mm[2].trim()
    if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
      val = val.slice(1, -1)
    }
    out[mm[1]] = val
  }
  return out
}

function loadPosts(blogDir) {
  const posts = []
  for (const f of readdirSync(blogDir)) {
    if (!f.endsWith('.md')) continue
    const fm = parseFrontmatter(join(blogDir, f))
    if (!fm.slug || !fm.title) continue
    if (fm.status && fm.status === 'draft') continue
    posts.push({ slug: fm.slug, title: fm.title, date: fm.date || '' })
  }
  return posts
}

function el(type, style, children) {
  return { type, props: { style, children } }
}

// Build the satori element tree for one banner.
function buildTree({ title, date }) {
  const len = title.length
  const titleSize = len > 80 ? 42 : len > 55 ? 48 : 54

  return el(
    'div',
    {
      width: '1200px',
      height: '630px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '64px 72px',
      background: BRAND.background,
      color: BRAND.titleColor,
      fontFamily: 'Inter',
    },
    [
      // Header: brand + section
      el(
        'div',
        { display: 'flex', alignItems: 'center', gap: '14px', fontSize: '24px', color: BRAND.headerColor, letterSpacing: '2px', textTransform: 'uppercase' },
        [
          el('div', { width: '34px', height: '4px', background: BRAND.accent, borderRadius: '2px' }, ''),
          `${BRAND.site} / ${BRAND.section}`,
        ],
      ),
      // Title
      el('div', { fontSize: `${titleSize}px`, fontWeight: 700, lineHeight: 1.14, maxWidth: '1056px', textWrap: 'balance' }, title),
      // Footer: accent + site + date
      el(
        'div',
        { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '22px', color: BRAND.footerColor, fontWeight: 500 },
        [
          el('div', { display: 'flex', alignItems: 'center', gap: '14px' }, [
            el('div', { width: '34px', height: '4px', background: BRAND.accent, borderRadius: '2px' }, ''),
            BRAND.site,
          ]),
          date ? date : '',
        ],
      ),
    ],
  )
}

async function renderPng(svg) {
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng()
}

export async function generateOgImages({ blogDir = join(root, 'src/data/blog'), fontsDir = join(root, 'src/og/fonts'), outDir } = {}) {
  const posts = loadPosts(blogDir)
  const fonts = loadFonts(fontsDir)
  mkdirSync(outDir, { recursive: true })

  let ok = 0
  const failures = []
  for (const post of posts) {
    try {
      const svg = await satori(buildTree(post), { width: 1200, height: 630, fonts })
      const png = await renderPng(svg)
      writeFileSync(join(outDir, `${post.slug}.png`), png)
      ok++
    } catch (err) {
      failures.push(`${post.slug}: ${err.message}\n${err.stack || ''}`)
    }
  }

  console.log(`[og] generated ${ok}/${posts.length} images -> ${outDir}`)
  if (failures.length) console.warn('[og] failed:', failures.join('\n'))
  return { ok, failed: failures.length, posts: posts.length }
}

// CLI entry: `node scripts/generate-og.mjs [--out dist/og] [--src src/data/blog]`
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const args = process.argv.slice(2)
  const opt = (name, fallback) => {
    const i = args.indexOf(name)
    return i !== -1 ? args[i + 1] : fallback
  }
  await generateOgImages({
    outDir: opt('--out', join('dist', 'og')),
    blogDir: opt('--src', join(root, 'src/data/blog')),
  })
}
