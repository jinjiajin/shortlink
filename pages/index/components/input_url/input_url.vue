<template>
  <div>
    <!-- 首页标语 -->
    <div class="title">开始缩短您的链接吧</div>
    <!-- 输入区 -->
    <div class="input-area">
      <div>
        <input class="input_url" type="url" placeholder="您的长链接（以 http:// 或 https:// 开头）"
          v-model="input_url" />
        <button class="button_url" @click="handleShorten()">
          缩短
        </button>
      </div>
    </div>
    <view v-if="isMask">
      <Popup :type="type" :content="content" @close="closeMask()"></Popup>
    </view>
  </div>
</template>

<script>
import { links } from '@/server/config.js'
import Popup from '@/components/link-popup/link-popup.vue'
export default {
  data() {
    return {
      input_url: '',
      isMask: false,
      content: '',
      type: '',
    }
  },
  components: {
    Popup,
  },
  methods: {
    closeMask() {
      //关闭弹窗
      this.isMask = false
    },
    async handleShorten() {
      if (!this.checkURL(this.input_url)) {
        this.type = '2'
        this.isMask = true
        this.content = '请输入正确的链接'
        this.input_url = ''
        return false
      }
      const data = await links({
        longUrl: this.input_url,
      })
      this.content = data.code
      this.type = '1'
      this.isMask = true
      this.input_url = ''
    },
    checkURL(url) {
      var str = url
      var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
      var objExp = new RegExp(Expression)
      if (objExp.test(str) == true) {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin: 0;
  text-align: center;
  font-size: 2em;
}
.input-area {
  display: flex;
  margin-top: 1.5rem;
  justify-content: center;
}
/* 屏幕小于1440px */
@media screen and (max-width: 1440px) {
  .input-area div {
    width: 320px;
    display: flex;
  }
}

/* 屏幕等于1440px */
@media screen and (max-width: 1440px) and (min-width: 1440px) {
  .input-area div {
    width: 600px;
    display: flex;
  }
}

/* 屏幕大于1440px */
@media screen and (min-width: 1441px) {
  .input-area div {
    width: 600px;
    display: flex;
  }
}

.input-area .input_url {
  border: none;
  outline: none;
  border: 1px solid $base;
  border-radius: 3px 0 0 3px;
  border-right: none;
  padding: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}

.input-area .button_url {
  border: none;
  outline: none;
  background: $base;
  border-radius: 0 3px 3px 0;
  color: white;
  font-weight: 600;
  cursor: pointer;
  padding: 0px 20px;
  white-space: nowrap;
}
</style>
