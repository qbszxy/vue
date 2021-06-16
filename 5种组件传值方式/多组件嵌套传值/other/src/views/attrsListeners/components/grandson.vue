<template>
  <div>
    <p>我是孙子组件: {{$attrs}}</p>
    <p>{{$attrs.message1}}</p>
    <p>{{$attrs.message2}}</p>
    <p>{{$attrs.messageObj}}</p>
    <p>{{$attrs.messageObj.id}}</p>
    <p>{{$attrs.messageObj.name}}</p>
    <button @click="triggerMethods1">触发曾祖父事件1</button>
    <br>
    <br>
    <button @click="triggerMethods2">触发曾祖父事件2</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    triggerMethods1 () {
      this.$listeners.methods1()
    },
    triggerMethods2 () {
      this.$listeners.methods2()
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
