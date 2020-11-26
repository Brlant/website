<template>
    <div>
      <el-footer>
        <div class="footer">
          <div class="mod_help">
            <div class="mod_help_demo">
              <div class="footer_help">
                <p >
                  <router-link to="">信息通知</router-link>
                  <span></span>
                  <router-link to="" >我的课程</router-link>
                  <span></span>
                  <router-link to="" >比赛视频</router-link>
                  <span></span>
                  <router-link to="" >经济与法</router-link>
                  <span></span>
                  <router-link to="">购物商城</router-link>
                </p>
              </div>
            </div>
            <p class="coty"></p>
          </div>

          <div class="mod_help">
            <p>
              <router-link to="" >首页</router-link>
              <span>|</span>
              <router-link to="">视频</router-link>
              <span>|</span>
              <router-link to="">网站信息</router-link>
            </p>
            <p class="copy">&copy;版权所有郑浩  2020-2100</p>
          </div>
        </div>
      </el-footer>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
  .footer {
    width: 100%;
    text-align: center;
    background: #2f2f2f;
    padding-bottom: 20px;
  }
.mod_help_demo{
  padding: 30px 0px 5px 0px;
  box-sizing: border-box;
}

  .footer .mod_help {
    text-align: center;
    color: #888888;

  }
  .footer .mod_help p {
    margin: 20px 0 16px 0;
  }

  .footer .mod_help p a {
    color: #718588;
    font-family: 宋体;
    text-decoration: none;
  }
  .footer .mod_help p a:hover {
    color: #763112;
  }
  .footer .mod_help p span {
    padding: 0 22px;
  }
  .footer_help{
    border-bottom: 1px solid #3d3d3d;
  }
  .copy{
    font-family: 宋体;
  }
  /* 底栏容器CSS END */
</style>
