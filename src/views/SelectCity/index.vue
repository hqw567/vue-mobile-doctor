<template>
  <div>
    <h2>请选择城市</h2>
    <van-index-bar :index-list="indexList" highlight-color="##43b782">
      <van-index-anchor index="A" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />

      <van-index-anchor index="B" />
      <van-cell title="文本" />
      <van-cell title="文本" />
      <van-cell title="文本" />
    </van-index-bar>
  </div>
</template>

<script>
export default {
  name: 'SelectCity',
  data() {
    return {
      indexList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  created() {}
}
</script>

<style></style>
