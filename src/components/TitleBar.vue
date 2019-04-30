<template>
  <div class="titlebar">
    <a class="icon" href="/">
      <img width="130" src="../assets/baidu.png">
    </a>
    <a class="titlebarTxt" href="/">主页</a>
    <a class="titlebarTxt" href="">价格浏览</a>
    <a class="titlebarTxt" href="">其他</a>
    <input class="titlebar-search" type="text" placeholder="搜索.." name="search">
  </div>
</template>

<script>
export default {
  name: 'titlebar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titlebar {
 height:50px;
 flex: 1;
 background-color:white;
 flex-direction: row;
 align-items:center;
 padding-left: 50px;
 padding-right: 50px;
 display: flex;
 position: fixed;
}
.icon {
    width: 150px;
}
.titlebar-search[type=text]{
  height:18px;
  padding:6px;
  font-size: 17px;
  border:1px solid #afafaf;
  color: #111;
  margin-left:78px;
}
.titlebarTxt{
  width: 100px;
  text-decoration: none;
  font-size: 17px;
  font-weight: bolder;
  color:black;
  text-align: center;
  display:block;
}
</style>
