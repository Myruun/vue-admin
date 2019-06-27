<template>
  <div class="note-wrap">
    <RichText />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { RichText } from '@/components'; // 组件

@Component({
  components: { RichText }
})
export default class About extends Vue {
  name!: string;

  // data

  created() {
    //
    // console.log(jss.cityStr);
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

.note-wrap {
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  background: #fff;
  padding: 20px;
}
</style>
