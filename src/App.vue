<template>
  <div id="app">
    <v-header></v-header>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
  import header from 'components/v-header/v-header.vue'
  export default {
    name: 'app',
    components: {
      'v-header': header
    }
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
