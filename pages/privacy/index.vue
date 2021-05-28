<template>
  <div class="main-wrapper">
    <!-- 头部 -->
    <Header></Header>
    <!-- 内容 -->
    <Main></Main>
    <!-- 底部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'
import Main from './components/main/main.vue'
import Footer from '@/components/footer/footer.vue'
export default {
  components: {
    Header,
    Footer,
    Main,
  },
}
</script>
