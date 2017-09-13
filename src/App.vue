<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-link to='/'>首页</router-link>
    <router-link to='/Foo'>关于我们</router-link>
    <router-link to='/Bar'>联系我们</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
