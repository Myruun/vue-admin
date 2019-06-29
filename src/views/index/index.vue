<template>
  <div class="index-wrap" v-cloak>
    <el-container>
      <el-aside> <asider /></el-aside>
      <el-container>
        <el-header>
          <i @click="switchaside" class="iconfont icon-qiehuan- swithaside"></i>
          <div class="right_body">
            <div class="separateline">
              <el-tooltip
                class="item"
                effect="dark"
                content="帮助"
                placement="top-start"
              >
                <el-badge is-dot class="item">
                  <i class="iconfont   icon-Group-"></i>
                </el-badge>
              </el-tooltip>

              <el-tooltip
                class="item"
                effect="dark"
                content="消息"
                placement="top-start"
              >
                <i class="iconfont   icon-iconfontzhizuobiaozhun023110"></i>
              </el-tooltip>
              <el-tooltip
                class="item"
                effect="dark"
                content="登出"
                placement="top-start"
              >
                <i class="iconfont  icon-dingbudaohang-zhangh"></i>
              </el-tooltip>
            </div>
            <el-tooltip
              class="item"
              effect="dark"
              content="个人信息"
              placement="top-start"
            >
              <img
                @click="dialogTableVisible = true"
                class="titleimg"
                :src="srcimg"
                alt=""
                srcset=""
              />
            </el-tooltip>
            <span v-text="name"></span>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>

    <!-- 个人信息弹出框 -->
    <el-dialog
      title="个人信息"
      :visible.sync="dialogTableVisible"
      width="490px"
    >
      <el-form>
        <el-form-item label="姓名:">
          <p class="flex">
            <span class="edit_flex" v-text="name" contenteditable="true"></span>
            <!-- <input type="text" placeholder="字数最好小于或者等于8个" /> -->
            <span class="edit" @click="edit">编辑</span>
          </p>
          <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
        </el-form-item>
        <el-form-item label="头像:">
          <!-- <p class="flex"> -->
          <img
            @click="dialogTableVisible = true"
            class="titleimg"
            :src="srcimg"
            alt=""
            srcset=""
          />
          <span class="edit" @click="upload_pictures">上传</span>
          <!-- <input id="" type="file" class="none" /> -->
          <!-- </p> -->
        </el-form-item>

        <el-form-item label="身份权限:">
          <p>管理员</p>
        </el-form-item>

        <el-form-item label="状态:">
          <p>正常</p>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTableVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import { asider } from '@/components/index'; // 组件

@Component({
  components: { asider }
})
export default class Index extends Vue {
  @Mutation SET_AUTHOR: any;
  isCollapse: boolean = false;
  is_dot: any = true;
  dialogTableVisible: boolean = false;
  name: string = '飞翔在天空的兔子';
  srcimg: string =
    'https://img.zcool.cn/community/0101ea55427a040000019ae9b3671a.jpg@1280w_1l_2o_100sh.jpg';
  created() {
    this.SET_AUTHOR();
  }
  switchaside() {
    // 侧边栏伸缩
    this.isCollapse = !this.isCollapse;
    this.SET_AUTHOR(this.isCollapse);
  }
  activated() {
    //
  }
  upload_pictures() {
    // 上传图片
    console.log('上传');
    // this.$refs.filElem.dispatchEvent(new MouseEvent('click'));
  }
  edit() {
    // 编辑
    console.log('编辑');
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

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.index-wrap {
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    background-color: $header;
    color: #333;
    display: flex;
    padding-left: 0px;
    justify-content: space-between;
    align-items: center;
    .right_body {
      display: flex;
      height: 60px;
      justify-content: space-between;
      .separateline {
        border-right: 1px solid $subcolor;
        box-sizing: border-box;
        padding: 0px 10px;
        height: 40px;
        margin-top: 10px;
        line-height: 40px;
        display: flex;
        // justify-content: space-between;
        align-content: center;
        i {
          width: 40px;
          height: 40px;
          color: #777777;
          font-size: 24px;
          text-align: center;
          cursor: pointer;
          padding: 0px 5px;
          display: inline-block;
        }
      }

      .titleimg {
        margin-top: 10px;
        margin-left: 10px;
        cursor: pointer;
      }
      span {
        vertical-align: middle;
        color: $theme;
        line-height: 60px;
        padding: 0px 15px;
        max-width: 140px;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }
    }
    .swithaside {
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      cursor: pointer;
      &:hover {
        background: #cccccc;
      }
    }
  }

  .el-aside {
    color: #333;
    width: auto !important;
    border-right: solid 1px #e6e6e6;
  }

  .edit_flex {
    flex: 1;
  }
  .el-main {
    background-color: $main;
    color: #333;
  }
  .titleimg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #dddddd;
    overflow: hidden;
    margin-left: 10px;
    vertical-align: middle;
  }

  .edit {
    color: $theme;
    cursor: pointer;
    vertical-align: middle;
    float: right;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>

