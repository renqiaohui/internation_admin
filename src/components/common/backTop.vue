<template>
  <!-- 返回顶部 -->
  <div class="back-top" v-show="showTop" @click="goTop()">
    <span class="iconfont icon-top"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTop: false,
      speed: 20,
      clientHeight: document.documentElement.clientHeight || document.body.clientHeight,
    }
  },
  mounted() {
    window.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      this.showTop = scrollTop > this.clientHeight
    }
  },
  destroyed() {
    window.onscroll = () => {}
  },
  methods: {
    scrollToTop() {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 0) {
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop - this.speed   // eslint-disable-line
        this.speed += 8
        setTimeout(this.scrollToTop, 40)
      }
    },
    goTop() {
      this.speed = 20
      this.scrollToTop()
    }
  }
}
</script>

<style lang="scss" scoped>
  .back-top {
    position: fixed;
    right: 20px;
    bottom: 30px;
    z-index: 10;
    background-color: #f0f0f0;
    color: #adadad;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .9);
      color: #fff;
    }

    .iconfont {
      display: inline-block;
      width: 30px;
      height: 28px;
      font-weight: bold;
      line-height: 28px;
      text-align: center;
    }
  }
</style>
