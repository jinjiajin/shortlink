<template>
  <div class="container">
    <!-- 首页大LOGO -->
    <Logo></Logo>

    <!-- 输入区 -->
    <InputUrl></InputUrl>

    <!-- 检测结果提示 -->
    <Urlsec></Urlsec>

    <!-- 计数器组件 -->
    <WrapperLink></WrapperLink>

    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Logo from './components/logo/logo.vue'
import InputUrl from './components/input_url/input_url.vue'
import Urlsec from './components/urlsec/urlsec.vue'
import WrapperLink from './components/wrapper_link/wrapper_link.vue'
import Footer from '@/components/footer/footer.vue'

export default {
  components: {
    Logo,
    InputUrl,
    Urlsec,
    WrapperLink,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  position: absolute;
  /* #ifdef MP || APP-PLUS */
  margin-top: 10rem;
  /* #endif */
  /* #ifdef H5 */
  margin-top: 6rem;
  /* #endif */
  div {
    font-size: 14px;
    outline: none;
  }
}
</style>
