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
    let w = (canvas.width = window.screen.availWidth - 250);
    let h = (canvas.height = window.screen.availHeight - 200);
    // let h = (document.getElementById("canvas").setAttribute('height',window.screen.availHeight - 200);
    // all['checked']
    ctx.fillStyle = "#F5F5F5";
    ctx.fillRect(0, 0, w, h);

    // canvas_text(ctx, "要写的文字", "21px bold 黑体", "#000", 300);
    ctx.rect(20, 0, 150, 100);
    ctx.fillStyle = "#8F8F8F";
    ctx.fill();

    // #8F8F8F
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

