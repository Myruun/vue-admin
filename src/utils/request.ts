// import Vue from 'vue'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { MAINHOST, ISMOCK, conmomPrams } from '@/config'
import requestConfig from '@/config/requestConfig'
import { getToken } from '@/utils/common'
import router from '@/router'
// import qs from 'qs'
// import { Base } from './base' // 导入全局环境变量
// const base = new Base()
// 取消请求
// const CancelToken = axios.CancelToken
// // 是否需要拦截code==-1的状态
// let is_log: boolean = false
// // 设置默认请求头
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'Content-Type': 'application/x-www-form-urlencoded'
// }
// // axios.defaults.baseURL = base.url()
// // 请求超时的时间限制
// axios.defaults.timeout = 20000
// // 开始设置请求 发起的拦截处理
// // config 代表发起请求的参数的实体
// let requestName: any
// axios.interceptors.request.use(
//   (config: any) => {
//     // 得到参数中的 requestName 字段，用于决定下次发起请求，取消对应的 相同字段的请求
//     // 如果没有 requestName 就默认添加一个 不同的时间戳
//     if (config.method === 'post') {
//       if (config.data && qs.parse(config.data).requestName) {
//         requestName = qs.parse(config.data).requestName
//       } else {
//         requestName = new Date().getTime()
//       }
//       if (config.data.indexOf('is_log') !== -1) {
//         is_log = true
//       }
//     } else {
//       if (config.params && config.params.requestName) {
//         requestName = config.params.requestName
//       } else {
//         requestName = new Date().getTime()
//       }
//       if (config.params.is_log) {
//         is_log = true
//       }
//     }
//     // 判断，如果这里拿到的参数中的 requestName 在上一次请求中已经存在，就取消上一次的请求
//     if (requestName) {
//       // if (axios[requestName] && axios[requestName].cancel) {
//       //   axios[requestName].cancel('取消了请求')
//       // }
//       // config.cancelToken = new CancelToken((c: any) => {
//       //   axios[requestName] = {}
//       //   axios[requestName].cancel = c
//       // })
//     }
//     return config
//   },
//   (error: any) => {
//     return Promise.reject(error)
//   }
// )

// // 请求到结果的拦截处理
// axios.interceptors.response.use(
//   (config: any) => {
//     // 返回请求正确的结果
//     if (!is_log && config.data.code === -1) {
//       router.push({ path: '/login' }) // 进入登陆页面
//     }
//     if (config.data.code === -2) {
//       router.push({ path: '/' }) // 进入实名认证
//     }
//     return config.data
//   },
//   (error: any) => {
//     return Promise.reject(error)
//     // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
//   }
// )
// // 将axios 的 post 方法，绑定到 vue 实例上面的 $post
// Vue.prototype.$post = (url: any, params: any) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(url, qs.stringify(params))
//       .then((res: any) => {
//         resolve(res)
//       })
//       .catch((err: any) => {
//         reject(err)
//       })
//   })
// }
// 将axios 的 get 方法，绑定到 vue 实例上面的 $get
// Vue.prototype.$get = (url: any, params: any) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(url, { params: params })
//       .then((res: any) => {
//         resolve(res) // 返回请求成功的数据 data
//       })
//       .catch((err: any) => {
//         reject(err)
//       })
//   })
// }

declare type Methods =
  | 'GET'
  | 'OPTIONS'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'
declare interface Datas {
  method?: Methods
  [key: string]: any
}
const baseURL =
  process.env.NODE_ENV === 'production' ? MAINHOST : location.origin
const token = getToken()

class HttpRequest {
  public queue: any // 请求的url集合
  public constructor() {
    this.queue = {}
  }
  destroy(url: string) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // hide loading
    }
  }
  interceptors(instance: any, url?: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // show loading
        }
        if (url) {
          this.queue[url] = true
        }
        return config
      },
      (error: any) => {
        console.error(error)
      }
    )
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (url) {
          this.destroy(url)
        }
        const { data, status } = res
        if (status === 200 && ISMOCK) {
          return data
        } // 如果是mock数据，直接返回
        if (status === 200 && data && data.code === 0) {
          return data
        } // 请求成功
        return requestFail(res) // 失败回调
      },
      (error: any) => {
        if (url) {
          this.destroy(url)
        }
        console.error(error)
      }
    )
  }
  async request(options: AxiosRequestConfig) {
    const instance = axios.create()
    await this.interceptors(instance, options.url)
    return instance(options)
  }
}

// 请求失败
const requestFail = (res: AxiosResponse) => {
  let errStr = '网络繁忙！'
  // token失效重新登录
  if (res.data.code === 1000001) {
    console.error('token失效重新登录')
    return router.replace({ name: 'login' })
  }

  return {
    err: console.error({
      code: res.data.errcode || res.data.code,
      msg: res.data.errmsg || errStr
    })
  }
}

// 合并axios参数
const conbineOptions = (
  _opts: any,
  data: Datas,
  method: Methods
): AxiosRequestConfig => {
  let opts = _opts
  if (typeof opts === 'string') {
    opts = { url: opts }
  }
  const _data = { ...conmomPrams, ...opts.data, ...data }
  const options = {
    method: opts.method || data.method || method || 'GET',
    url: opts.url,
    header: { 'user-token': token },
    baseURL
  }
  return options.method !== 'GET'
    ? Object.assign(options, { data: _data })
    : Object.assign(options, { params: _data })
}

const HTTP = new HttpRequest()

/**
 * 抛出整个项目的api方法
 */
const Api = (() => {
  const apiObj: any = {}
  const requestList: any = requestConfig
  const fun = (opts: AxiosRequestConfig | string) => {
    return async (data = {}, method: Methods = 'GET') => {
      if (!token) {
        console.error('No Token')
        return router.replace({ name: 'login' })
      }
      const newOpts = conbineOptions(opts, data, method)
      const res = await HTTP.request(newOpts)
      return res
    }
  }
  Object.keys(requestConfig).forEach(key => {
    apiObj[key] = fun(requestList[key])
  })

  return apiObj
})()

export default Api as any
