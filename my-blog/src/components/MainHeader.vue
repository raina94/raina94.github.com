<template>
    <div class="header">
        <div class="img-div">
            <img src="../assets/logo.png">
            <span>{{ msg }}</span>
        </div>
        <div class="menu-div">
            <ul>
                <li>나는 누구 /</li>
                <li>해본 것 /</li>
                <li>공부한 것 /</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: '#Dev #Web #MES 조회화면 만들기'
    }
  }
}
</script>

<style scoped>
.header {
  float: left;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ced4da;
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
  margin: 10px 0 0 10px;
}
.img-div span {
    float: left;
    line-height: 70px;
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
  padding: 0 10% 0 10%;
}
</style>