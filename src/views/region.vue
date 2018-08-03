<template>
  <div class="region-box">
    <div class="region">
      <h2 class="title">
        新用户注册
      </h2>

      <div class="item">
        <input type="text" placeholder="用户名" v-model="username">
      </div>

      <div class="item">
        <input type="text" placeholder="邮箱" v-model="email">
      </div>

      <div class="item">
        <input type="password" placeholder="密码" v-model="password" @keyup.enter="handleRegion">
      </div>

      <div class="item">
        <button type="primary" class="re-btn" @click="handleRegion">
          注册
        </button>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "region",
      data(){
          return{
            username: "",
            password:"",
            email:""
          }
      },
      methods: {
        handleRegion(){
          let params = {
            username : this.username,
            email : this.email,
            password : this.password
          };
          this.$axios.post('/user',params).then( res => {
            if(res.data.code == 200){
              alert('注册成功');
              this.$router.push('/home')
            }
            else {
              alert(res.data.msg)
            }
          })
        }
      },
    }
</script>

<style scoped>
  .region-box{
    width: 100%;
    background: #f1f1f1;
    overflow: hidden;
  }
  .region {
    color: #333;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 714px;
    margin: 100px auto 0;
    border-radius: 6px;
    background: #fff;
  }
  .region h2 {
    text-align: center;
    color: #333;
    font-weight: 400;
  }
  .item {
    box-sizing: border-box;
    width: 390px;
    margin: 30px auto 0;
  }
  .item input {
    background: white;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;
  }
  .re-btn {
    width: 100%;
    background: #409eff;
    border: 1px solid #409eff;
    cursor: pointer;
    color: white;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    text-align: center;
    outline: none;
  }



</style>
