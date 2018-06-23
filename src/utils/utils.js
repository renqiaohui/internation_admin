/**
 * ------------------------------------------------------------------
 * 操作localStorage | sessionStorage
 * ------------------------------------------------------------------
 */

// 获取localStorage
export const getLocal = name => (name ? JSON.parse(window.localStorage.getItem(name)) : undefined)
// 存储localStorage
export const setLocal = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}
// 删除localStorage
export const removeLocal = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

// 获取sessionStorage
export const getSession = name => (name ? JSON.parse(window.sessionStorage.getItem(name)) : undefined)
// 存储sessionStorage
export const setSession = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.sessionStorage.setItem(name, content)
}
// 删除sessionStorage
export const removeSession = (name) => {
  if (!name) return
  window.sessionStorage.removeItem(name)
}


/**
 * ------------------------------------------------------------------
 * 其余工具方法
 * ------------------------------------------------------------------
 */

// 有弹窗是是否将body进行锁定
export const lockScroll = (status) => {
  document.body.className = status ? 'is-component' : ''
}
