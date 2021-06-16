<template>
  <div class="provideInject-container">
    <p>我是祖先组件</p>
    <br>
    <br>
    <br>
    <hr>
    <Grandfather />
  </div>
</template>

<script>
import Grandfather from './components/grandFather.vue'

export default {
  components: {
    Grandfather
  },
  data () {
    return {

    }
  },
  provide: {
    message: '给曾孙子的数据'
  },
  // provide () {
  //   return {
  //     arr: [1, 2, 3]
  //   }
  // },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
.provideInject-container{
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 20px;
}
</style>
