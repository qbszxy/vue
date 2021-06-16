<template>
  <div class="container">
    <Product />
    <Sale />
  </div>
</template>

<script>
import Product from '@/views/components/Product.vue'
import Sale from '@/views/components/Sale.vue'

export default {
  components: {
    Product,
    Sale
  }
}
</script>

<style lang='scss' scoped>
  .container{
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
</style>
