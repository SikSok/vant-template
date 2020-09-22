// 兼容 IE
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#babelpolyfill
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios包装
import axiosAPI from '@/utils/axios'
Vue.use(axiosAPI) // axios包装

// 设置 js中可以访问 $cdn
import { $cdn } from '@/config'
Vue.prototype.$cdn = $cdn

// 全局引入UI库 vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// 引入全局样式
import '@/assets/css/index.scss'
// 移动端适配
import 'lib-flexible/flexible.js'

// filters
import './filters'
Vue.config.productionTip = false
// 引入自定义 字符串format方法
import '@/utils/format.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
