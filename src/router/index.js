import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'


// 路由懒加载，导航相关页面
const Home = () => import('../pages/home/home') // 首页
const About = () => import('../pages/about/about') // 关于我们

// 登录页面
const Login = () => import('../pages/login/login')

// 错误页面
const Error = () => import('../pages/error/error')

// 分销酒店
const HotelListDistribution = () => import('../pages/distributionHotel/list')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '初选旅行后台管理系统-登录'
      }
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页',
        requireAuth: false,
      },
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于我们',
        requireAuth: false,
      },
      component: About,
    },
    {
      path: '/hotel_list/distribution',
      name: 'hotelListDistribution',
      meta: {
        title: '分销酒店列表'
      },
      component: HotelListDistribution
    },
    {
      path: '*',
      component: Error,
      meta: {
        title: '错误页面',
      }
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (store.state.user.userInfo && store.state.user.userInfo.username) {
      return next('/')
    }
    return next()
  }

  if (!store.state.user.userInfo || !store.state.user.userInfo.username) {
    return next('/login')
  }

  return next()
})

export default router
