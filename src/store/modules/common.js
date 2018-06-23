// import * as utils from '@/utils/utils'
import * as types from '../types'

// 定义状态
const state = {
  isFetching: false,
  loginDialogVisible: false,     // 判断是否展示登陆对话框
  registerDialogVisible: false,  // 判断是否展示注册对话框
  searchDialogVisible: false,    // 判断是否显示搜索模态框
}

// 定义getters
const getters = {
  isFetching: state => state.isFetching,
  loginDialogVisible: state => state.loginDialogVisible,
  registerDialogVisible: state => state.registerDialogVisible,
  searchDialogVisible: state => state.searchDialogVisible,
}

// 定义mutations
const mutations = {
  [types.IS_FETCHING](state, { status }) {
    state.isFetching = status
  },
  [types.LOGIN_DIALOG_VISIBLE](state, { status }) {
    state.loginDialogVisible = status
  },
  [types.REGISTER_DIALOG_VISIBLE](state, { status }) {
    state.registerDialogVisible = status
  },
  [types.SEARCH_DIALOG_VISIBLE](state, { status }) {
    state.searchDialogVisible = status
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
