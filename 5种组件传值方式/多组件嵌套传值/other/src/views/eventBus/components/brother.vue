<template>
  <div>
    <p>我是兄弟组件</p>
    <p>我是来自父亲的数据: {{messageFromFather}}</p>
    <button @click="sendMessageToMyBrother">向兄弟组件发送数据</button>
    <br>
    <br>
    <Grandson />
  </div>
</template>

<script>
import EventBus from '@/views/eventBus/eventBus.js'
import Grandson from './grandson.vue'

export default {
  components: {
    Grandson
  },
  data () {
    return {
      message: '我是向兄弟组件发送的数据',
      messageFromFather: ''
    }
  },
  methods: {
    sendMessageToMyBrother () {
      EventBus.$emit('sendMessageToMyBrother', this.message)
    }
  },
  mounted () {
    const that = this
    EventBus.$on('sendMessageToChild', function (v) {
      console.log(v)
      that.messageFromFather = v
    })
  }
}
</script>

<style lang='scss' scoped>

</style>
