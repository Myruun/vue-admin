<template>
  <div class="blog-wrap">
    <el-form label-width="120px">
      <el-form-item label="姓名">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="sex"></el-input>
      </el-form-item>

      <el-form-item label="年龄">
        <el-input v-model="age"></el-input>
      </el-form-item>

      <el-form-item label="地址">
        <el-input v-model="census_register"></el-input>
      </el-form-item>

      <el-form-item label="身份证号码">
        <el-input v-model="Identity_id"></el-input>
      </el-form-item>
    </el-form>

    <el-button type="primary" @click="onsubmit">立即创建</el-button>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { BlogData } from '@/types/views/blog.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // prop
  name: string = '薛芷芳';
  sex: any = '女';
  age: any = 22;
  census_register: string = '云南省玉溪市澄江县';
  Identity_id: any = '530422199610302781';
  @Prop({
    required: false,
    default: ''
  })
  // data
  onsubmit() {
    //
    const that = this;
    let datas = {
      name: that.name,
      sex: that.sex,
      age: that.age,
      census_register: that.census_register,
      Identity_id: that.Identity_id
    };
    console.log(datas);
    this.axios
      .post(`/admin/getuser`, datas)
      .then(res => {
        console.log(res);
      })
      .catch(response => {
        console.log(response);
      });
  }
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

.blog-wrap {
  width: 100%;
}
</style>
