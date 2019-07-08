<template>
  <div class="installs-wrap">
    <el-row :gutter="20">
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix" v-once>
              <span>博客设置</span>
            </div>
            <div class="text item flex">
              <span>类别设置</span> <i class="iconfont icon-tubiao109"></i>
            </div>
          </el-card></div
      ></el-col>
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">1</div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content bg-purple-light">1</div></el-col
      >
    </el-row>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { InstallsData } from '@/types/views/installs.interface';
import putdialog from './dialog.vue'; // 组件

@Component({
  components: {
    putdialog
  }
})
export default class About extends Vue {
  created() {
    //
  }
  mounted() {
    //
    // let showtableData = this.tableData;
    // for (let item of showtableData) {
    //   item.car = false;
    // }
    // this.tableData = showtableData;
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.installs-wrap {
  width: 100%;
  .item {
    i {
      color: $theme !important ;
      cursor: pointer;
    }
  }
}
</style>
