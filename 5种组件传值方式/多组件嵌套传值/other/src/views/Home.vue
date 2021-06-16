<template>
  <div class="home-contaier">
    <router-link to="/props">props</router-link>
    <router-link to="/eventBus">EventBus(事件总线)</router-link>
    <router-link to="/provideInject">provide和inject</router-link>
    <router-link to="/attrsListeners">$attrs和$listeners</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='scss' scoped>
  .home-contaier{
    width: 100vw;
    height: 100vh;
    text-align: center;
    padding-top: 120px;
    a{
      display: block;
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
</style>
