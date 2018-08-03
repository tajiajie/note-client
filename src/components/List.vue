<template>
    <div class="list-box">
      <div class="ul">
        <router-link class="list-item" v-for="item in arr" :key="item.id" :to="'/detail?id='+item._id ">
          <div class="item-top">
            <div class="item-pic">
              <img src="../../img/img-fc9ed9cd31004240982073ebbce7d46d.jpg" alt="">
            </div>
            <div class="top-right">
              <div class="top-up">
                <span class="tname">{{item.author}}</span>
                <span class="title">{{item.title}}</span>
              </div>
              <div class="top-bottom">
                <span class="bottom-item">浏览：</span>
                <span class="bottom-item">回复：</span>
                <span class="bottom-item">分类：</span>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-html="item.content">
          </div>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "List",
      data(){
           return{
             arr:[]
           }
      },
      // methods:{
      //   handleCon(){
      //     this.$router.push("'/detail?id='+item._id")
      //   }
      // },
      mounted(){
          this.$axios.get('/list').then(res => {
            // console.log(res.data.data)
            this.arr = res.data.data;
          })
      }
    }
</script>

<style scoped>
.list-box{
  box-sizing: border-box;
  margin-top: 30px;
  border-radius: 4px;
  padding: 2px 20px;
  background: #fff;
  list-style-type: none;
}

  .list-item{
    display: block;
    padding-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
    text-decoration: none;
  }
  .item-top{
    width: 710px;
    height: 80px;
  }
  .item-pic{
    float: left;
    margin-right: 15px;
    width: 80px;
    height: 80px;
  }
  .item-pic img{
    width: 100%;
    height: 100%;
  }
  .top-right{
    float: left;
    /*width: 100%;*/
  }
  .tname{
    color: #409eff;
    font-weight: 700;
    padding-right: 8px;
    border-right: 1px solid #000;
  }
  .title{
    font-size: 18px;
    font-weight: 700;
    margin-left: 15px;
    color: #333;
  }
  .top-bottom{
    box-sizing: border-box;
    padding: 4px 8px;
    margin-top: 28px;
    border-radius: 4px;
    width: 615px;
    background: #bbb;
  }
  .bottom-item {
    font-size: 14px;
    color: #333;
    font-weight: 700;
    margin-right: 30px;
  }
  .item-bottom{
    color: #333;
    margin-top: 10px;
  }
</style>
