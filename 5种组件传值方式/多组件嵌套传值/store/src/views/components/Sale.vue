<template>
  <div class="sale-wrapper">
    <SaleList />
    <SaleDetail />
  </div>
</template>

<script>
import SaleList from './SaleList.vue'
import SaleDetail from './SaleDetail.vue'

export default {
  components: {
    SaleList,
    SaleDetail
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .sale-wrapper{
    width: 100%;
    height: calc(100vh - 150px);
    background: #fff;
    margin-top: 20px;
  }
</style>
