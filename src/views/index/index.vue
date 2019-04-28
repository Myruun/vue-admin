<template>
  <div class="index-wrap">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { IndexData } from "@/types/views/index.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // data
  data: IndexData = {
    pageName: "index"
  };

  created() {
    //
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

