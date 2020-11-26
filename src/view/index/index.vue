<template>
  <div class="home" id="home" name="index">
    <!--导航开始-->
    <topbar></topbar>
<!--    内容区域-->

      <!-- 轮播图 -->
      <div class="carousel_demo">
        <el-carousel height="460px">
          <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
            <img style="height:460px;" :src="item.imgUrl"  />
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 轮播图END -->

<!--    底部区域-->
    <bottom></bottom>
  </div>

</template>

<script>
  import topbar from "../../components/topbar/topbar";
  import bottom from "../../components/bottom/bottom";
    export default {
        name: "index",
      data(){
          return{
            carousel: [
                {
                  id: 1,
                  imgUrl:'http://47.115.85.237:3000/public/imgs/cms_1.jpg'
                },
                {
                  id: 2,
                  imgUrl:'http://47.115.85.237:3000/public/imgs/cms_2.jpg'
                },
                {
                  id: 3,
                  imgUrl:'http://47.115.85.237:3000/public/imgs/cms_3.jpg'
                },
                {
                  id: 4,
                  imgUrl:'http://47.115.85.237:3000/public/imgs/cms_4.jpg'
                }
            ],//轮播图数据
          }
      },
      components:{
          topbar:topbar,
        bottom:bottom
      }
    }
</script>

<style scoped>
  @import '../../assets/css/index.css';
  .carousel_demo{
    margin-top: 25px;
  }
  .el-carousel{
    width: 98%;
    margin: 0 auto;
  }
</style>
