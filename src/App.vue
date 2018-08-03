<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'
export default {
  components:{
    Header
  },
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    /*background: #f1f1f1;*/
  }
</style>
