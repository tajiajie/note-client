<template>
  <div class="write-con">
    <div class="write-content">
      <div class="title-wrap">
        <div class="title-label">
          标题
        </div>
        <input type="text" placeholder="输入笔记标题" v-model="title">
      </div>

      <div>
        <div class="title-label">
          内容
        </div>
        <!--富文本-->
        <div class="editor">
          <div ref="editor" style="text-align:left;min-height: 300px"></div>
          <div class="labels clearfix">
            <span>标签：</span>
            <div class="write-lab">
              <label>VueJs</label>
            </div>
          </div>
          <button @click="getContent">发布笔记</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import E from 'wangeditor'
    export default {
        name: "write",
      data () {
        return {
          editorContent: "",
          title:"",
        }
      },
      methods: {
        getContent() {
          let params = {
            title : this.title,
            content : this.editorContent
          };
          this.$axios.post('/write',params).then( res => {
            console.log(res.data)
            if(res.data.code == 200){
              alert('发表成功');
              this.$router.push('/home')
            }
            else {
              alert(res.data.msg)
            }
          })
        }
      },
      mounted() {
        var editor = new E(this.$refs.editor);
        editor.customConfig.onchange = (text) => {
          this.editorContent = text
        };
        editor.create()
      }
    }
</script>

<style scoped>
.write-con{
  width: 100%;
  overflow: hidden;
  background: #f1f1f1;
}
  .write-content{
    width: 1170px;
    margin: 30px auto 0;
    padding: 8px 24px;
    background: white;
    box-sizing: border-box;
  }
  .title-label{
    margin-top: 6px;
    color: #333;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  }
  .title-wrap input{
    margin-top: 10px;
    border: 1px solid #eee;
    border-radius: 4px;
    box-sizing: border-box;
    width: 100%;
    line-height: 40px;
    padding: 0 6px;
    font-size: 16px;
    color: #555;
    outline: none;
  }
  .editor{
    margin-top: 10px;
  }
  .editor button{
    margin-top: 30px;
    width: 100px;
    height: 40px;
    color: white;
    background: #409eff;
    line-height: 40px;
    border-radius: 4px;
    border: none;
    font-size: 14px;
  }
  .labels{
    margin-top: 10px;
  }
  .clearfix:after{
    content: '';
    display: block;
    clear: both;
  }
  .labels span{
    font-size: 14px;
    font-weight: 700;
    color: #409eff;
    float: left;
  }
  .write-lab{
    float: left;
  }
</style>
