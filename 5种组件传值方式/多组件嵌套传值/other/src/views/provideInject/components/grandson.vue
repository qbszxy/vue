<template>
  <div>
    <p>我是孙子组件: {{message}}</p>
    <!-- <p>我是孙子组件: <span v-for="item in arr" :key="item">{{item}}-</span></p> -->
  </div>
</template>

<script>
export default {
  inject: ['message'],
  // inject: ['arr'],
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
