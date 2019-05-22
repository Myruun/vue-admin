<template>
  <!-- 如果当前 subroute 有子节点 -->
  <el-submenu
    v-if="!subroute.hidden && subroute.children && subroute.children.length > 0"
    :index="genPath(fatherpath, subroute.path)"
  >
    <!-- 创建菜单分组 -->
    <template slot="title">
      <i class="iconfont " :class="subroute.meta.icon"></i>
      <span slot="title" v-text="subroute.name"></span>
    </template>

    <!-- 递归调用自身，直到 subroute 不含子节点 -->
    <SidebarItem
      v-for="(submenu, subidx) in subroute.children"
      :subroute="submenu"
      :fatherpath="genPath(fatherpath, subroute.path)"
      :barIdx="subidx"
      :key="barIdx + '-' + subidx"
    />
  </el-submenu>

  <!-- 当前节点不含子节点且非隐藏 -->
  <el-menu-item
    style="font-weight: 400"
    v-else-if="!subroute.hidden"
    :index="genPath(fatherpath, subroute.path)"
  >
    <i class="iconfont " :class="subroute.meta.icon"></i>
    <span slot="title" v-text="subroute.name"></span>
  </el-menu-item>

  <el-menu-item
    style="font-weight: 400"
    v-else
    :index="genPath(fatherpath, subroute.path)"
  >
    <i class="iconfont " :class="subroute.meta.icon"></i>
    <span slot="title" v-text="subroute.name"></span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    subroute: {
      type: Object
    },
    barIdx: {
      type: [String, Number]
    },
    fatherpath: {
      type: String
    }
  },
  computed: {
    // 默认激活的路由, 用来激活菜单选中状态
    defaultActive () {
      return this.$route.path

    },
  },
  methods: {
    // 生成侧边栏路由，格式: /a/b / c
    genPath () {
      let arr = [...arguments]
      let path = arr.map(v => {
        while (v[0] === '/') {
          v = v.substring(1)
        }
        while (v[-1] === '/') {
          v = v.substring(0, v.length)

        }
        return v
      }).join('/')

      path = path[0] === '/' ? path : '/' + path

      console.log(path)
      return path
    }
  }
}
</script>

<style>
.el-menu-item i {
  vertical-align: middle;
  display: inline-block;
}
.el-menu-item span {
  margin-left: 7px;
  display: inline-block;
  vertical-align: baseline;
}
.el-submenu__title span {
  display: inline-block;
  margin-left: 7px;
  /* padding-top: 1px; */
  vertical-align: baseline;
}
</style>