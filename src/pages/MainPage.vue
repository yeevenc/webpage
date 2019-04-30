<template>
  <div class="big">
    <titlebar />
    <div class="left">
      <div class="sort"><p>分类</p></div>
      <div class="button1">
        <ul class="a">
          <li>
      <a href="" class="button">按钮</a></li>
      <li><a href="" class="button">按钮</a></li>
      <li><a href="" class="button">按钮</a></li></ul>
      <ul class="b">
        <li>
      <a href="" class="button">按钮</a></li>
      <li><a href="" class="button">按钮</a></li>
      <li><a href="" class="button">按钮</a></li></ul>
      </div>
      </div>
    <div class="leftbottow">友情链接
      <div class="bth">
        <a href="">百度</a>
        <a href="">腾讯</a>
        <a href="">hao123</a>
        <a href="">百度</a>
        <a href="">腾讯</a>
        <a href="">hao123</a>
      </div>
    </div>
    <div class="right">轮播图</div>
    <div class="title">
      <div class="box1">
      <h3><a class="h1" href="">我是标题</a></h3>
      <p><a class="p1" href="">我是描述：1.开车去云南一家动物园玩，一头大象拦住去路，鼻<br>子伸到车里给食物不要，试着给一张钱，它居然用鼻子夹走了...</a></p>
      <a href="">
        <img src="../assets/car.jpg" height="75px">
      </a>
    </div>
    <div class="box1">
      <h3><a class="h1" href="">我是标题</a></h3>
      <p><a class="p1" href="">我是描述：1.开车去云南一家动物园玩，一头大象拦住去路，鼻<br>子伸到车里给食物不要，试着给一张钱，它居然用鼻子夹走了...</a></p>
      <a href="">
        <img src="../assets/car.jpg" height="75px">
      </a>
    </div>
    <div class="box1">
      <h3><a class="h1" href="">我是标题</a></h3>
      <p><a class="p1" href="">我是描述：1.开车去云南一家动物园玩，一头大象拦住去路，鼻<br>子伸到车里给食物不要，试着给一张钱，它居然用鼻子夹走了...</a></p>
      <a href="">
        <img src="../assets/car.jpg" height="75px">
      </a>
    </div>
    <p1>内容加载中...</p1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    goTest: function () {
      this.$router.push('/Test')
    }
  }
}
</script>

<style>
/* *{
  box-sizing: border-box;
} */
.big{
  width: 100%;
  height: 100%;
  overflow:auto;
  background-color: #efefef;
}
.left{
  width:150px;
  height: 500px;
  margin-top: 60px;
  border: 1px solid black;
  text-align: center;
  background-color:white;
  border:none;
}
.leftbottow{
  width:150px;
  height: 150px;
  margin-top: 30px;
  border: 1px solid black;
  /* border-top-style: none; */
  text-align: center;
  margin-left: 0px;
  background-color:white;
  border:none;
}
.right{
  width:620px;
  height: 380px;
  margin-top: -680px;
  border: 1px solid black;
  text-align: center;
  margin-left: 180px;
  background-color:white;
  border:none;
}
.button{
  background-color:#efefef;
  border: 1px solid #313030;
  color:black;
  padding: 1px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 1px;
  cursor: pointer;
  margin-right: 3px;
  margin-top:25px;
  background-color:white;
  border-radius: 5px;
  width: 30px;
}
ul.a{
  list-style-type:none;
  float:left;
  text-align: center;
  padding-left: 17px;
}
ul.b{
  list-style-type:none;
  float:right;
  text-align: center;
  padding-right: 17px;
}
.bth{
  margin-top: 10px;
  line-height:300%;
}
.title{
  text-align: center;
  width:618px;
  height: 680px;
  margin-top: 30px;
  border: 1px solid black;
  text-align: center;
  margin-left: 180px;
  color:#000000;
  background-color:white;
  border:none;
}
.h1{
  text-align: center;
  margin-right: 215px;
  margin-top:50px;
  text-decoration: none;
  color:#000000
}
.p1{
  text-align: center;
  float:right;
  margin-top:20px;
  text-decoration: none;
  color:#999999;
}
.box1{
  border: 1px solid;
  height: 170px;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-color: #afafaf;
  text-decoration: none;
  text-align: center;
}
.sort{
  font-weight: bolder;
  text-align: center;
  margin:auto;
  line-height: 300%;
}
</style>
