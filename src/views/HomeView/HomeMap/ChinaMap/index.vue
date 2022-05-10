<template>
  <div class="container">
    <h1>中国疫情地图</h1>
    <div id="main" style="height: 8rem; width: 95%"></div>
  </div>
</template>

<script>
export default {
  name: 'ChinaMap',
  mounted() {
    this.$nextTick(() => {
      this.$myChart.chinaMap('main', [
        { name: '内蒙古', value: 200 },
        { name: '北京', value: 8000 },
        { name: '上海', value: 9999 }
      ])
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
