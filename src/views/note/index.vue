<template>
  <div class="note-wrap">biji</div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component({})
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
@import "@/assets/scss/variables.scss";

.note-wrap {
  width: 100%;
}
</style>
