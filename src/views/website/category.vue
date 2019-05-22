<template>
  <div class="website-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix flex">
        <div>
          网站类别
        </div>

        <div>
          <el-button type="primary" @click="dialogFormVisible = true"
            >添加</el-button
          >
        </div>
      </div>

      <div class="text item">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column label="类别名称" show-overflow-tooltip>
            <template slot-scope="scope">
              <!-- <img :src="scope.row.address" alt="" srcset="" /> -->
              <span>类别</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="210" show-overflow-tooltip>
            <template>
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </el-card>

    <el-dialog title="类别添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="类别名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { WebsiteData } from "@/types/views/website.interface";

@Component({})
export default class About extends Vue {
  // prop
  value: any = "";
  form: any = {
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false,
    type: [],
    resource: "",
    desc: ""
  };
  dialogFormVisible: boolean = false;
  formLabelWidth: any = "75px";
  options: any = [
    {
      value: "选项1",
      label: "黄金糕"
    },
    {
      value: "选项2",
      label: "双皮奶"
    },
    {
      value: "选项3",
      label: "蚵仔煎"
    },
    {
      value: "选项4",
      label: "龙须面"
    },
    {
      value: "选项5",
      label: "北京烤鸭"
    }
  ];
  tableData: any = [];
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  // data

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.website-wrap {
  width: 100%;
  background: #fff;
  position: relative;
}
img {
  width: 20px;
  height: 20px;
}
.el-pagination {
  position: relative;
  right: 0px;
  padding: 10px 0px;
  text-align: right;
  // float: right;
}
.el-card__body {
  padding: 0px;
}
.el-card__header {
  padding: 18px 13px;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.update {
  float: right;
}
</style>
