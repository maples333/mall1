// 防抖函数
export function debounce(func, delay=1000) {
  let timer = null
  return function (...args) {
    // let context = this;
    if (timer) {
      // console.log(2)
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
