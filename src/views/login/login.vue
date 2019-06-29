<template>
  <div class="login-wrap">
    <!-- {{ data.pageName }} -->

    <el-card class="box-card">
      <el-row>
        <el-col :span="14">
          <div class="grid-content bg-purple bg-login">
            <img
              src="https://img.zcool.cn/community/013d3156e2344532f875520f71898c.jpg@1280w_1l_2o_100sh.jpg"
              alt=""
            /></div
        ></el-col>
        <el-col :span="10" class="division">
          <div class="qr_code">
            <img @click="switchtab" src="../../assets/image/er.png" alt="" />
            <div class="mask"></div>
          </div>
          <div v-show="isShow == true">
            <h3>欢迎登录管理后台登录系统</h3>
            <div class="grid-content bg-purple-light ">
              <el-input placeholder="请输入账号"> </el-input>
              <p></p>
              <el-input placeholder="请输入密码"> </el-input>
              <p></p>

              <el-row>
                <el-col :span="12">
                  <el-input placeholder="请输入验证码"> </el-input>
                  <p></p>
                </el-col>
                <el-col :span="3">
                  <p></p>
                </el-col>

                <el-col :span="9">
                  <el-button
                    type="primary"
                    @click="verification_code"
                    v-text="code"
                  ></el-button>
                </el-col>
              </el-row>

              <el-button type="primary" @click="setlogin">登录</el-button>
            </div>
          </div>

          <div v-show="isShow == false" class="show_qr_code">
            <h3>欢迎登录管理后台登录系统</h3>
            <img src="../../assets/image/er.png" alt="" />
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { LoginData } from '@/types/views/login.interface';
// import {  } from "@/components" // 组件

@Component({})
export default class About extends Vue {
  isShow: boolean = true;
  time: number = 3;
  code: string = '获取验证码';
  is_click: boolean = false;
  created() {
    //
  }
  setlogin() {
    // this.$store
    //   .dispatch("LoginByUsername")
    //   .then(() => {
    this.$router.push({ path: '/404' });
    // })
    // .catch(err => {
    //   // this.$message.error(err); //登录失败提示错误
    console.log('zhixing');
    // });
  }
  switchtab() {
    this.isShow = !this.isShow;
  }
  verification_code() {
    // 验证码
    // let that = this;
    // console.log(that.time);
    // if (that.is_click) {
    //   that.is_click = false;
    // } else {
    //   // that.is_click = true;
    //   // let Count_down = setInterval(function() {
    //   //   that.time--;
    //   //   console.log(that.time);
    //   //   that.code = '重新发送' + that.time + '秒';
    //   //   if (that.time === 0) {
    //   //     that.code = '获取验证码';
    //   //     that.time = 3;
    //   //     that.is_click = true;
    //   //     clearInterval(Count_down);
    //   //   }
    //   }, 1000);
    // }
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
@import '@/assets/scss/variables.scss';

.login-wrap {
  width: 100%;
  height: 100%;
  // background: radial-gradient(bottom, #85bef8 50%, #409eff 100%);
  // background: -webkit-radial-gradient(bottom, #85bef8 50%, #409eff 100%);
  background: url(https://img.zcool.cn/community/01d90d5b51aeb0a8012036be55bf32.jpg@1280w_1l_2o_100sh.jpg)
    no-repeat center;
  background-size: cover;
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
        position: relative;
        .qr_code {
          position: absolute;
          right: 0px;
          top: 0px;
          width: 60px;
          height: 60px;
          overflow: hidden;
          img {
            position: absolute;
            right: 0px;
            cursor: pointer;
          }
          .mask {
            position: absolute;
            left: -76px;
            width: 120px;
            height: 100px;
            background: #ffffff;
            transform: rotate(46deg);
          }
        }
        .grid-content {
          width: 80%;
          margin: auto;
        }
        h3 {
          text-align: center;
          margin-bottom: 30px;
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
        h2 {
          font-size: 19px;
          display: flex;
          justify-content: space-between;
          color: #999999;
          width: 50%;
          margin: auto;
          margin-top: 20px;
          i {
            font-size: 21px;
            vertical-align: middle;
          }
        }
        .show_qr_code {
          text-align: center;
          left: 50%;
          top: 10%;
          transform: translate(0%, 7%);
          img {
            width: 210px;
            height: 210px;
          }
        }
      }
    }
  }
}
</style>

