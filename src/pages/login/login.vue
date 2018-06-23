<template>
  <div class="login">
    <div class="login-form">
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <div class="login-logo">
          <img :src="require('../../assets/images/logo.jpg')">
          <span class="title">初选旅行</span>
        </div>
        <el-form-item prop="username">
          <span class="iconfont icon-yonghuming"></span>
          <el-input type="text" prefix-icon="占位符" v-model="loginForm.username" placeholder="请输入用户名" size="small"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <span class="iconfont icon-password"></span>
          <el-input type="password" prefix-icon="占位符" v-model="loginForm.password" placeholder="请输入密码" size="small" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width:100%" @click="login" size="small">登录</el-button>
    </div>
  </div>
</template>

<script>
import api from '@/config/api'
import { SET_USER_INFO } from '../../store/types'

export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请填写用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请填写密码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return
        const { username, password } = this.loginForm

        try {
          const res = await api.login({ username, password })
          if (res.code === 0) {
            this.$message({ type: 'success', message: res.msg })
            this.$store.commit(SET_USER_INFO, { user: res.user })
            window.location.href = '/'
          } else {
            this.$message({ type: 'warning', message: res.msg })
          }
        } catch (e) {
          this.$message.error(e.message)
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/mixin';

.main-content {
  height: 100%!important;
  padding: 0!important;
}
.login {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login-bg.jpg') no-repeat 0 0;
  background-size: cover;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .iconfont {
      position: absolute;
      top: 0;
      left: 10px;
      z-index: 10;
    }
    width: 360px;
    height: 280px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
  }
  .login-logo {
    text-align: center;
    margin-bottom: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .title {
      font-weight: bold;
      font-size: 22px;
      color: $primary-color;
      vertical-align: middle;
    }
  }
}
</style>

