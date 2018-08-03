<template>
  <div class="index-con">
    <div class="con-box">
      <div class="box-left">
        <!--轮播-->
        <div class="lunbo">
          <Swiper></Swiper>
        </div>
        <!---->
        <div>
          <List></List>
        </div>
      </div>
      <!--登录-->
      <div class="box-rigth">
        <!--登录前-->
         <div class="login-box" v-if="!usermsg.username">
           <div class="item">
             <input type="text" placeholder="邮箱" v-model="email">
           </div>
           <div class="item">
             <input type="password" placeholder="密码" v-model="password" @keyup.enter="handleLogin">
           </div>
           <div class="item">
             <button class="home-btn1" @click="handleLogin">登录</button>
           </div>
           <div class="item" @click="$router.push('region')">
             <button class="home-btn2">注册</button>
           </div>
         </div>
        <!--登录后-->
        <div class="user-box" v-else>
          <div class="user-box-item user-icon">
            <img src="../../img/img-fc9ed9cd31004240982073ebbce7d46d.jpg">
          </div>
          <div class="name-item">
            萌新:{{usermsg.username}}
          </div>
          <div class="email-item">
            email:{{usermsg.email}}
          </div>
          <div style="background: white">
            <button type="warning" class="home-btn3" @click="handleLogout">
              退出登陆
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../components/Swiper';
  import cookies from 'js-cookie';
  import List from '../components/List'
    export default {
        components:{
          Swiper,
          List
        },
        name: "home",
      data(){
          return{
            email: "",
            password: "",
            usermsg: {
              username: '',
              email: ''
            }
          }
      },
      methods:{
        handleLogin(){
          let params = {
            email:this.email,
            password:this.password
          }

          this.$axios.post('/login',params).then(res => {
            // console.log(res.data)
            // console.log(res.data.data)
            if(res.data.code == 200){
              this.usermsg = res.data.data;
              cookies.set('username',this.usermsg.username,{ expires: 14 });
              cookies.set('email',this.usermsg.email, { expires: 14 });

               alert('欢迎回来'+res.data.data.username)
            }
            else {
              alert(res.data.msg)
            }
          })
        },
        getUserMsg () {
          let username = cookies.get('username')
          let email = cookies.get('email')

          if(username && email){
            this.usermsg.username = username;
            this.usermsg.email = email
          }
        },
        handleLogout(){
          this.usermsg.email = '';
          this.usermsg.username = '';
          cookies.remove('username');
          cookies.remove('email');

          this.$axios.delete('/logOut').then(res => {
            if(res.data.code == 200){
              alert('退出登陆成功')
            }
            else {
              alert(res.data.msg);
            }
          })
        }
      },
      mounted () {
        this.getUserMsg()
      }
    }
</script>

<style scoped>
  .index-con{
    width: 100%;
    background: #f1f1f1;
    overflow: hidden;
  }
  .con-box{
    width: 1170px;
    margin: 50px auto 0;
  }
  .box-left{
    float: left;
    width: 750px;
  }
  .box-rigth{
    float: right;
    width: 360px;
    background: white;
    border-radius: 4px;
    padding: 21px 30px;
    box-sizing: border-box;
  }
  .item{
    margin-top: 30px;
  }
  .item input{
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;
  }
  .item button{
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    padding: 12px 20px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
  }
  .home-btn1{
     color: white;
     background: #409eff;
    border: 1px solid #409eff;
  }
  .home-btn2{
    color: #606266;
    background: white;
    border: 1px solid #dcdfe6;
  }

  /*登录后*/
  .user-box {
    padding-top: 30px;
  }
  .user-icon {
    text-align: center;
  }
  img {
    width: 100px;
    height: 100px;
  }

  .name-item,.email-item {
    text-align: center;
    margin-top: 20px;
    font-size: 16px;
    color: #333;
    font-weight: 400;
    line-height: 36px;
  }
  .home-btn3{
    margin-top: 10px;
    color: white;
    background-color: #e6a23c;
    border: none;
    width: 100%;
    border-radius: 4px;
    font-size: 14px;
    padding: 12px 20px;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
  }
</style>
