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
    </el-row>

    <el-row>
      <el-col :span="18"
        ><div class="grid-content bg-fff">
          <div
            id="myChart"
            :style="{ width: '100%', height: '360px' }"
          ></div></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
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
import { getDate } from "@/utils/common";
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
  }
  activated() {
    //
  }

  mounted() {
    //

    function getDays() {
      let myDate = new Date();
      let year = myDate.getFullYear();
      let month = myDate.getMonth() + 1;
      let day = myDate.getDate();
      console.log(day);
    }

    console.log(getDays());

    let myChart = echarts.init(document.getElementById("myChart"));

    // 绘制图表
    myChart.setOption({
      color: ["#409EFF"],
      title: { text: "访问量趋势" },
      tooltip: {},
      grid: {
        left: "8px",
        right: "8px",
        bottom: "0px",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: [
          "衬衫",
          "羊毛衫",
          "雪纺衫",
          "裤子",
          "高跟鞋",
          "袜子",
          "高跟鞋",
          "袜子",
          "裤子",
          "高跟鞋",
          "袜子",
          "高跟鞋",
          "袜子"
        ]
      },
      yAxis: {},
      series: [
        {
          name: "人数",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20, 10, 20, 10, 10, 20, 10, 20]
        }
      ]
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

#myChart {
  // background: #666666;
}

.echarts-wrap {
  width: 100%;
}

.el-col-6 {
  padding: 10px;
}

.el-col-18 {
  padding: 10px;
}
.grid-content {
  background: #dddddd;
  border-radius: 20px;
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
}

.bg-fff {
  background: #ffff;
  border-radius: 0px;
  padding: 20px;
}
</style>
