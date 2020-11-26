<template>
  <div>
      <!-- 顶部导航栏 -->
      <div class="topbar">
        <div class="nav">
          <ul class="nav_left">
            <li >
              你好,管理员:郑浩
            </li>
          </ul>
          <ul>
            <li >
              <el-button type="text">登录</el-button>
              <span class="sep">|</span>
              <el-button type="text" >注册</el-button>
            </li>
            <li >
              <el-button type="text" >我的视频</el-button>
            </li>
          </ul>
        </div>
      </div>
      <!-- 顶部导航栏END -->

      <!-- 顶栏容器 -->
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#409eff">

          <div>
              <div class="top">
                <div
                  v-for="(item,index) in bar"
                  :key="index"
                  class="topbarItem"
                  style="cursor:pointer">
                  <router-link :to="item.url">{{item.name}}</router-link>
                </div>
              </div>
              <div class="so">
                <el-input
                  placeholder="搜索内容……"
                  prefix-icon="el-icon-search">
                </el-input>
              </div>
          </div>
        </el-menu>
      </el-header>

  </div>


</template>

<script>
    export default {
      name: "topbar",
      data() {
        return {
          bar: [
            {
              id: 1,
              name: "首页",
              url: "/"
            },
            {
              id: 2,
              name: "信息通知",
              url: "/"
            },
            {
              id: 3,
              name: "我的课程",
              url: "/"
            },
            {
              id: 4,
              name: "比赛视频",
              url: "/"
            },
            {
              id: 5,
              name: "经济与法",
              url: "/"
            },
            {
              id: 6,
              name: "购物商城",
              url: "/"
            }
          ]
        };
      },
      mounted() {

      },
      methods: {

      }
    }
</script>

<style scoped>
  /*!* 导航头 *!*/
  .topbar .nav .nav_left{
    float: left;
  }
  * {
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    font-family: 宋体;
    color:black;
  }
  a:hover{
    color: red;
    padding: 10px;
    border-radius: 8px;
    background: #F1F3F4;
  }
  .top {
    width: 80%;
    margin: 10px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }
  .topbarItem {
    padding: 0 40px;
    font-size: 18px;
    line-height: 18px;
    color: brown;
  }
  .topbar {
    height: 40px;
    margin-top: -60px;
    background-color: #3d3d3d;
    margin-bottom: 20px;
  }
  .topbar .nav {
    width: 1220px;
    margin: 0 auto;
  }
  .topbar .nav ul {
    float: right;
  }
  .topbar .nav li {
    float: left;
    height: 40px;
    color: #b0b0b0;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    margin-left: 20px;
  }
  .topbar .nav .sep {
    color: #b0b0b0;
    font-size: 12px;
    margin: 0 5px;
  }
  .topbar .nav li .el-button {
    color: #b0b0b0;
  }
  .topbar .nav .el-button:hover {
    color: #fff;
  }
  .topbar .nav li a {
    color: #b0b0b0;
  }
  .topbar .nav a:hover {
    color: #fff;
  }
  .topbar .nav .shopCart:hover a {
    color: #ff6700;
  }
  .topbar .nav .shopCart-full a {
    color: white;
  }
  .el-header .el-menu {
    max-width: 1225px;
    margin: 0 auto;
  }
  .el-header .so {
    margin-left: 50px;
    width: 240px;
    float: right;
  }
</style>
