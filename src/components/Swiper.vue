<template>
  <div class="block">
    <el-carousel height="340px">
      <el-carousel-item v-for="item in arr" :key="item._id">
        <img :src="item.img" alt="">
        <div class="lunzi">
          {{item.liu}}
        </div>
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
    export default {
        name: "Swiper",
      data(){
          return{
            arr:[]
          }
      },
      mounted(){
        this.$axios.get('/pic').then( res => {
          // console.log(res.data)
          this.arr = res.data.data;
        })
      }
    }
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 340px;
    margin: 0;
  }

  .block{
    position: relative;
  }
  .block img{
    height: 340px;
    width: 100%;
  }
  .lunzi{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    position: absolute;
    bottom: 0;
    z-index: 99;
    color: white;
    background: rgba(0,0,0, .5);
    font-size: 20px;
    font-weight: 400;
    box-sizing: border-box;
  }
</style>
