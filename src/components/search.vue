<template>
  <div>
    <el-input v-model="tableDataName" placeholder="请输入标题" style="width:240px"></el-input>
    <el-button type="primary" @click="doFilter">搜索</el-button>
    <el-button type="primary" @click="openData">展示数据</el-button>
    <el-table
      :data="tableDataEnd"
      border
      style="width: 100%">
      <el-table-column
        prop="category"
        label="内容"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="随机数">
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalItems">
      </el-pagination>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableDataBegin: [{
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
        tableDataName: "",
        tableDataEnd: [],
        currentPage: 4,
        pageSize: 2,
        totalItems: 0,
        filterTableDataEnd:[],
        flag:false
      };
    },
    created() {
      this.totalItems = this.tableDataBegin.length;
      if (this.totalItems > this.pageSize) {
        for (let index = 0; index < this.pageSize; index++) {
          this.tableDataEnd.push(this.tableDataBegin[index]);
        }
      } else {
        this.tableDataEnd = this.tableDataBegin;
      }
    },
    methods: {
      
      doFilter() {
        if (this.tableDataName == "") {
          this.$message.warning("查询条件不能为空！");
          return;
        }
        this.tableDataEnd = []
        
        this.filterTableDataEnd=[]
        this.tableDataBegin.forEach((value, index) => {
          if(value.name){
            if(value.name.indexOf(this.tableDataName)>=0){
              this.filterTableDataEnd.push(value)
            }
          }
        });
        
        this.currentPage=1
        this.totalItems=this.filterTableDataEnd.length
      
        this.currentChangePage(this.filterTableDataEnd)
        
        this.flag=true
      },
      openData() {},
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.handleCurrentChange(this.currentPage);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        
        if(!this.flag){
        this.currentChangePage(this.tableDataEnd)
        }else{
        this.currentChangePage(this.filterTableDataEnd)      
        }
      }, 
      currentChangePage(list) {
        let from = (this.currentPage - 1) * this.pageSize;
        let to = this.currentPage * this.pageSize;
        this.tableDataEnd = [];
        for (; from < to; from++) {
          if (list[from]) {
            this.tableDataEnd.push(list[from]);
          }
        }
      }
    }
  };
  </script>