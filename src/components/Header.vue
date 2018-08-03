<template>
    <div class="header">
        <div class="header-con">
            <h1>云笔记</h1>
            <div class="h-right">
              <i class="iconfont icon-sousuo"></i>
              <button class="header-btn" @click="headleRink">写笔记</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
      methods: {
        headleRink(){
          this.$router.push('/write')
        }
      }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 50px;
    background: #409eff;
  }
  .header-con{
    width: 1170px;
    height: 50px;
    margin: 0 auto;
    /*background: #409eff;*/
  }
  .header-con h1{
    margin-top: 5px;
    color: white;
    float: left;
    font-weight: 400;
    font-size: 30px;
    /*background: #409eff;*/
  }
  .h-right{
    float: right;
    /*background: #409eff;*/
  }
  .h-right i{
    color: white;
    font-size: 26px;
    margin-right: 10px;
    padding-top: 5px;
    cursor: pointer;
    /*background: #409eff;*/
  }
  .header-btn{
    margin-top: 5px;
    line-height: 1;
    cursor: pointer;
    border: 1px solid #dcdfe6;
    color: #606266;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
    background: white;
    text-align: center;
    padding: 12px 20px;
    box-sizing: border-box;
  }
</style>
