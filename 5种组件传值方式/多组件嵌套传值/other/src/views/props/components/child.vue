<template>
  <div>
    <p>子组件: {{messageFromFather}}</p>
    <button @click="sendMessageToFather">向父组件发送数据</button>
    <p>从兄弟组件接收到的数据: {{messageFromMyBrother}}</p>
  </div>
</template>

<script>
export default {
  props: ['messageFromFather', 'messageFromMyBrother'],
  data () {
    return {
      message: '我是向父组件发送的数据'
    }
  },
  methods: {
    sendMessageToFather () {
      this.$emit('sendMessageToFather', this.message)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
