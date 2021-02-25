export interface IAchorJump {
  goAnchor(selector: string): void
  getQueryString(): string
}
// 锚点跳转
function goAnchor(selector: string) {
  const anchor = document.querySelector(selector) // 获取元素
  if (anchor) {
    setTimeout(() => {
      // 页面没有渲染完成时是无法滚动的，因此设置延迟
      anchor &&
        anchor.scrollIntoView({
          behavior: 'smooth',
        })
    }, 200)
  }
}

// 获取参数
// 跳转路由的时候使用
function getQueryString() {
  const hash = window.location.hash
  const sub = hash.substr(1)
  if (sub) {
    return sub
  }
  return null
}

export default {
  goAnchor,
  getQueryString,
}
