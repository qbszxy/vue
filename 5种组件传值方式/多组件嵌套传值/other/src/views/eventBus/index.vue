<template>
  <div class="eventbus-container">
    <p>父组件自己的数据: {{myMsg}}</p>
    <p>来自子组件的数据: {{messageFromChild}}</p>
    <p>来自孙子的数据: {{messageFromMyGrandson}}</p>
    <button @click="sendMessageToChild">向子组件发送数据</button>
    <br>
    <br>
    <hr>
    <br>
    <br>
    <Child />
    <br>
    <br>
    <hr>
    <br>
    <br>
    <Brother />
  </div>
</template>

<script>
import Child from './components/child.vue'
import Brother from './components/brother.vue'
import EventBus from '@/views/eventBus/eventBus.js'

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
      messageFromMyGrandson: ''
    }
  },
  methods: {
    sendMessageToChild () {
      EventBus.$emit('sendMessageToChild', this.message)
    }
  },
  mounted () {
    const that = this
    EventBus.$on('sendMessageToFather', function (v) {
      that.messageFromChild = v
    })
    EventBus.$on('sendMessageToMyGrandfather', function (v) {
      that.messageFromMyGrandson = v
    })
  }
}
</script>

<style lang='scss' scoped>
.eventbus-container{
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 20px;
}
</style>
