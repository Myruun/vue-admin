<template>
  <div id="four" class="four-wrap">
    <canvas id="canvas" />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { IndexData } from "@/types/views/index.interface";
// import {  } from "@/components" // 组件

interface Window {
  canvas: HTMLElement;
}
@Component({})
export default class About extends Vue {
  canvas?: HTMLElement;
  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    let _this = this;
    let canvas: any;
    canvas = document.getElementById("canvas");

    let ctx = canvas.getContext("2d");
    let w = (canvas.width = window.screen.availWidth - 260);
    let h = (canvas.height = window.screen.availHeight - 200);
    ctx.fillStyle = "#F6F6F6";
    ctx.fillRect(0, 0, w, h);

    ctx.beginPath();
    ctx.lineCap = "round";
    ctx.lineWidth = 12;
    ctx.strokeStyle = "#8E8E8E";
    ctx.moveTo(w / 1 - w / 6 + 20, h / 2 - 180);
    ctx.arc(w / 1 - w / 6, 90, 20, 0, 1.6 * Math.PI, true);
    ctx.lineTo(w / 6, 70);
    ctx.moveTo(w / 6, 70);
    ctx.lineTo(w / 6, h / 2 - 20);
    ctx.arc(w / 6 + 70, h / 2 - 20, 70, 3, 0.5 * Math.PI, true);
    ctx.lineTo(w / 6 + 310, h / 2 + 50);

    ctx.moveTo(w / 2, 210);
    ctx.lineTo(w / 2 - 20, 270);
    ctx.lineTo(w / 2 + 40, 270);

    ctx.fill();
    ctx.stroke();
    // #8F8F8F
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = "#FF2626";
    ctx.fillRect(w / 1 - w / 6 - 60, h / 2 - 190, 160, 100);
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
}
</style>

