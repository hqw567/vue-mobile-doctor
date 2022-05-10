import Vue from 'vue'
// 格式化数字三位加一逗号 (为0不显示)
Vue.filter('numberPutComma', num => {
  return Number(num).toLocaleString()
})
