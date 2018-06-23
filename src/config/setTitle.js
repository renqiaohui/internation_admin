/**
 * 设置标题以及favico图标
 * @param title
 */
export default function setTitle(title) {
  document.title = title

  const mobile = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = './favicon.ico'

    const iframeCallback = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', iframeCallback)
        document.body.removeChild(iframe)
      }, 0)
    }
    iframe.addEventListener('load', iframeCallback)
    document.body.appendChild(iframe)
  }
}
