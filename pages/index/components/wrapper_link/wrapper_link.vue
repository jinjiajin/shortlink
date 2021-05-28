<template>
  <div class="wrapper" v-if="links!==null && clicks !== null">
    <div class="wrapper_link">
      已生成{{links}}个短链接
    </div>
    <div class="wrapper_link">
      它们已经被点击了{{clicks}}次
    </div>
  </div>
</template>

<script>
import { countLinks, countClicks } from '@/server/config.js'
export default {
  data() {
    return {
      links: '',
      clicks: '',
    }
  },
  created() {
    this.getCountLinks()
    this.getCountClicks()
  },
  methods: {
    async getCountLinks() {
      const data = await countLinks({})
      this.links = data
    },
    async getCountClicks() {
      const data = await countClicks({})
      this.clicks = data
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 2.5rem;
}

.wrapper > .wrapper_link {
  text-align: center;
  margin-top: 0.3rem;
}
</style>
