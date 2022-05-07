<template>
  <div class="entry">
    <router-link to="/askDoctor" class="item">
      <div class="img">
        <img src="https://img1.dxycdn.com/2021/0804/220/9442938684169526943-22.png" alt="" />
      </div>
      <div class="title">问医生</div>
    </router-link>
    <router-link to="/detection" class="item">
      <div class="img">
        <img src="https://img1.dxycdn.com/2021/0804/598/2642938684169526943-22.png" alt="" />
      </div>
      <div class="title">核酸检测</div>
    </router-link>
    <router-link to="/" class="item">
      <div class="img">
        <img src="https://img1.dxycdn.com/2021/0804/827/1742938684169526943-22.png" alt="" />
      </div>
      <div class="title">防疫物资</div>
    </router-link>
    <router-link to="/" class="item">
      <div class="img">
        <img src="https://img1.dxycdn.com/2021/0804/239/7448668684169526943-22.png" alt="" />
      </div>
      <div class="title">出行政策</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeEntry'
}
</script>

<style lang="scss" scoped>
.entry {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.2rem;
  background-color: #fff;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img {
    width: 0.7rem;
    img {
      width: 100%;
    }
  }
}
</style>
