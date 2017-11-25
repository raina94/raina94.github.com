<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);

#app {
  font-family: 'Jeju Myeongjo','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-style: normal;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0 auto;
}
</style>
