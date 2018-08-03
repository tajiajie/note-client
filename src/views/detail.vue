<template>
  <div class="detail-box">
      <div class="detail-con">
          <h1>{{res.title}}</h1>
        <div class="message">
           <span class="conzi">作者：</span>
           <span class="ziname">{{res.author}}</span>
           <span class="conzi">年月日</span>
        </div>
        <div class="con-detail">
          <p v-html="res.content"></p>
          <p></p>
        </div>
      </div>

  </div>



</template>

<script>
    export default {
        name: "detail",
      data(){
          return{
            arr:[],
            res:{}
          }
      },
      mounted(){

        this.$axios.get('/list',{id:this.$route.query.id}).then(res => {

          this.res = res.data.data[0];

          console.log(this.res)
        })
      }
    }

</script>

<style scoped>
.detail-box{
  width: 100%;
  background: #f1f1f1;
  overflow: hidden;
}
  .detail-con{
    padding-top: 35px;
    width: 1170px;
    margin: 50px auto 50px;
    background: white;
  }
 .detail-con h1{
   text-align: center;
   font-size: 2.5em;
   line-height: 1em;
   font-weight: 400;
   color: #303030;
 }
  .message{
    text-align: center;
    margin-top: 14px;
    color: #959595;
    font-size: 14px;
  }
  .ziname{
    margin-right: 15px;
    color: #e67e22;
  }
  .con-detail{
    margin-top: 30px;
    line-height: 3;
    padding: 10px 30px;
  }
.con-detail p{
    line-height: 3;
}
</style>



