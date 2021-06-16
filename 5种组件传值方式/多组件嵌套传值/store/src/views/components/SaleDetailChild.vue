<template>
  <div class="sale-detail-child-wrapper">
    选品:{{chooser}}
  </div>
</template>

<script>
import store from './store'

export default {
  data () {
    return {
      state: store.state
    }
  },
  computed: {
    chooser () {
      return this.state.chooser
    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .sale-detail-child-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
  }
</style>
