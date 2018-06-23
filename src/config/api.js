import axios from 'axios'
import store from '@/store'

import { SET_USER_INFO } from '../store/types'

export const baseURL = 'http://inter.local'
export const uploadURL = `${baseURL}/api/file/upload`

// axios 配置
axios.defaults.baseURL = baseURL
axios.defaults.timeout = 20000
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 设置跨域cookie保存
axios.defaults.withCredentials = true

// 请求配置处理
axios.interceptors.request.use((config) => {
  if (window.location.pathname !== '/login') {
    if (!store.state.user.userInfo || !store.state.user.userInfo.username) {
      window.location.href = '/login'
    }
  }

  return config
},
error => Promise.reject(error))

// 拦截判断响应
axios.interceptors.response.use(res => res, (error) => {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        store.commit(SET_USER_INFO, { user: {} })
        window.location.href = '/'
        break
      default:
        return true
    }
    return true
  }
  return Promise.reject(error)
})

// post方式请求封装
export function post(url, data) {
  const info = {
    timestamp: Date.now(),      // 请求的时间戳
    ...data,                    // 请求的字段数据
  }

  return new Promise((resolve, reject) => {
    axios.post(url, info)
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}


// get方式请求封装
export function get(url, data) {
  return new Promise((resolve, reject) => {
    axios.get(url, { params: data })
      .then(res => resolve(res.data))
      .catch(err => reject(err))
  })
}

export default {
  /* -----------------------------------------------------------------
   - 用户模块
   ----------------------------------------------------------------- */

  // 登陆
  login({ username, password }) {
    return post('/admin/admin/login', { username, password })
  },

  // 登出
  logout() {
    return post('/admin/admin/logout')
  },

  /* -----------------------------------------------------------------
   - 分销酒店
   ----------------------------------------------------------------- */

  // 获得分销酒店列表
  getDistributionHotels({ currentPage }) {
    return get('/admin/distribution_hotel/index', { currentPage })
  },

  /* -----------------------------------------------------------------
   - nation
   ----------------------------------------------------------------- */

  // 获得下一级地区
  getNextNations({ pid }) {
    return get('/admin/nation/getNextNations', { pid })
  },

  // ｍａｐｐｉｎｇ过的酒店存入ｍａｐｐｉｎｇ表里
  doHotelMapping({ distributionHotelId, initialHotelId }) {
    return get('/admin/distribution_hotel/doHotelMapping', { distributionHotelId, initialHotelId })
  }
}
