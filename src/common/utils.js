//防抖(停止一段时间后才能发送一次)/时间越小,调用越快提交次数越少
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

/* function debounce(func, wait) {
  let timeout;
  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);
      
      timeout = setTimeout(() => {
          func.apply(context, args)
      }, wait);
  }
} */

//节流(一段时间内只能发送固定次数)/频率控制(时间越小,1s提交次数越多)
export function throttle(func, wait) {
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
