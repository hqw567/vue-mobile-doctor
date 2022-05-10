<template>
  <div>
    <h1>轮播图</h1>
    <div>
      <swiper class="swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in banner" :key="index">
          <img :src="item.image" alt="" width="100%" />
        </swiper-slide>

        <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </swiper>
      <div>
        <div class="btn" v-for="(item, index) in banner" :key="index" :class="{ active: index === num }" @click="changeSwipr(index)">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    const that = this
    return {
      num: 0,
      banner: [],
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        on: {
          slideChangeTransitionStart: function () {
            if (this.activeIndex === that.banner.length + 1) {
              that.num = 0
            } else {
              if (this.activeIndex === 0) {
                that.num = that.banner.length - 1
              } else {
                that.num = this.activeIndex - 1
              }
            }
          }
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  methods: {
    changeSwipr(index) {
      this.num = index
      this.swiper.slideTo(index + 1, 1000, false)
    }
  },
  mounted() {
    api.getBanner().then(res => {
      this.banner = res.data.result
    })
  }
}
</script>

<style lang="scss" scoped>
.active {
  background-color: red;
}
.swiper {
  height: 4rem;
}
.btn {
  display: inline-block;
  padding: 5px 8px;
  border-radius: 8px;

  color: #000;
  margin-right: 10px;
}
</style>
