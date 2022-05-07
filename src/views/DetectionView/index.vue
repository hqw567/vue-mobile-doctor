<template>
  <div>
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab title="核酸检测">
        <h1 class="h1">核酸检测</h1>
        <div class="wrapper">
          <div class="commodity">
            <a v-for="(item, index) in nucleate" :key="index" :href="item.url" class="item">
              <div class="commodity-top">
                <p class="city">{{ item.city }}</p>
                <img :src="item.imgUrl" alt="" />
              </div>
              <div class="commodity-bottom">
                <p class="title">{{ item.title }}</p>
                <p class="sellTitle">{{ item.sellTitle }}</p>
                <p class="address">{{ item.address }}</p>
                <p class="price">{{ item.price }}</p>
                <p class="buy">立即购买</p>
              </div>
            </a>
          </div>
        </div>
      </van-tab>
      <van-tab title="接钟点">
        <h1 class="h1">接钟点</h1>
        <div class="wrapper">
          <div class="commodity">
            <a v-for="(item, index) in vaccination" :key="index" :href="item.url" class="item">
              <div class="commodity-top">
                <p class="city">{{ item.city }}</p>
                <img :src="item.imgUrl" alt="" />
              </div>
              <div class="commodity-bottom">
                <p class="title">{{ item.title }}</p>
                <p class="sellTitle">{{ item.sellTitle }}</p>
                <p class="address">{{ item.address }}</p>
                <p class="price">{{ item.price }}</p>
                <p class="buy">立即购买</p>
              </div>
            </a>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'DetectionView',
  data() {
    return {
      active: 0,
      nucleate: [
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 雨花区',
          imgUrl: 'https://img1.dxycdn.com/2021/0414/365/4617425666476445743-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '检测新冠病毒出行更安心',
          sellTitle: '定点检查，快速采样，防交叉感染，安全放心',
          address: '五里牌街道车站北路社区卫生服务中心（疫苗）',
          price: '85',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        }
      ],
      vaccination: [
        {
          city: '长沙市 雨花区',
          imgUrl: 'https://img1.dxycdn.com/2021/0414/365/4617425666476445743-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '检测新冠病毒出行更安心',
          sellTitle: '定点检查，快速采样，防交叉感染，安全放心',
          address: '五里牌街道车站北路社区卫生服务中心（疫苗）',
          price: '85',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        },
        {
          city: '长沙市 开福区',
          imgUrl: 'https://img1.dxycdn.com/2021/0729/145/1150404939332905943-68.png?x-oss-process=image/quality,q_80/format,webp',
          title: '长沙湘城医院-核酸检测',
          sellTitle: '护士上门，安全采样，报告24-48小时出具',
          address: '松鼠快检（长沙）',
          price: '268',
          url: '#'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #fafafa;
}
.van-tab__pane {
  padding: 0.3rem 0.2rem;
}
.h1 {
  font-size: 0.35rem;
  color: #000;
  margin-bottom: 0.2rem;
}
.commodity {
  display: flex;
  flex-wrap: wrap;
  .item {
    border-radius: 0.2rem;
  }
  .commodity-top {
    position: relative;
    background-color: #f5f5f5;
  }
  .city {
    position: absolute;
    top: 0.15rem;
    left: 0.15rem;
    border-radius: 0.15rem;
    padding: 0.01rem 0.09rem;
    color: #fff;
    font-size: 12px;
    background-color: #939393;
  }
  .item {
    width: 48%;
    margin-right: 4%;
    background-color: #fff;
    img {
      width: 100%;
    }
  }
  .item:nth-child(2n) {
    margin-right: 0;
  }
  .commodity-bottom {
    padding: 0.2rem;
    .title,
    .sellTitle,
    .address {
      color: #9a9a9a;
      font-size: 0.1rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .title {
      font-weight: 700;
      color: #000;
    }
    .sellTitle {
      margin: 0.1rem 0;
    }

    .address::before {
      content: '地址:';
    }
    .price {
      color: red;
    }
    .price::before {
      content: '￥';
    }
    .buy {
      width: 100%;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      background-color: #f12448;
      color: #fff;
      border-radius: 0.4rem;
    }
  }
}
</style>
