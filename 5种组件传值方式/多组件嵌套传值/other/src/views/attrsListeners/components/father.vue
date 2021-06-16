<template>
  <div>
    <p>我是父亲组件</p>
    <Grandson v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Grandson from './grandson.vue'

export default {
  components: {
    Grandson
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
