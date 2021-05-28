<template>
  <div class="header-bg">
    <div class="container">
      <div class="content">
        <div class="brand content-left">
          <div>{{ siteName }}</div>
        </div>
        <div class="content-right">
          <!-- TODO: 未完成 -->
          <!-- <a href="#">登录 | 注册</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      siteName: this.$SiteName,
    }
  },
}
</script>

<style scoped>
div {
  font-size: 14px;
  outline: none;
}

a,
a:visited,
a:hover {
  color: #262626;
  text-decoration: none;
}

.container {
  /* 字体颜色 */
  --font-color: #262626;

  color: var(--font-color);
}

.header-bg {
  /* #ifdef MP || APP-PLUS */
  margin-top: 5rem;
  /* #endif */
  padding-right: 10%;
  padding-left: 10%;
  /* header 高度 */
  --header-height: 42px;
  /* header 背景颜色 */
  --header-bg-color: white;

  height: var(--header-height);
  background: var(--header-bg-color);
  line-height: var(--header-height);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.content {
  display: flex;
}

.content-left {
  flex: 1;
}

.content-right {
  text-align: right;
}

.brand {
  font-weight: 600;
  font-size: 18px;
}
</style>
