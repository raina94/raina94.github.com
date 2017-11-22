<template>
    <div id="home-container">
        <main-header></main-header>
        <div class="home-content">
            <div>
                캔버스로 그림그리고 싶다
            </div>
        </div>
    </div>
</template>

<script>
import MainHeader from './MainHeader.vue'
export default {
  name: 'Home',
  components: {
    'main-header': MainHeader
  }
}
</script>

<style>
#home-container{
    width: 100%;
    min-height: 1024px;
}
.home-content {
  clear: both;
  float: left;
  width: 100%;
  margin-top: 10px;
  font-size: 1.3em;
}
</style>

