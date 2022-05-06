<template>
  <div class="home">
    <div class="home-top">
      <p class="top-views">{{ topViews | numberPutComma(0) }}人次已浏览</p>
      <a href="#" class="top-btn"> <img alt="icon" class="icon___mF9Qk" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAXpJREFUWAntlz0vBFEUhhcJK9Fso9QpKLchrI/NRnQKP0Gt2k6j8yN0IqImiI/CH1BpFUKlkCDW2miM5xU3ubnVXXvmbjMnebPnztxznjdnZmdnSyXjyLJsEt2hezRr3D6uHeBt5OKdZD6u0nAX0Cr6dC74bKGaISKuFdAGaiMXMrIYV224C2gd+UY+WC8bIuJaAV1CgruQqXpcteEuoAtIl8OF7peGISKuFdAa0jfFhYysxFUb7gI6h3wjHdarQgyQzPC5iUZ1IOeYpv+Ux/giX5OJR5IJ70Tq9GEQ4nNqasB70iTGObiOysHJFMsWkOMUoIJRTKCYQDGBniegJ+YGXbbQWM/dum/QoWRHJl5IKt3Xm1W86gfsyKzd/xpdaxJ6jzhB/ivXDesm+kZ5hi7H7S9ARtAV8mOPhSaVLgCW0aXvgnwf9cXIRWDkgPVQunFAAjiCzgMjh/0ychYY2U06DcEwoImcekbekpv4MzKMCd0T+r+gp2ou8QPJt33V+J7gWwAAAABJRU5ErkJggg==" /><span class="content___2hIPS">English Version</span> </a>
    </div>
    <HomeHot :hotTitle="newslist" />
    <HomeEntry />
    <HomeMap />
  </div>
</template>

<script>
import api from '../../api/index'
import HomeEntry from './HomeEntry'
import HomeHot from './HomeHot'
import HomeMap from './HomeMap'
export default {
  name: 'HomeView',
  components: {
    HomeHot,
    HomeEntry,
    HomeMap
  },
  data() {
    return {
      topViews: 4688899580,
      newslist: []
    }
  },
  filters: {
    numberPutCommaShow: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  created() {
    api.getCovInfo().then(result => {
      console.log(result.data)
      if (result.data.code === 200) {
        this.newslist = result.data.newslist[0]
      }
    })
    console.log(this.newslist)
  }
}
</script>

<style lang="scss" scoped>
.home-top {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 30.7%;
  color: #fff;
  font-size: 0.28rem;
  text-align: center;
  background: url(https://img1.dxycdn.com/2020/0314/863/3401956761707181858-2.png) no-repeat;
  background-position: top;
  background-size: cover;
  .top-views {
    position: absolute;
    bottom: 0.25rem;
    left: 6.4%;
    color: #fff;
    font-size: 0.11rem;
    line-height: 0.15rem;
  }
  .top-btn {
    position: absolute;
    top: 0.15rem;
    right: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 0.5rem;
    padding: 0 0.2rem;
    color: #fff;
    background-color: rgba(0, 0, 249, 0.38);
    border: 0.01rem solid hsla(0, 0%, 100%, 0.38);
    border-radius: 0.3rem;
    img {
      width: 0.11rem;
      height: 0.11rem;
    }
    span {
      margin-left: 0.1rem;
      font-size: 0.12rem;
    }
  }
}
</style>
