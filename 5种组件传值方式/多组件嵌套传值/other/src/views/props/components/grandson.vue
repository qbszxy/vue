<template>
  <div>
    <p>我是孙子组件</p>
    <p>我是来自爷爷的数据,由我父亲从爷爷那里接收并传给我: {{messageFromFather}}</p>
    <button @click="sendMessageToMyGrandfather">向我爷爷发送数据</button>
  </div>
</template>

<script>
export default {
  props: ['messageFromFather'],
  data () {
    return {
      messageToMyGrandfather: '我是向爷爷发送的数据'
    }
  },
  methods: {
    sendMessageToMyGrandfather () {
      this.$emit('sendMessageToMyGrandfather', this.messageToMyGrandfather)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
