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
          :data="category"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="日期" width="160">
            <template slot-scope="scope">
              <span v-text="scope.row.add_time"></span
            ></template>
          </el-table-column>
          <el-table-column label="类别名称" show-overflow-tooltip>
            <template slot-scope="scope">
              <!-- <img :src="scope.row.address" alt="" srcset="" /> -->
              <span v-text="scope.row.web_title"></span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="210" show-overflow-tooltip>
            <template>
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination> -->
      </div>
    </el-card>

    <el-dialog title="类别添加" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="类别名称" :label-width="formLabelWidth">
          <el-input v-model="title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addcategory">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { WebsiteData } from "@/types/views/website.interface";
// import { category } from "@/api/website";

@Component({})
export default class About extends Vue {
  // prop
  value: any = "";
  title: any = "";
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
  category: any = [];
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  created() {
    this.showcategory();
  }

  addcategory() {
    this.dialogFormVisible = false;
    this.axios
      .post(
        'http://hn2.api.okayapi.com/?&service=App.Table.Create&model_name=home_category&data={"web_title":"' +
          this.title +
          '"}&app_key=591EDA6AB41AD46668F1D94A0EBDDC3B&sign=5E405D8F1DD072CBD85A8A2C611DF10C'
      )
      .then(response => {
        this.showcategory();
      })
      .catch(response => {
        console.log(response);
      });
  }
  showcategory() {
    //
    this.axios
      .get(
        'http://hn2.api.okayapi.com/?&service=App.Table.FreeQuery&model_name=home_category&page=1&perpage=10&where=[["id",">",0]]&app_key=591EDA6AB41AD46668F1D94A0EBDDC3B'
      )
      .then(response => {
        this.category = response.data.data.list;
      })
      .catch(response => {
        console.log(response);
      });
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
