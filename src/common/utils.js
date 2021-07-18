//防抖(停止一段时间后才能发送一次)/时间越小,调用越快提交次数越少
//防抖函数非立即执行
export function debounce(func, delay = 100) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
      // console.log("取消");
    }
    // console.log('图片加载?????')
    timer = setTimeout(() => {
      // console.log('函数执行')
      func.apply(this, args)
    }, delay)
  }
}

//防抖函数立即执行,然后 n 秒内不触发事件才能继续执行函数的效果。
/* function debounce(func,wait) {
  let timeout;
  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);

      let callNow = !timeout;
      timeout = setTimeout(() => {
          timeout = null;
      }, wait)

      if (callNow) func.apply(context, args)
  }
} */

//节流(一段时间内只能发送固定次数)/频率控制(时间越小,1s提交次数越多)
export function throttle(func, wait=1000) {
  let timeout
  return function () {
    let context = this
    let args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait)
    }
  }
}
