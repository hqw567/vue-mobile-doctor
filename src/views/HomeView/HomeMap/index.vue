<template>
  <div>
    <h1 class="title">疫情地图</h1>
    <van-tabs v-model="active" animated>
      <van-tab title="国内疫情">
        <div class="china">
          <div class="item">
            <p>
              较昨日<span>{{ desc.currentConfirmedIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.currentConfirmedCount | numberPutComma }}</p>
            <p>现存确诊</p>
          </div>
          <div class="item">
            <p>
              较昨日<span>{{ desc.suspectedIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.suspectedCount | numberPutComma }}</p>
            <p>境外输入</p>
          </div>
          <div class="item">
            <p>
              较昨日<span>{{ desc.seriousIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.seriousCount | numberPutComma }}</p>
            <p>现存无症状</p>
          </div>
          <div class="item">
            <p>
              较昨日<span>{{ desc.confirmedIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.confirmedCount | numberPutComma }}</p>
            <p>累计确诊</p>
          </div>
          <div class="item">
            <p>
              较昨日<span>{{ desc.deadIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.deadCount | numberPutComma }}</p>
            <p>累计死亡</p>
          </div>
          <div class="item">
            <p>
              较昨日<span>{{ desc.curedIncr | formatNumber }}</span>
            </p>
            <p class="china-num">{{ desc.curedCount | numberPutComma }}</p>
            <p>累计治愈</p>
          </div>
        </div>
        <ChinaMap />
      </van-tab>
      <van-tab title="国外疫情"><div id="main2"></div></van-tab>
      <van-tab title="累计疫情"><div id="main3"></div></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ChinaMap from '../HomeMap/ChinaMap'
export default {
  name: 'HomeMap',
  props: ['desc'],
  components: {
    ChinaMap
  },
  data() {
    return {
      active: 0
    }
  },
  filters: {
    formatNumber(num) {
      return num > 0 ? `+${Number(num).toLocaleString()}` : Number(num).toLocaleString()
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  padding-left: 0.2rem;
  background-color: #fff;
  height: 0.5rem;
  color: black;
  font-size: 0.3rem;
}
.main {
  width: 100%;
  height: 5rem;
}
.china {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  margin: 0.2rem;
  padding: 0.1rem;
  border: 0.01rem solid #ebebeb;
  border-radius: 0.15rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgb(0 0 0 / 5%);
  .item {
    width: 33%;
    text-align: center;
  }
  .china-num {
    font-size: 0.38rem;
  }
}
</style>
