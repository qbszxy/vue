<template>
  <div>
    <p>我是兄弟组件</p>
    <p>我是来自父亲的数据: {{messageFromFather}}</p>
    <button @click="sendMessageToMyBrother">向兄弟组件发送数据</button>
    <br>
    <br>
    <Grandson :messageFromFather="messageFromFather" @sendMessageToMyGrandfather="getMessageFromMySon" />
  </div>
</template>

<script>
import Grandson from './grandson.vue'

export default {
  components: {
    Grandson
  },
  props: ['messageFromFather'],
  data () {
    return {
      message: '我是向兄弟组件发送的数据'
    }
  },
  methods: {
    sendMessageToMyBrother () {
      this.$emit('sendMessageToMyFather', this.message)
    },
    getMessageFromMySon (v) {
      this.$emit('sendMessageToMyGrandfather', v)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
