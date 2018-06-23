// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import router from '@/router'
import store from '@/store'

import setTitle from '@/config/setTitle'
import filters from '@/config/filter' // 注册过滤器

import App from '@/App'
import '@/styles/element-variables.scss'

// 导入element-ui相应组建并使用
import {
  Alert, Button, Carousel, CarouselItem, Cascader, Col, Collapse, CollapseItem, DatePicker,
  Dropdown, DropdownMenu, DropdownItem, Form, FormItem, Input, Loading, Menu, MenuItem,
  Message, MessageBox, Notification, Pagination, Popover, Radio, RadioGroup, RadioButton, Row, Submenu, Tabs, TabPane,
  Card, Checkbox, Dialog, Upload, Select, Option, Table, TableColumn } from 'element-ui'

Vue.use(Alert)
Vue.use(Button)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Cascader)
Vue.use(Col)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(DatePicker)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Pagination)
Vue.use(Popover)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Row)
Vue.use(Submenu)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Card)
Vue.use(Checkbox)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading)

Vue.prototype.$loading = Loading.service
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/images/error.png',
  loading: 'static/images/loading.svg',
  attempt: 1,
})

// 注册过滤器
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

// 路由跳转的前置操作
let loadingInstance
router.beforeEach((to, from, next) => {
  loadingInstance = Loading.service({
    lock: true,
    text: '加载中...',
    fullscreen: true,
  })

  if (to.matched.some(record => record.meta.requireAuth)) {
    const isLogin = store.state.user.userInfo.id

    if (!isLogin) { // 检测到用户未登录，给出提示
      Message.warning({ message: '请先登录' })
    } else {
      next()
    }
  } else {
    Message.close()
    next()
  }
})

// 路由跳转完毕操作
router.afterEach((route) => {
  loadingInstance.close()

  const title = route.meta.title
  setTitle(title)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})

export default vue
