<template>
  <div class="container">
    <div class="h1">{{ siteName }}使用条款</div>
    <p>我们已经尽力使我们的条款尽可能的清晰易读，所以不要期待法律术语的页面！</p>

    <div class="h2">禁止的活动</div>
    <p>
      用户不得通过
      {{ siteName }}
      缩短以下类型的URL：
    <ul>
      <li>商用电子邮件中的URL</li>
      <li>用于未经请求的广告（垃圾邮件），包括电子邮件、论坛帖子、SMS消息、社交网络</li>
      <li>链接到恶意内容（钓鱼网站、病毒、木马、广告软件或是任何其他恶意软件）</li>
      <li>任何形式的儿童色情链接</li>
      <li>链接到其他短链接服务或重定向站点或脚本（这些“链接链”通常用于隐藏恶意使用）</li>
      <li>侵犯版权的链接</li>
      <li>
        链接到我们认为不道德的内容，包括但不限于“快速致富”计划、传销计划、有偿“自助”计划、可疑竞争、要求用户填写付费调查的网站以及鼓励用户向其他人发送垃圾邮件的网站（如“邀请10名新会员免费获得XXX”）
      </li>
    </ul>
    此外，用户在使用
    {{ siteName }}
    时须遵守中国大陆的法律法规。
    </p>

    <div class="h2">URL的拒绝和删除</div>
    <p>
      我们可以在以后因为任何原因拒绝某些URL或将其删除。我们的目的只是为了保证用户不违反我们的使用条款或公平使用的精神，同时我们有权力怀疑某些用户会这样做。我们只是人类，偶尔会犯错误——如果我们认为合适的话，我们可以恢复被禁用的短链接。
    </p>

    <div class="h2">过度使用</div>
    <p>
      我们需要保持
      {{ siteName }}
      对大部分人的快速响应，因此我们可以将它的使用量限制在我们认为合理的水平上。
    </p>

    <div class="h2">我们的短网址</div>
    <p>
      在不违法我们的使用条款的情况下，
      {{ siteName }}
      的用户可以将短链接重定向到任何URL，并且对这些短链接的内容负责。
    </p>

    <div class="h2">数据使用</div>
    <p>我们不会与第三方共享任何信息，除非在我们的隐私政策中明确说明。</p>

    <div class="h2">违反我们的条款</div>
    <p>
      如果您违反了我们的条款，根据滥用的严重程度，我们可能会暂时或永久禁用您创建的短链接或阻止您使用
      {{ siteName }}
      。在严重滥用或非法使用的情况下，我们可以向相关执法机构举报。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteName: this.$SiteName,
    }
  },
  methods: {},
}
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
.h2 {
  font-size: 1.8em;
}
.h3 {
  font-size: 1.6em;
}
.h4 {
  font-size: 1.2em;
}
</style>
