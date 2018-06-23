import * as utils from '@/utils/utils'
import * as types from '../types'

// 定义状态
const state = {
  userInfo: utils.getLocal('userInfo') || {}                 // 用户信息
}

// 定义getters
const getters = {
  userInfo: state => state.userInfo,
}

// 定义mutations
const mutations = {
  [types.SET_USER_INFO](state, { user }) {
    utils.setLocal('userInfo', user)
    state.userInfo = user
  }
}

// 定义actions, 异步请求请使用async | await
const actions = {

}

export default {
  state,
  actions,
  getters,
  mutations,
}
