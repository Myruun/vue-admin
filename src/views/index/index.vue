<template>
  <div class="index-wrap">
    <el-container>
      <el-aside> <asider /></el-aside>
      <el-container>
        <el-header>
          <i @click="switchaside" class="iconfont icon-qiehuan- swithaside"></i>
          <el-button type="primary" @click="switchaside">主要按钮</el-button>
        </el-header>
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

@Component({
  components: { asider }
})
export default class Index extends Vue {
  @Mutation SET_AUTHOR: any;
  isCollapse: boolean = false;
  created() {
    this.SET_AUTHOR();
  }
  switchaside() {
    this.isCollapse = !this.isCollapse;
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
    display: flex;
    padding-left: 0px;
    justify-content: space-between;
    align-items: center;
    .swithaside {
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      &:hover {
        background: #cccccc;
      }
    }
  }

  .el-aside {
    color: #333;
    width: auto !important;
    border-right: solid 1px #e6e6e6;
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

