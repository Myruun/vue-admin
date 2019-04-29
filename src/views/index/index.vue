<template>
  <div class="index-wrap">
    <el-container>
      <el-aside> <asider /></el-aside>
      <el-container>
        <el-header>
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group></el-header
        >
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation } from "vuex-class";
import { asider } from "@/components/index"; // 组件
import { IndexState } from "@/types/views/index.interface";

@Component({
  components: { asider }
})
export default class index extends Vue {
  // Getter
  // @Getter author
  // @Getter isCollapse;

  @Mutation SET_AUTHOR: any;
  isCollapse: boolean = false;
  created() {
    // this.GET_DATA_ASYN();
    // console.log();
    this.SET_AUTHOR();
  }
  switchaside() {
    this.isCollapse = !this.isCollapse;
    console.log(this.isCollapse);
    this.SET_AUTHOR(this.isCollapse);
  }
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.index-wrap {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: $header;
    color: #333;
  }

  .el-aside {
    background-color: $aside;
    color: #333;
    width: auto !important;
  }

  .el-main {
    background-color: $main;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>

