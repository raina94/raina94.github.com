<template>
  <div class="side-menu">
    <ul>
      <li v-for="menuList in menuLists">
        {{ menuList.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SideMenu',
  data () {
    return {
      menuLists: [
      {name: '기초'},
      {name: '영업'},
      {name: '재고'},
      {name: '구매'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
    .side-menu {
      width: 150px;
      height: 100%;
      border: 1px solid #1098ad;
        ul {
          li {
            text-align: left;
          }
        }
    }
</style>