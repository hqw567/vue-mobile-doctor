import Vue from 'vue'
// 格式化数字三位加一逗号 (为0不显示)
Vue.filter('numberPutComma', (val, fix = 2) => {
  val = val.toFixed(fix) // 保留小数2位
  val = '' + val // 转换成字符串
  let int = val.slice(0, fix * -1 - 1) // 拿到整数
  const ext = val.slice(fix * -1 - 1) // 获取到小数
  // 每个三位价格逗号
  int = int.split('').reverse().join('') // 翻转整数
  let temp = '' // 临时变量
  for (let i = 0; i < int.length; i++) {
    temp += int[i]
    if ((i + 1) % 3 === 0 && i !== int.length - 1) {
      temp += ',' // 每隔三个数字拼接一个逗号
    }
  }
  temp = temp.split('').reverse().join('') // 加完逗号之后翻转
  temp = temp + ext // 整数小数拼接
  return temp // 返回
})
