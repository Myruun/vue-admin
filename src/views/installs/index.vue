<template>
  <div class="installs-wrap">
    设置
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { InstallsData } from "@/types/views/installs.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  // @Prop({
  //   required: false,
  //   default: ""
  // })
  // name!: string;

  // data

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.installs-wrap {
  width: 100%;
}
</style>
