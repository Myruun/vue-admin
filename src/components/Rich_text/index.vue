<template>
  <div class="Rich_text-wrap">
    <div class="Rich_text_nav"></div>
    <div class="Rich_text_content" contenteditable="true"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Richtext } from '@/types/components/Rich_text.interface';
// import { index } from '@/components/Rich_text'; // 组件

@Component({})
export default class About extends Vue {
  // prop
  @Prop({
    required: false,
    default: ''
  })
  name!: string;

  // data
  data: Richtext = {
    componentName: 'Rich_text'
  };

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
@import '@/assets/scss/variables.scss';

.Rich_text-wrap {
  width: 100%;
  .Rich_text_nav {
    width: 100%;
  }
  .Rich_text_content {
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    border: 1px solid #dddddd;
    padding: 15px;
    line-height: 1.7;
    outline: none;
  }
}
</style>

