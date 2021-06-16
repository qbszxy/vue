<template>
  <div>
    <p>我是孙子组件</p>
    <p>我是来自爷爷的数据,通过EventBus可以直接传给我: {{messageFromGrandfather}}</p>
    <button @click="sendMessageToMyGrandfather">向我爷爷发送数据</button>
  </div>
</template>

<script>
import EventBus from '@/views/eventBus/eventBus.js'

export default {
  data () {
    return {
      messageToMyGrandfather: '我是向爷爷发送的数据',
      messageFromGrandfather: ''
    }
  },
  methods: {
    sendMessageToMyGrandfather () {
      EventBus.$emit('sendMessageToMyGrandfather', this.messageToMyGrandfather)
    }
  },
  mounted () {
    const that = this
    EventBus.$on('sendMessageToChild', function (v) {
      console.log(v)
      that.messageFromGrandfather = v
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
