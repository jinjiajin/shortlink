<template>
  <view>
    <view class="mask"></view>
    <view v-if="type==1">
      <view class="linkbox">
        <view class="linkimg">
          <image src="/static/succ.png"></image>
        </view>
        <view class="tips">{{content}}</view>
        <view class="btn" @click="copy">复制</view>
        <view class="close" @click="close">
          <icon type="clear" size="26" />
        </view>
      </view>
    </view>
    <view v-if="type==2">
      <view class="linkbox">
        <view class="linkimg">
          <image src="/static/fail.png"></image>
        </view>
        <view class="tips">{{content}}</view>
        <view class="btn" @click="eventClick">确定</view>
        <view class="close" @click="close">
          <icon type="clear" size="26" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: '1',
    },
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  methods: {
    copy() {
      // #ifdef MP
      uni.setClipboardData({
        data: this.content,
        success: function () {
          // console.log('success')
        },
      })
      // #endif
      // #ifndef MP
      this.h5Copy(this.content)
      // #endif
      this.$emit('close')
      uni.showToast({
        title: '链接复制成功',
        icon: 'none',
        duration: 1500,
      })
    },
    h5Copy(content) {
      console.log(content)
      if (!document.queryCommandSupported('copy')) {
        // 不支持
        return false
      }
      let textarea = document.createElement('textarea')
      textarea.value = content
      textarea.readOnly = 'readOnly'
      document.body.appendChild(textarea)
      textarea.select() // 选择对象
      textarea.setSelectionRange(0, content.length) //核心
      let result = document.execCommand('copy') // 执行浏览器复制命令
      textarea.remove()
      return result
    },
    close() {
      this.$emit('close')
    },
    eventClick() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 888;
  background-color: rgba(0, 0, 0, 0.6);
}
.btn {
  width: 70%;
  margin: 20rpx auto;
  margin-top: 40rpx;
  padding: 20rpx 0px;
  text-align: center;
  background: #4884ff;
  border-radius: 34px;
  font-size: 30rpx;
  color: #fff;
}

/* 屏幕小于1440px */
@media screen and (max-width: 1440px) {
  .linkbox {
    width: 80%;
    left: 10%;
  }
}

/* 屏幕等于1440px */
@media screen and (max-width: 1440px) and (min-width: 1440px) {
  .linkbox {
    width: 30%;
    left: 35%;
  }
}

/* 屏幕大于1440px */
@media screen and (min-width: 1441px) {
  .linkbox {
    width: 30%;
    left: 35%;
  }
}

.linkbox {
  position: absolute;
  top: 20%;
  z-index: 998;
  background-color: #fff;
  border-radius: 30rpx;
  padding: 30rpx 0rpx;
  // max-width: 500px;
  margin: auto;
  .close {
    position: absolute;
    top: 5px;
    right: 10px;
    z-index: 999;
    text-align: center;
  }
  .linkimg {
    margin: 20px 0 0 0px;
    text-align: center;
    image {
      width: 100px;
      height: 100px;
    }
  }
  .tips {
    padding: 10rpx 20rpx;
    text-align: center;
    font-size: 35rpx;
    color: #333;
  }
}
</style>
