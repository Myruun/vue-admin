<template>
  <div class="dialog-wrap">
    <el-input v-model="num"></el-input>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { InstallsData } from "@/types/views/installs.interface";

@Component({})
export default class About extends Vue {
  // prop
  // @Prop({
  //   required: false,
  //   default: ""
  // })
  // name!: string;

  // data
  num: number = 21;
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

.dialog-wrap {
  width: 100%;
  text-align: right;
  box-sizing: border-box;
  .dialog-footer {
    line-height: 95px;
  }
}
</style>
