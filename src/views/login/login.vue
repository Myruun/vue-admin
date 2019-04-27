<template>
  <div class="login-wrap">
    <!-- {{ data.pageName }} -->

    <el-card class="box-card">
      <el-row>
        <el-col :span="14"
          ><div class="grid-content bg-purple bg-login">
            <img
              src="https://img.zcool.cn/community/013d3156e2344532f875520f71898c.jpg@1280w_1l_2o_100sh.jpg"
              alt=""
            /></div
        ></el-col>
        <el-col :span="10" class="division">
          <h3>欢迎登录管理后台登录系统</h3>
          <div class="grid-content bg-purple-light ">
            <el-input placeholder="请输入账号"> </el-input>
            <p></p>
            <el-input placeholder="请输入密码"> </el-input>
            <p></p>
            <el-button type="primary">登录</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { LoginData } from "@/types/views/login.interface";
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  // data() {
  //   return {};
  // }

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.login-wrap {
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #333467 0%, #256fa1 87%);
  // background: url(https://img.zcool.cn/community/0119cd5cb5571ea801208f8ba1e92f.jpg@1280w_1l_2o_100sh.jpg)
  //   no-repeat center;
  // background-size: cover;
  .box-card {
    width: 60%;
    height: 400px;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(0%, 30%);
    border: none;
    .el-card__body {
      padding: 0;
      .bg-login {
        overflow: hidden;
      }
      .division {
        padding: 20px;
        height: 100%;
        padding-left: 15px;
        .grid-content {
          width: 80%;
          margin: auto;
        }
        h3 {
          text-align: center;
          margin-bottom: 20px;
        }
        p {
          height: 11px;
          box-sizing: border-box;
          margin-top: 7px;
          font-size: 12px;
          color: #ff2525;
          margin-bottom: 12px;
        }
        .el-button {
          width: 100%;
        }
      }
    }
  }
}
</style>

