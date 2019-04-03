<!--1模板：html结构 -->
<template>  
    <header>
        <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect" >
            
          <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="2">博客管理</el-menu-item>
            <el-menu-item index="3">搜索</el-menu-item>
            <el-menu-item index="4">其他</el-menu-item>
            
             
            </el-submenu>
            
          
            <div class="el-icon-class">
              <div>
            <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21"
            >
          </el-input>
                    
          
          </div>
          <div>
              <el-button type="primary" icon="el-icon-edit" v-on:click="skip('newBolg')"></el-button>
          </div>
          <div>
              <el-button type="primary" icon="el-icon-delete"></el-button>
        </div>
       
    </div>
          </el-menu>
    </header>
  </template>
  
  <!--2行为：处理逻辑 -->
  <script>
    
    import $ from 'jquery'
    
    export default {
      name: 'app-header',
      data () {
        return {
          title:"Vue.js Demo",
         
          input21: '',
        currentDate: new Date()
        }
      },
    
    computed:{
      activeIndex(){
        return this.$route.path.replace('/','')
      }
    },


      
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      skip(a){
        this.$router.push(a)
      }
}
    }
  </script>
 
  <!--3样式：解决样式 -->
  <style scoped>

  header{
    background: pink;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
    }
    .el-icon-class{
        height:60px;
        width:400px;
        display: flex;
        flex-direction: row;
        justify-content:space-around;
        align-items: center;
        margin-left: 0px;
    }
  </style>