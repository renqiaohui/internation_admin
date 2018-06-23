<template>
  <div class="container">
     <div class="error">
      <el-row>
        <el-col :md="9" :xs="12">
          <h2>404!</h2>
          <p class="summary">页面，我找不到你，我找不到你啊～</p>
          <el-button type="primary">
            <router-link to="/home" tag="span">返回首页</router-link>
          </el-button>
        </el-col>

        <el-col :md="9" :xs="12">
          <img :src="require('../../assets/images/404.png')" alt="404.png">
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error {
    padding: 30px 0;
    margin-top: 30px;

    h2 {
      margin: 0;
      color: #4f565f;
      font-size: 120px;
      font-weight: bold;
    }

    p.summary {
      margin-top: 0;
      margin-bottom: 40px;
      color: #76808e;
      font-size: 24px;
    }

    @media screen and (max-width: 767px) {
      margin-top: 0;

      h2 {
        margin: 0;
        color: #4f565f;
        font-size: 36px;
        font-weight: bold;
      }

      p.summary {
        margin-top: 0;
        margin-bottom: 40px;
        color: #76808e;
        font-size: 18px;
      }
    }
  }
</style>
