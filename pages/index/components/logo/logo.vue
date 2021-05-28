<template>
  <div class="wwrap">
    <div class="wrap">
      <div class="box d1"></div>
      <div class="box d2"></div>
      <div class="box d3"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
}
</script>

<style lang="scss" scoped>
.wwrap {
  height: 160px;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrap {
    height: 160px;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: relative;
    .box {
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .d1 {
      top: -20px;
      left: -20px;
      background-color: rgb(240, 143, 194);
    }

    .d2 {
      left: 0;
      top: 0;
      background-color: rgb(196, 13, 241);
      z-index: 1;
    }

    .d3 {
      bottom: -20px;
      right: -20px;
      background-color: rgb(12, 74, 245);
    }
  }
}
</style>
