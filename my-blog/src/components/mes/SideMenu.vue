<template>
  <div class="side-menu">
    <ul>
      <li v-for="menuList in menuLists" :key="menuList.id">
        <router-link :to="{name: menuList.source}">{{menuList.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
let nextId = 1

export default {
  name: 'SideMenu',
  data () {
    return {
      menuLists: [
        {
          id: nextId++,
          name: '기초'
        },
        {
          id: nextId++,
          name: '영업'
        },
        {
          id: nextId++,
          name: '재고'
        },
        {
          id: nextId++,
          name: '구매'
        }
      ],
      source: 'workerList'
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