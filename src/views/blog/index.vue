<template>
  <div class="blog-wrap">
    <div class="blog_content">
      <el-card class="box-card">
        <div slot="header" class="flex items">
          <div>博客列表</div>
          <!-- <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          > -->
          <div>
            <el-button type="primary" style="margin-right:20px;"
              >查询</el-button
            >
            <router-link to="/website/blogadd">
              <el-button type="primary">添加</el-button></router-link
            >
          </div>
        </div>
        <el-row :gutter="20" style="margin:0px">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="4"
            v-for="item in list"
            :key="item.id"
          >
            <div class="blog_list bg-purple ">
              <div class="zoomImage blog_img">
                <img :src="item.blog_img" alt="" srcset="" />
                <h2 v-text="item.blog_title"></h2>
              </div>

              <div class="blog_content_s">
                <p class="ellipsis" v-text="item.synopsis"></p>
                <el-divider></el-divider>
                <div class="whole flex state">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="置顶"
                    placement="top"
                  >
                    <i
                      class="iconfont icon-zhiding"
                      :class="item.istop ? 'active' : ''"
                    ></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="推荐"
                    placement="top"
                  >
                    <i
                      class="iconfont icon-tuijian"
                      :class="item.recommend ? 'active' : ''"
                    ></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="热门"
                    placement="top"
                  >
                    <i
                      class="iconfont icon-remen"
                      :class="item.hot ? 'active' : ''"
                    ></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="轮播图"
                    placement="top"
                  >
                    <i
                      class="iconfont icon-zhaopian"
                      :class="item.slide ? 'active' : ''"
                    ></i>
                  </el-tooltip>
                </div>
                <el-divider></el-divider>
                <div class="whole flex  operation">
                  <p class="author">by: <span v-text="item.author"></span></p>

                  <div>
                    <i class="iconfont icon-trash" @click="deletes"></i>

                    <i class="iconfont icon-bijinotes23"></i>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
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
  list: any = [];
  @Prop({
    required: false,
    default: ''
  })
  deletes() {
    // 删除操作
    let that = this;
    that
      .$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        // this.$message({
        //   type: 'success',
        //   message: '删除成功!'
        // });
        // myThis:any = this
        this.$message({
        type: 'success',
        message: '已收藏'
      })
      })
      .catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
  }

  created() {
    // 生命周期
    let that = this;
    that.axios
      .get(`/api/bloglist`)
      .then((res: any) => {
        console.log(res);
        that.list = res.data;
      })
      .catch((response: any) => {
        console.log(response);
      });
  }

  mounted() {
    //
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.blog-wrap {
  width: 100%;
  height: 100%;
  i {
    color: #999999;
    cursor: pointer;
  }
  .state {
    padding: 6px 15px;
  }
  .operation {
    align-items: baseline;
    align-self: flex-end;
    padding-top: 9px;
    i {
      color: #999999;
      padding-right: 15px;
    }
  }
  .ellipsis {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-align: justify;
    overflow: hidden;
    font-size: 14px;
    line-height: 1.5;
  }
  .blog_content {
    width: 100%;
    min-height: 100%;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-shrink: 1;
    box-sizing: border-box;
    margin-bottom: 14px;
  }
  .blog_list {
    background: #ffffff;
    transition: all 0.2s;
    border: 1px solid #efefef;
    width: 100%;
    height: 320px;
    margin: auto;
    overflow: hidden;
    margin-bottom: 20px;
    .blog_img {
      height: 160px;
      position: relative;
      overflow: hidden;
      h2 {
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        background: rgba(0, 0, 0, 0.64);
        color: rgb(233, 231, 231);
        position: absolute;
        bottom: 0px;
        left: 0px;
        margin: 0px;
        padding: 15px;
        font-size: 18px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-align: justify;
        display: none;
        transition: all 0.7s;
      }
    }
    .blog_content_s {
      height: 170px;
      box-sizing: border-box;
      padding: 10px 0px 10px;
    }
    img {
      width: 100%;
      position: absolute;
      transition: all 0.7s;
    }
    p {
      padding: 4px 15px;
    }

    &:hover {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
      // background: #000;
      // transform: img scale(1.01);
    }
    &:hover img {
      transform: scale(1.5, 1.5);
    }
    &:hover h2 {
      display: block;
    }
    .author {
      font-size: 12px;
      color: #666666;
    }
  }
}

.el-row {
  width: 100%;
  margin: 0px;
}
.el-card {
  width: 100%;
}
.items {
  align-items: baseline;
}
.el-divider--horizontal {
  margin: 0px 0;
}

.active {
  // color: red !i;
  color: $theme !important;
}
</style>
