<template>
  <div class="installs-wrap">
    设置
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { InstallsData } from "@/types/views/installs.interface";
import putdialog from "./dialog.vue"; // 组件

@Component({
  components: {
    putdialog
  }
})
export default class About extends Vue {
  tableData: any = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄"
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄"
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄"
    }
  ];
  created() {
    //
  }

  mounted() {
    //
    let showtableData = this.tableData;
    for (let item of showtableData) {
      item.car = false;
      console.log(item);
    }

    this.tableData = showtableData;
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.installs-wrap {
  width: 100%;
}
</style>
