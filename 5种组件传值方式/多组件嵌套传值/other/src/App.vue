<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
body{
  background: #f5f5f5;
}
.no-data{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
