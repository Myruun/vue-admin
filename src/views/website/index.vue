<template>
  <div class="website-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix flex">
        <div>
          网站管理
        </div>

        <div>
          <el-input
            style="padding: 3px 0;width:140px;margin-left:10px;"
            placeholder="请输入网站名称"
          ></el-input>
          <el-select
            style=" padding: 3px 0;width:120px; margin: 0px 10px;"
            v-model="value"
            clearable
            placeholder="请选择"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

          <el-button type="primary">查询</el-button>

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
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="160">
            <template slot-scope="scope">{{ scope.row.add_time }}</template>
          </el-table-column>
          <el-table-column prop="url_title" label="网站名称" width="160">
          </el-table-column>
          <el-table-column label="网站徽标" width="100" show-overflow-tooltip>
            <template slot-scope="scope">
              <img :src="scope.row.url_img" alt="" srcset="" />
            </template>
          </el-table-column>

          <el-table-column
            prop="url"
            label="所属分类"
            width="160"
            show-overflow-tooltip
          >
          </el-table-column>

          <el-table-column prop="url" label="网站地址" show-overflow-tooltip>
            <template slot-scope="scope">
              <a
                :href="scope.row.url"
                v-text="scope.row.url"
                target="_blank"
              ></a>
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

    <el-dialog title="网站添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="网站名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="网站icon" :label-width="formLabelWidth">
          <el-input
            v-model="form.name"
            style="width:calc(100% - 100px)"
            autocomplete="off"
          ></el-input>
          <el-button
            type="primary"
            class="update"
            @click="dialogFormVisible = false"
            >上 传</el-button
          >
        </el-form-item>
        <el-form-item label="网站类别" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="网站地址" :label-width="formLabelWidth">
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
// import {  } from "@/components" // 组件
// import js from "@/compo/data.js" // 组件
@Component({})
export default class About extends Vue {
  // prop
  value: any = "";
  form: any = {
    name: "",
    region: "",
    date1: "",
    date2: "",
    delivery: false
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
    this.showcategory();
  }

  addcategory() {
    this.dialogFormVisible = false;
    // this.axios
    //   .post(
    //     'http://hn2.api.okayapi.com/?&service=App.Table.Create&model_name=home_search&data={"web_title":"' +
    //       this.title +
    //       '"}&app_key=591EDA6AB41AD46668F1D94A0EBDDC3B&sign=5E405D8F1DD072CBD85A8A2C611DF10C'
    //   )
    //   .then(response => {
    //     this.showcategory();
    //   })
    //   .catch(response => {
    //     console.log(response);
    //   });
  }
  showcategory() {
    //
    this.axios
      .get(
        'http://hn2.api.okayapi.com/?&service=App.Table.FreeQuery&model_name=home_search&page=1&perpage=10&where=[["id",">",0]]&app_key=591EDA6AB41AD46668F1D94A0EBDDC3B'
      )
      .then(response => {
        this.tableData = response.data.data.list;
        console.log(1);
      })
      .catch(response => {
        console.log(response);
      });
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
