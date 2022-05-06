<template>
  <div class="map">
    <div class="mapTap">
      <i></i><img alt="疫情热点" class="titleImg" src="https://img1.dxycdn.com/2021/0111/820/9732351014585228543-22.png" />
      <p class="watchMore"><span>查看更多</span></p>
    </div>
    <div class="mapBody">
      <div class="newTitle" v-for="(item, index) in hotTitle.title" :key="index">
        <span>最新</span>
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: ['hotTitle'],
  created() {
    console.log(this.hotTitle)
  }
}
</script>

<style lang="scss" scoped>
.map {
  background-color: #fff;
  border-bottom: 1px solid #eee;
}
.mapTap {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 0.8rem;
  padding: 0.05rem 0.16rem 0;
  font-weight: 500;
  font-size: 0.17rem;
  line-height: 0.44rem;

  i {
    display: inline-block;
    flex-shrink: 0;
    width: 0.1rem;
    height: 0.3rem;
    margin-right: 0.08rem;
    vertical-align: middle;
    background: #4169e2;
  }
  img {
    flex-shrink: 0;
    width: 1.2rem;
    height: 0.5rem;
  }
  .watchMore {
    margin-left: auto;
    span {
      position: relative;
      display: flex;
      align-items: center;
      height: 0.27rem;
      padding-left: 0.12rem;
      line-height: 0.27rem;
      text-align: center;
      color: #4169e2;
      font-weight: 500;
      font-size: 0.28rem;
    }
  }
}

.newTitle {
  display: flex;
  padding: 0.1rem 0.2rem;
  span {
    background-color: #f74c31;
    display: inline-block;
    height: 0.3rem;
    margin-top: 0.07rem;
    margin-right: 0.06rem;
    padding: 0 0.1rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.11rem;
    line-height: 0.3rem;
    text-align: center;
    vertical-align: top;
    border-radius: 0.02rem;
  }
  p {
    color: #1a1a1a;
    font-size: 0.3rem;
  }
}
</style>
