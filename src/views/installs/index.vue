<template>
  <div class="installs-wrap">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="mini" @click="dialogVisible = true">编辑</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span> -->
      <putdialog />
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { InstallsData } from "@/types/views/installs.interface";
import putdialog from "./dialog.vue"; // 组件

@Component({
  components: {
    putdialog
  }
})
export default class About extends Vue {
  // prop
  // @Prop({
  //   required: false,
  //   default: ""
  // })
  // name!: string;

  // data
  tableData: any = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ];
  created() {
    //
  }

  activated() {
    //
    // this.$confirm("确认关闭？")
    //   .then(_ => {
    //     // done();
    //   })
    //   .catch(_ => {});
  }

  mounted() {
    //
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.installs-wrap {
  width: 100%;
}
</style>
