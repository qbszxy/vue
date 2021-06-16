<template>
  <div class="props-container">
    <p>父组件自己的数据: {{myMsg}}</p>
    <p>来自子组件的数据: {{messageFromChild}}</p>
    <p>来自孙子的数据: {{messageFromMyGrandson}}</p>
    <button @click="sendMessageToChild">向子组件发送数据</button>
    <br>
    <br>
    <hr>
    <br>
    <br>
    <Child :messageFromFather="message" :messageFromMyBrother="messageFromAnotherChild" @sendMessageToFather="getMessageFromChild" />
    <br>
    <br>
    <hr>
    <br>
    <br>
    <Brother :messageFromFather="message" @sendMessageToMyFather="getMessageFromAnotherChild" @sendMessageToMyGrandfather="getMessageFromMyGrandson" />
  </div>
</template>

<script>
import Child from './components/child.vue'
import Brother from './components/brother.vue'

export default {
  components: {
    Child,
    Brother
  },
  data () {
    return {
      myMsg: '父组件自己的数据',
      message: '我是来自父组件的数据',
      messageFromChild: '',
      messageFromAnotherChild: '',
      messageFromMyGrandson: ''
    }
  },
  methods: {
    getMessageFromChild (v) {
      console.log(v)
      this.messageFromChild = v
    },
    sendMessageToChild () {
      this.message = '改变后的父组件数据'
    },
    getMessageFromAnotherChild (v) {
      this.messageFromAnotherChild = v
    },
    getMessageFromMyGrandson (v) {
      this.messageFromMyGrandson = v
    }
  }
}
</script>

<style lang='scss' scoped>
.props-container{
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 20px;
}
</style>
