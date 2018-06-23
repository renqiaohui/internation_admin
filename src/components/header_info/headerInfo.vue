<template>
  <div class="header-info">
    <div class="container clearfix">
      <div class="logo fl">
        <router-link :to="{ name: 'home' }">
          <img :src="require('../../assets/images/logo.jpg')" alt="logo">
        </router-link>
      </div>
      <div class="nav fl">
        <el-menu
          :default-active="activeMenu"
          text-color="#303030"
          active-text-color="#2e78c7"
          mode="horizontal">
          <el-menu-item index="home">
            <router-link to="/home" tag="div">首页</router-link>
          </el-menu-item>
          <el-submenu index="hotel-list">
            <template slot="title">酒店列表</template>
            <el-menu-item index="hotel-list-distribution">
              <router-link to="/hotel_list/distribution" tag="div">分销酒店列表</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="about">
            <router-link to="/about" tag="div">关于我们</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user-info fr">
        <el-dropdown>
          <span class="el-dropdown-link"><i class="iconfont icon-user user-link"></i> {{ userInfo.username }}</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div @click="logout"></div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/config/api'
import { mapGetters } from 'vuex'
import { SET_USER_INFO } from '../../store/types'

export default {
  name: 'Header',
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  data() {
    return {
      activeMenu: 'home'
    }
  },
  methods: {
    async logout() {
      try {
        const res = await api.logout()
        if (res.code === 0) {
          this.$store.commit(SET_USER_INFO, { user: {} })
          this.$message({ type: 'success', message: res.msg })
          this.$router.push({ path: '/login' })
        } else {
          this.$message({ type: 'warning', message: res.msg })
        }
      } catch (e) {
        this.$message.error(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scope>
@import '../../styles/mixin.scss';

.header-info {
  position: fixed;
  width: 100%;
  height: 60px;
  line-height: 60px;
  margin-bottom: 30px;
  border-bottom: 1px solid $light-border-color;
  background-color: #fff;
  z-index: 10;

  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(100%);
    opacity: 0;
  }
  .logo {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .nav {
    padding: 0 20px;
  }
  .user-info {
    span {
      font-size: 16px!important;
      &:hover {
      cursor: pointer;
      color: $primary-color;
      }
    }
  }
}
</style>
