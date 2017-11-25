<template>
    <div class="header" v-if="isVisible">
        <div class="img-div">
            <img src="../assets/logo.png">
            <div>{{ msg }}</div>
        </div>
        <div class="menu-div">
            <ul>
                <li>나는 누구 /</li>
                <li>해본 것 /</li>
                <li><router-link to="/study">공부한 것 /</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      msg: '#Web#Dev#초-미니 개발자 #MES 조회화면 만들기'
    }
  }
}
</script>

<style scoped>
.header {
  float: left;
  width: 80%;
  height: 70px;
  border-bottom: 1px solid #ced4da;
  background-color: #fff;
  position: fixed;
  margin: 0;
  top: 0;
}
.img-div {
  width: 60%;
  height: 100%;
  float: left;
}
.menu-div {
  width: 40%;
  height: 100%;
  float: left;
}
img {
  float: left;
  height: 50%;
  margin: 0 0 0 10px;
}
.img-div div {  
  clear: both;
    float: left;
}
ul {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
 ul li {
  list-style: none;
  color: #000;
  float: left;
  line-height: 70px;
  text-align: center;
  padding: 0 8% 0 8%;
}
</style>