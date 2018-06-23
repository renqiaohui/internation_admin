<template>
  <div class="footer-info">
    <div class="container">
      <el-row :gutter="20" class="contact">
        <el-col :md="8" :xs="24">
          <p><i class="iconfont icon-dangdifill"></i> 浙江省杭州市滨江区中赢康康谷写字楼</p>
        </el-col>
        <el-col :md="8" :xs="24">
          <p><i class="iconfont icon-dianhua"></i> 电话: xxxxxxxxxxxx</p>
        </el-col>
        <el-col :md="8" :xs="24">
          <p><i class="iconfont icon-youxiang"></i> 邮箱: xxxxxxxxx@163.com</p>
        </el-col>
      </el-row>
    </div>
    <div class="copyright">Copyright© 版权所有: 杭州初选信息技术有限公司</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
  .footer-info {
    padding: 20px 0 0;
    font-size: 14px;
    color: #fff;
    background-color: #262626;
  }

  .links-warp {
    h5 {
      width: 80px;
      padding: 0 0 10px;
      border-bottom: 2px solid #ddd;
    }
    .links {
      li {
        margin-right: 20px;
      }
      a {
        color: #999;
        line-height: 32px;
      }
    }
  }

  .qrcode-warp {
    padding-top: 24px;

    .qrcode {
      .item {
        display: inline-block;
        width: 45%;
        &:first-child {
          margin-right: 10px;
        }
        p {
          font-size: 12px;
          padding: 10px 0;
        }
      }

      @media screen and (max-width: 768px) {
        .item {
          width: 35%;
        }
      }
    }
  }

  .copyright {
    margin-top: 36px;
    line-height: 50px;
    text-align: center;
    background-color: #323232;
  }
</style>

