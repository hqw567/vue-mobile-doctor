// css初始化
import '@/assets/css/reset.css'
import '@/assets/js/filters'
import echarts from '@/plugins/echarts'
import Vue from 'vue'
import App from './App.vue'
import './plugins/vant'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
