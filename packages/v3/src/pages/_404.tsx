export function NotFound() {
  return (
    <div class={'h-screen dark:bg-gray-900 leading-relaxed'}>
      <div
        class={
          'container mx-auto flex flex-col justify-center items-center px-5 h-full gap-2'
        }
      >
        <h1 class={'text-9xl font-bold'}>404</h1>
        <p class={'text-2xl font-bold'}>找不到页面</p>
        <p class={'text-xl font-bold hover:text-yellow-200'}>
          <a href={'/'}>返回首页</a>
        </p>
      </div>
    </div>
  )
}
