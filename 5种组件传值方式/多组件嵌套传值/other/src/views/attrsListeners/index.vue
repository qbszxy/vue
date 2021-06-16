<template>
  <div class="attrsListeners-container">
    <p>我是祖先组件</p>
    <br>
    <br>
    <br>
    <hr>
    <Grandfather :message1="message1" :message2="message2" :messageObj="messageObj" v-on:methods1="methods1" v-on:methods2="methods2" />
  </div>
</template>

<script>
import Grandfather from './components/grandFather.vue'

export default {
  components: {
    Grandfather
  },
  data () {
    return {
      message1: '信息1',
      message2: '信息2',
      messageObj: {
        id: 1,
        name: '信息3'
      }
    }
  },
  methods: {
    methods1 () {
      console.log('曾祖父的事件1')
      alert('我是曾祖父事件1')
    },
    methods2 () {
      console.log('曾祖父的事件2')
      alert('我是曾祖父事件2')
    }
  }
}
</script>

<style lang='scss' scoped>
.attrsListeners-container{
  width: 100%;
  height: 100vh;
  background: #fff;
  padding: 20px;
}
</style>
