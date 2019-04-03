<template>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="标题"
            width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="内容"
            width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>内容: {{ scope.row.name }}</p>
                <p>标题: {{ scope.row.price }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      
      <script>
        export default {
          data() {
            return {
              tableData: []
            }
          },
          methods: {
            handleEdit(index, row) {
              console.log(index, row);
            },
            deleteRow(index, rows) {
        rows.splice(index, 1);
      },
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
      
      
            }
          },
          created() {
            this.loadData()
          },
         
        }
      </script>