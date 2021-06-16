<template>
  <div class="sale-list-wrapper">
    <div class="sale-list-item" :class="item.saleId === saleId ? 'active' : ''" v-for="item in data" :key="item.id" @click="getSaleDetail(item)">{{item.saleName}}</div>
    <div class="no-data" v-show="productId === -1">暂无数据</div>
  </div>
</template>

<script>
import store from './store'
import getSaleList from '@/api/getSaleList'

export default {
  data () {
    return {
      state: store.state,
      data: []
    }
  },
  computed: {
    productId () {
      return this.state.productId
    },
    saleId () {
      return this.state.saleId
    }
  },
  watch: {
    productId: {
      handler (v, ov) {
        if (v !== -1) {
          this.getSaleList(v)
        }
      }
    }
  },
  methods: {
    getSaleList (productId) {
      getSaleList(productId).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.data = res.data
          store.setSaleId(res.data[0].saleId)
        } else {
          this.data = []
          store.setSaleId(-1)
          store.setProductId(-1)
        }
      })
    },
    getSaleDetail (item) {
      store.setSaleId(item.saleId)
    }
  }
}
</script>

<style lang='scss' scoped>
  .sale-list-wrapper{
    float: left;
    width: 20%;
    height: 100%;
    border-right: 1px solid #e1e1e1;
    .sale-list-item{
      width: 100%;
      height: auto;
      line-height: 1.4;
      padding: 12px;
      cursor: pointer;
    }
    .sale-list-item:hover{
      background: lightblue;
    }
    .active{
      background: lightsalmon;
    }
  }
</style>
