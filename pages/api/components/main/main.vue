<template>
  <view class="container">
    <view class="h1">{{ siteName }}接口文档</view>
    <view>
      <view class="h3">基本信息:</view>
      <view>接口URL：https://i7f.cn/api/links</view>
      <view>请求方式：POST</view>
      <view class="h3">请求参数:</view>
      <view>参数名：longUrl</view>
      <view>示例值：https://taobao.com</view>
      <view class="h3">响应示例</view>
      <view class="h4">成功响应示例</view>
      <view>{ "code":0, "data":{"code":"https://i7f.cn/8o8oMh"},"msg":""}</view>
    </view>
  </view>
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
