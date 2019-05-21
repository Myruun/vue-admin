<template>
  <div id="four" class="four-wrap">
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="defaultActive"
      hide-timeout="0"
      :collapse-transition="false"
      :router="true"
      :collapse="this.$store.state.Index.isCollapse"
    >
      <SidebarItem
        v-for="(item, idx) in router"
        :subroute="item"
        :fatherpath="fatherPath"
        :barIdx="idx"
        :key="idx"
      />
    </el-menu>
  </div>
</template>


<script>
import SidebarItem from './SidebarItem'
import aside from '@/router/aside'
export default {
  naem: "aside",
  components: {
    SidebarItem
  },
  data () {
    return {
      router: []
    }
  },
  computed: {
    // 首次进入页面时展开当前页面所属的菜单
    defaultActive () {
      return this.$route.path
    },
    fatherPath () {
      return aside.options.routes[0].path
    }
  },
  created () {
    this.router = aside.options.routes
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

