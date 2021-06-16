<template>
  <div>
    <p>子组件: {{messageFromFather}}</p>
    <button @click="sendMessageToFather">向父组件发送数据</button>
    <p>从兄弟组件接收到的数据: {{messageFromMyBrother}}</p>
  </div>
</template>

<script>
import EventBus from '@/views/eventBus/eventBus.js'

export default {
  data () {
    return {
      message: '我是向父组件发送的数据',
      messageFromFather: '',
      messageFromMyBrother: ''
    }
  },
  methods: {
    sendMessageToFather () {
      EventBus.$emit('sendMessageToFather', this.message)
    }
  },
  mounted () {
    const that = this
    EventBus.$on('sendMessageToChild', function (v) {
      console.log(v)
      that.messageFromFather = v
    })
    EventBus.$on('sendMessageToMyBrother', function (v) {
      console.log(v)
      that.messageFromMyBrother = v
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
