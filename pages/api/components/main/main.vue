<template>
  <div class="container">
    <div class="h1">{{ siteName }}接口文档</div>
    <div>
      <div class="h3">基本信息:</div>
      <div>接口URL：https://i7f.cn/api/links</div>
      <div>请求方式：POST</div>
      <div class="h3">请求参数:</div>
      <div>参数名：longUrl</div>
      <div>示例值：https://taobao.com</div>
      <div class="h3">响应示例</div>
      <div class="h4">成功响应示例</div>
      <div>{</div>
      <div>"code":0,</div>
      <div>"data":{"code":"https://i7f.cn/EZNFF5"},</div>
      <div>"msg":""</div>
      <div>}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: this.$SiteName,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.container {
  line-height: 2;
  padding-right: 10%;
  padding-left: 10%;
  margin-top: 1rem;
}
.h1 {
  font-size: 2em;
}
.h3 {
  font-size: 1.6em;
}
.h4 {
  font-size: 1.2em;
}
</style>
