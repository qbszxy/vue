<template>
  <div class="product-wrapper">
    <div class="product-item" :class="item.active ? 'active' : ''" v-for="item in data" :key="item.id" @click="chooseProduct(item)">{{item.name}}</div>
  </div>
</template>

<script>
import store from './store'

export default {
  data () {
    return {
      data: [
        { id: 1, name: '耐克', productId: '123456', chooser: '秦彬', active: false },
        { id: 2, name: '李宁', productId: '987654', chooser: '柱子', active: false },
        { id: 3, name: '其他', productId: '654321', chooser: '', active: false }
      ]
    }
  },
  methods: {
    chooseProduct (item) {
      this.data.forEach(function (i) { i.active = false })
      item.active = true
      store.setProductId(item.productId)
      store.setChooser(item.chooser)
    }
  }
}
</script>

<style lang='scss' scoped>
  .product-wrapper{
    width: 100%;
    height: auto;
    background: #fff;
    .product-item{
      display: flex;
      align-items: center;
      width: 100%;
      height: 30px;
      padding-left: 20px;
      cursor: pointer;
    }
    .product-item:hover{
      background: lightblue;
    }
    .active{
      background: lightsalmon;
    }
  }
</style>
