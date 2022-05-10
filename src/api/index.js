import axios from 'axios'
import md5 from 'md5-js'
import base from './base'
const api = {
  getCovInfo() {
    return axios.get(base.tianApi + base.tianKey)
  },
  /**
   * 获取城市
   */
  getCity(cityName) {
    const sign = md5(`appid6938city_name${cityName}formatjson709b25c001c8d3325061a5baf7bb7615`)
    const key = `format=json&appid=6938&city_name=${cityName}&sign=${sign}`
    return axios.get(base.waApi + base.city + '?' + key)
  },
  /**
   * 获取轮播图
   */
  getBanner() {
    return axios.get(base.swiperBanner)
  },
  /**
   * 获取全国城市
   */
  getNationalCity() {
    return axios.get(base.rollAddress + '?app_id=n9gekkfquotmjphq&app_secret=ZEthMVQ0RjVDL1BkdmgzQ1dNVXlQUT09')
  }
}

export default api
