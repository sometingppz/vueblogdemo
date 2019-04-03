<!--模板-->
<template>
  <div id="app">
    
<app-header></app-header>
<router-view></router-view>   
<app-footer></app-footer>
  </div>
</template>

<!--行为-->
<script>
  //局部注册组件
  import Users from './components/Users'
  import Header from './components/Header'
  import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    "users":Users,
    "app-header":Header,
    "app-footer":Footer
  }
}
</script>

<!--样式-->
<style >
  
</style>