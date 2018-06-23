<template>
  <div id="app">
    <!-- 顶部导航区域 -->
    <Header v-show="$route.path !== '/login'" />

    <!-- 页面内容区域 -->
    <div class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>

    <!-- 底部页脚部分 -->
    <Footer v-show="$route.path !== '/login'" />

    <!-- 返回顶部 -->
    <BackTop />

    <!-- 登陆弹窗 -->
    <transition name="fade" mode="in-out">
       <login v-if="loginDialogVisible"></login>
    </transition>

    <!-- 注册弹窗 -->
    <transition name="fade" mode="in-out">
      <register v-if="registerDialogVisible"></register>
    </transition>

    <!-- 搜索弹窗 -->
    <transition name="fade" mode="in-out">
      <search-dialog v-if="searchDialogVisible"></search-dialog>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/header_info/headerInfo'
import Footer from '@/components/footer_info/footerInfo'
import BackTop from '@/components/common/backTop'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    BackTop,
  },
  computed: {
    ...mapGetters([
      'loginDialogVisible',
      'registerDialogVisible',
      'searchDialogVisible'
    ])
  }
}
</script>

<style lang="scss">
@import './styles/common.scss';

#app {
  height: 100%;

  .main-content {
    padding: 72px 0 35px;
    min-height: 100%;
    background: #fbf9fe;

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter, .fade-leave-active {
      opacity: 0;
    }
  }
}
</style>
