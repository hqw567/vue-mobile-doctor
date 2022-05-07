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
  }
}

export default api
