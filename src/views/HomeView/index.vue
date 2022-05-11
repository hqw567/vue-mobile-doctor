<template>
  <div class="home">
    <div class="home-top">
      <p class="top-views">{{ topViews | numberPutComma }}人次已浏览</p>
      <div class="top-btn" @click="selectCity">
        <img alt="icon" class="icon___mF9Qk" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAAAXNSR0IArs4c6QAAAXpJREFUWAntlz0vBFEUhhcJK9Fso9QpKLchrI/NRnQKP0Gt2k6j8yN0IqImiI/CH1BpFUKlkCDW2miM5xU3ubnVXXvmbjMnebPnztxznjdnZmdnSyXjyLJsEt2hezRr3D6uHeBt5OKdZD6u0nAX0Cr6dC74bKGaISKuFdAGaiMXMrIYV224C2gd+UY+WC8bIuJaAV1CgruQqXpcteEuoAtIl8OF7peGISKuFdAa0jfFhYysxFUb7gI6h3wjHdarQgyQzPC5iUZ1IOeYpv+Ux/giX5OJR5IJ70Tq9GEQ4nNqasB70iTGObiOysHJFMsWkOMUoIJRTKCYQDGBniegJ+YGXbbQWM/dum/QoWRHJl5IKt3Xm1W86gfsyKzd/xpdaxJ6jzhB/ivXDesm+kZ5hi7H7S9ARtAV8mOPhSaVLgCW0aXvgnwf9cXIRWDkgPVQunFAAjiCzgMjh/0ychYY2U06DcEwoImcekbekpv4MzKMCd0T+r+gp2ou8QPJt33V+J7gWwAAAABJRU5ErkJggg==" /><span class="content___2hIPS">{{ fieldValue ? fieldValue : '选择城市' }}</span>
      </div>
    </div>
    <HomeHot :hotTitle="newslist" />
    <HomeEntry />

    <div class="risk">
      <h2 class="risk-title">
        近期疫情分布 <span>截至北京时间{{ updataTime | dataFormat }}</span>
      </h2>
      <div class="risk-data">高风险地区{{ highCont }}个 中风险地区{{ midCont }}个 <router-link to="/askSummary">查看全部 ></router-link></div>
    </div>
    <HomeMap :desc="desc" />
    <HomeSwiper />
    <SelectCity ref="selectCity" />
  </div>
</template>

<script>
import api from '../../api/index'
import SelectCity from '../SelectCity'
import HomeEntry from './HomeEntry'
import HomeHot from './HomeHot'
import HomeMap from './HomeMap'
import HomeSwiper from './HomeSwiper'
export default {
  name: 'HomeView',
  components: {
    HomeHot,
    HomeEntry,
    HomeMap,
    HomeSwiper,
    SelectCity
  },
  data() {
    return {
      topViews: 4688899580,
      newslist: [1, 2],
      riskarea: {},
      desc: {},
      fieldValue: ''
    }
  },
  methods: {
    selectCity() {
      this.$refs.selectCity.show = true
    }
  },
  filters: {
    numberPutCommaShow: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    dataFormat(input, pattern = '') {
      // 在参数列表中 通过 pattern="" 来指定形参默认值，防止报错
      const dt = new Date(input)

      // 获取年月日

      const y = dt.getFullYear()

      const m = (dt.getMonth() + 1).toString().padStart(2, '0')

      const d = dt.getDate().toString().padStart(2, '0')

      // 如果 传递进来的字符串类型，转为小写之后，等于 yyyy-mm-dd，那么就返回 年-月-日

      // 否则，就返回  年-月-日 时：分：秒

      if (pattern.toLowerCase() === 'yyyy-mm-dd') {
        return `${y}-${m}-${d}`
      } else {
        // 获取时分秒

        const hh = dt.getHours().toString().padStart(2, '0')

        const mm = dt.getMinutes().toString().padStart(2, '0')

        const ss = dt.getSeconds().toString().padStart(2, '0')

        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      }
    }
  },
  created() {
    api.getCovInfo().then(result => {
      if (result.data.code === 200) {
        this.newslist = result.data.newslist[0]
        this.riskarea = result.data.newslist[0].riskarea
        this.desc = result.data.newslist[0].desc
      }
    })
  },
  computed: {
    highCont() {
      return this.riskarea.high ? this.riskarea.high.length : ''
    },
    midCont() {
      return this.riskarea.mid ? this.riskarea.mid.length : ''
    },
    updataTime() {
      return this.newslist.desc ? this.newslist.desc.modifyTime : ''
    }
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
.risk {
  margin: 20px 0;
  background-color: #fff;
  .risk-title {
    font-size: 0.38rem;

    span {
      font-size: 12px;
      color: #999;
    }
  }
  .risk-data {
    border: 1px solid #eee;
    border-radius: 3px;
    padding: 10px 6px;
  }
}
</style>
