<template>
  <div class="wrapic">
    <embed class="icon" src="/static/security.svg" />
    链接安全性检测结果由
    <!-- #ifndef MP -->
    <a href="https://urlsec.qq.com/" target="_blank">腾讯安全</a>
    <!-- #endif -->
    <!-- #ifdef MP -->
    <div class="tag">腾讯安全</div>
    <!-- #endif -->
    提供
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.wrapic {
  margin-top: 1.3rem;
  display: flex;
  justify-content: center;
  .icon {
    height: 1rem;
    width: 1rem;
    margin-right: 0.5rem;
  }
  .tag {
    color: $base;
  }
  a,
  a:visited,
  a:hover {
    color: #262626;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  a,
  a:visited {
    color: $base;
  }
}
</style>
