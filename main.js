import Vue from 'vue'
import App from './App'
import { siteName } from '@/env.js' // 加载全局的图片地址

Vue.config.productionTip = false
Vue.prototype.$SiteName = siteName
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
