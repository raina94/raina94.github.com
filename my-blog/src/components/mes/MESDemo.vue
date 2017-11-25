<template>
  <div class="demo-main">
    <side-menu />
  </div>
</template>

<script>
import SideMenu from './SideMenu.vue'
export default {
  name: 'Study',
  components: {
    'side-menu': SideMenu
  }
}
</script>

<style lang="scss" scoped>
  .demo-main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 700px;
  }
</style>