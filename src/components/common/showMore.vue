<template>
  <el-button class="show-more" @click="load" :loading="isFetching">{{ isFetching ? '加载中' : '点击加载更多' }}</el-button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'showMore',
  computed: {
    ...mapGetters(['isFetching'])
  },
  methods: {
    load() {
      this.$emit('loadMore')
    },
  },
}
</script>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .show-more {
    display: inline-block;
    height: 60px;
    width: 100%;
    margin-bottom: 60px;
    color: $tips-text-color;
    font-size: 16px;
    text-align: center;
    border: 1px solid $light-border-color;
    cursor: pointer;

    transition: all .2s ease-out;

    &:hover {
      color: #999;
      border-color: #fafafa;
      background-color: #fafafa;
    }
  }
</style>

