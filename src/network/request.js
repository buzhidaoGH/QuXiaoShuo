//封装axios
import axios from 'axios'

export function request(config) {
  //1.创建实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    timeout: 5000,
  })

  //2.instance实例拦截器,请求(发送),拦截了要放行
  instance.interceptors.request.use(
    (config) => {
      // console.log(config)
      //1.如果config中的一些信息不符合服务器要求,
      //2.或者发送网络请求的时候,页面显示一个请求的图标
      // 比如转圈圈等待~

      //3.某些网络请求(比如登录的token),必须携带一些特殊信息
      //如果没有,就显示需要登录的弹窗,然后跳转到登录页面
      //放行 config
      return config
    },
    (err) => {
      console.log(err)
    },
  )
  //2.instance实例拦截器,响应(接收),接收拦截了也要处理后放行
  instance.interceptors.response.use(
    (res) => {
      // console.log(res)
      return res.data
    },
    (err) => {
      console.log(err)
      return err
    },
  )
  //3.发送真正的网络请求
  return instance(config)
}
