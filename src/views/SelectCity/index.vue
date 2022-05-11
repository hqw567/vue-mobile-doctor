<template>
  <div>
    <van-popup v-model="show" round position="bottom">
      <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false" @finish="onFinish" />
    </van-popup>
  </div>
</template>

<script>
import api from '@/api'
export default {
  name: 'SelectCity',
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [
        {
          text: '浙江省',
          value: '330000',
          children: [{ text: '杭州市', value: '330100' }]
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{ text: '南京市', value: '320100' }]
        }
      ]
    }
  },
  created() {
    api.getNationalCity().then(result => {
      const res = result.data.data
      const arr = []
      res.forEach(item => {
        const obj = {}
        obj.text = item.name
        obj.value = item.code
        obj.children = []
        item.pchilds.forEach((ele, index) => {
          const child = {}
          child.text = ele.name
          child.value = ele.code
          child.children = []
          item.pchilds[index].cchilds.forEach(cchild => {
            const cchilds = {}
            cchilds.text = cchild.name
            cchilds.value = cchild.code
            child.children.push(cchilds)
          })
          obj.children.push(child)
        })
        arr.push(obj)
      })
      this.options = arr
    })
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.show = false
      this.$parent.fieldValue = selectedOptions[2].text
    }
  }
}
</script>

<style></style>
