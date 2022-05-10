<template>
  <div>
    <h1>全国疫情风险地区汇总</h1>
    <div class="currAddress">
      <p>请选择地区</p>
      <div>{{ getCity }}</div>
      <div>全部低风险</div>
    </div>
    <div class="zone">
      <div class="riskZone">
        <h2>高风险地区 {{ riskarea.high ? riskarea.high.length : 0 }} 个 时间</h2>
        <ul>
          <li v-for="(item, index) in riskarea.high" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="midZone">
        <h2>中风险地区 {{ riskarea.mid ? riskarea.mid.length : 0 }} 个 时间</h2>
        <ul>
          <li v-for="(item, index) in riskarea.mid" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import api from '@/api'
export default {
  name: 'AskSummary',
  data() {
    return {
      riskarea: {}
    }
  },
  created() {
    api.getCovInfo().then(result => {
      if (result.data.code === 200) {
        this.riskarea = result.data.newslist[0].riskarea
      }
    })
  },
  mounted() {},
  computed: {
    getCity() {
      return localStorage.getItem('cityname')
    }
  }
}
</script>

<style></style>
