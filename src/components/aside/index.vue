<template>
  <div id="four" class="four-wrap">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      hide-timeout="0"
      :collapse-transition="false"
      :router="true"
      :collapse="this.$store.state.Index.isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="installs">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">211</span>
      </el-menu-item>
      <el-menu-item index="install">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import aside from "@/router/aside";
import sidebarItem from "./SidebarItem.vue";

// import putdialog from "./dialog.vue"; // 组件
interface Window {
  aside: any;
}
@Component({})
export default class Aside extends Vue {
  created() {
    //
  }

  mounted() {
    //
    console.log(aside.options);
  }
  activated() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";
.four-wrap {
  width: 100%;
  height: 100%;
  // background-color: $aside;
  overflow: hidden;
  .el-submenu__title {
    padding: 0 45px;
    min-width: 200px;
  }
  .el-menu {
    border: none;
  }
}
</style>

