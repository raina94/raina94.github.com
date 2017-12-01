<template>
  <div class="demo-main">
    <div class="side-menu">
    <ul>
      <li v-for="menuList in menuLists" :key="menuList.id">
        <router-link :to="{name: source}">{{menuList.name}}</router-link>
      </li>
    </ul>
    </div>
    <div>
      vue.js 넘모 어렵다
    </div>
  </div>
</template>

<script>

let nextId = 1

export default {
  name: 'Study',
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
  .demo-main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    width: 100%;
    height: 700px;
  }
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

  div {
    float: left;
  }
</style>