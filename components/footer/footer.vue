<template>
  <div class="container_footer">
    <hr />
    <div class="friendship-links">
      <div class="flink" @click="onSkip('/pages/index/index')">首页</div>
      <div class="flink" @click="onSkip('/pages/conditions/index')">使用条款</div>
      <div class="flink" @click="onSkip('/pages/privacy/index')">隐私条款</div>
      <div class="flink" @click="onSkip('/pages/api/index')">接口文档</div>
    </div>
    <div class="copyright">
      © 短链接服务 2020 - 2021
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSkip(url) {
      uni.navigateTo({
        url: url,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container_footer {
  padding-bottom: constant(safe-area-inset-bottom); /*兼容 IOS<11.2*/
  padding-bottom: env(safe-area-inset-bottom); /*兼容 IOS>11.2*/
  margin-top: 5.5rem;
  hr {
    background: rgba(0, 0, 0, 0.1);
    display: block;
    border: none;
    height: 1px;
  }
  .friendship-links {
    font-size: 12px;
    margin-top: 1rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    color: #787fa9;
    .flink {
      margin: 0.3rem 0.5rem;
      font-family: Arial, Helvetica, sans-serif;
      color: $base;
      text-decoration: none;
    }
  }
  .copyright {
    font-size: 12px;
    margin-top: 0.5rem;
    text-align: center;
  }
}
</style>
