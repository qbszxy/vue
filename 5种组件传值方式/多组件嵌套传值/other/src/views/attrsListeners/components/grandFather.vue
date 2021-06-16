<template>
  <div>
    <p>我是爷爷组件</p>
    <Father v-bind="$attrs" v-on="$listeners" />
  </div>
</template>

<script>
import Father from './father.vue'

export default {
  components: {
    Father
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
