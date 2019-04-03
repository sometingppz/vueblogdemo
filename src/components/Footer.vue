<template>
    <div>
      <el-row> 
        <el-col :span="16" > 
          <div class="footer_content">
             <span @click="skip('1')">
               首页
              </span>
               <span @click="skip('2')">
                博客管理
                </span> 
                <span @click="skip('3')">
                  搜索
                </span>
                   <span @click="skip('')">
                     其他
                    </span> 
                    <span @click="skip('newBolg')">
                      发博客</span> 
                      <p></p>
                    </div> 
                  </el-col>
                 </el-row>

    </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
  
        };
      },
    
      methods: {
        skip(a){
        this.$router.push(a)
      }
      }
          
         
      
    };
    </script>
    <style>
      .footer_content{
        background-color:pink;
        width:100vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content: center;

      }
    </style>