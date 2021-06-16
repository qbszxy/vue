<template>
  <div class="sale-detail-container">
    <div class="sale-detail-wrapper">
      <div v-if="saleId !== -1">{{data.saleName}}</div>
      <div class="no-data" v-else>暂无数据</div>
    </div>
    <SaleDetailChild v-if="saleId !== -1" />
  </div>
</template>

<script>
import store from './store'
import getSaleDetail from '@/api/getSaleDetail'
import SaleDetailChild from './SaleDetailChild.vue'

export default {
  components: {
    SaleDetailChild
  },
  data () {
    return {
      state: store.state,
      data: {}
    }
  },
  computed: {
    saleId () {
      return this.state.saleId
    }
  },
  watch: {
    saleId: {
      handler (v, ov) {
        console.log(v)
        this.getSaleDetail(v)
      }
    }
  },
  methods: {
    getSaleDetail (saleId) {
      getSaleDetail(saleId).then(res => {
        console.log(res)
        if (res.code === 0) {
          this.data = res.data
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .sale-detail-container{
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
    width: 80%;
    height: 100%;
    .sale-detail-wrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 70%;
      height: 100%;
      border-right: 1px solid #e1e1e1;
    }
  }
</style>
