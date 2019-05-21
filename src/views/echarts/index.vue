<template>
  <div class="echarts-wrap">
    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>

      <el-col :span="24"
        ><div class="grid-content bg-purple-light">
          <div
            id="myChart"
            :style="{ width: '300px', height: '300px' }"
          ></div></div
      ></el-col>
    </el-row>
  </div>
</template>


<script lang="ts">
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { EchartsData } from "@/types/views/echarts.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop({
    required: false,
    default: ""
  })
  name!: string;

  // data

  created() {
    //

    let myChart = echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  drawLine() {
    // 基于准备好的dom，初始化echarts实例
    console.log("执行");
    let myChart = echarts.init(document.getElementById("myChart"));
    // 绘制图表
    myChart.setOption({
      title: { text: "ECharts 入门示例" },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });

    console.log("执行");
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.echarts-wrap {
  width: 100%;
}

.el-col-6 {
  padding: 10px;
}

.el-col-24 {
  padding: 10px;
}
.grid-content {
  background: #dddddd;
  border-radius: 20px;
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
}
</style>
