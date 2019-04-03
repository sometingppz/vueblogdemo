<template>
    <header>
      <el-table
      :data="tableData"
      stripe:false
      style="width: 100%">
      <el-table-column
        prop="price"
        label="标题"
        width="400">
      </el-table-column>
      <el-table-column
        prop="name"
        label="内容"
        width="400">
      </el-table-column>
      
      
    </el-table>
  
    </header>
  </template>
  
  <!--2行为：处理逻辑 -->
  <script>
    export default {
      name: 'app-header',
      data () {
        return {
          title:"Vue.js Demo",
          
          paraSelect: {
          "up": "上涨",
          "down": "下跌",
          "u": "上",
    },
    tableData: []
        }
      },
      created() {
        this.loadData()
      },
      methods:{
        loadData:function(){
          this.$http({
  
  method: "get",
  
  url: "/static/home.json",
  
  dataType: "json",
  
  crossDomain: true,
  
  cache: false
  
  }).then(resolve => {
  
  console.log("请求成功",resolve.data);
   this.tableData=resolve.data;

  }),
  
  reject => {
  
  console.log("请求失败", reject);
  
  };
  
  
        },
        
        changeRadio:function(value) {
        console.log(value) 
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
    .text {
      font-size: 14px;
    }
  
    .item {
      margin-bottom: 18px;
    }
  
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
  
    .box-card {
      width: 600px;
    }
  </style>