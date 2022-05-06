import axios from 'axios'
import base from './base'

const api = {
  getCovInfo() {
    return axios.get(base.tianApi + base.tianKey)
  }
}

export default api
