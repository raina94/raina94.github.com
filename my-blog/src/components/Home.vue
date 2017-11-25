<template>
    <div id="home-container">
        <main-header
            class="main-header" 
            :is-visible="scrolled" 
            :scroll="scrollHandle" />
        <div class="home-content">
            <div>
                오늘도 열심히 하자
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
  },
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    scrollHandle: function () {
      this.scrolled = window.scrollY > 0
    }
  },
  created () {
    window.addEventListener('scroll', this.scrollHandle)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandle)
  }
}
</script>

<style lang="css" scoped>

#home-container {
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

.home-content {
    margin: 0 auto;
}
</style>

