<template lang="html">
    <div>
        <el-input
        type="textarea"
        autosize
        placeholder="请输入标题"
        v-model="textarea2" >
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 15}"
        placeholder="请输入内容"
        v-model="textarea3" ref="contextRef">
      </el-input>
    <el-form ref="form" :model="form" label-width="80px">
        
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
       
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即发布</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
  </div>
      </template>
      
      <script>
      
      export default{
       
          data(){
            return {
              tableData: [{
    name: "苹果",
    price: 25,
    category: "水果"
    }, {
        name: "香蕉",
        price: 15,
        category: "水果"
    }, {
        name: "雪梨",
        price: 65,
        category: "水果"
    }, {
        name: "宝马",
        price: 2500,
        category: "汽车"
    }, {
        name: "奔驰",
        price: 10025,
        category: "汽车"
    }, {
        name: "柑橘",
        price: 15,
        category: "水果"
    }, {
        name: "奥迪",
        price: 25,
        category: "汽车"
    }],
              textarea2: '',
        textarea3: '',
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          }
            }
          },methods:{
            onSubmit() {
          console.log('submit!');
          console.log(this.textarea2);
          this.$data.tableData.push({
        name:this.textarea2,
        price: this.textarea2,
        category: this.textarea3,
        
    });
    console.log(this.tableData);
    this.$message('你的博客名字为'+this.textarea2+"内容为"+this.textarea3+"发布成功");
        }
          }
          
        }
      </script>
      
      <style lang="css">
      
      </style>
      