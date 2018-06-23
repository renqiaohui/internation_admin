<template>
  <div class="about">
    <el-row class="mobile-wrap hidden-md-and-up">
      <el-col :span="24">
        <p>
          LBT积分是链比特为通过网站和APP共享资讯和消息，参与点赞的用户的激励。LBT 的总量为 1000 亿，永不增发。LBT 的分配由 4 部分组成:激励池、推广运营池、链比特基金会、团队期权。
        </p>

        <h4>您可以分享什么：</h4>
        <ul>
          <li>1.自己关注的好项目的进度或者团队最新消息（例如推特、电报或medium）</li>
          <li>2.你的那么多微信群电报群有许多小道消息，稍加作证就是爆料。</li>
          <li>3.你手机里相关人士的朋友圈，可能是某内部工作人员，可能是总有新料的币圈好友</li>
          <li>4.你发现了某些风险，例如某些项目可能存在致命漏洞等。</li>
        </ul>
      </el-col>

      <el-col :span="24">
        <img :src="require('../../assets/images/test.jpeg')" alt="test">
      </el-col>
    </el-row>

    <div class="pc-wrap hidden-md-and-down">
      <div class="content">
        <p>
          LBT积分是链比特为通过网站和APP共享资讯和消息，参与点赞的用户的激励。LBT 的总量为 1000 亿，永不增发。LBT 的分配由 4 部分组成:激励池、推广运营池、链比特基金会、团队期权。
        </p>

        <h4>您可以分享什么：</h4>
        <ul>
          <li>1.自己关注的好项目的进度或者团队最新消息（例如推特、电报或medium）</li>
          <li>2.你的那么多微信群电报群有许多小道消息，稍加作证就是爆料。</li>
          <li>3.你手机里相关人士的朋友圈，可能是某内部工作人员，可能是总有新料的币圈好友</li>
          <li>4.你发现了某些风险，例如某些项目可能存在致命漏洞等。</li>
        </ul>
      </div>

      <div class="image">
        <img :src="require('../../assets/images/test.jpeg')" alt="test">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../styles/mixin.scss';

  .about {
    .mobile-wrap {
      padding: 30px 0;

      p {
        margin-bottom: 18px;
      }
    }

    .pc-wrap {
      width: 80%;
      margin: 0 auto;
      overflow: hidden;

      p {
        margin-bottom: 18px;
      }

      .content, .image {
        float: left;
        width: 50%;
      }

      .content {
        margin-top: 80px;
      }
    }
  }
</style>
