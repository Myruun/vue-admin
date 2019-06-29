<template>
  <div class="blog-wrap">
    <div class="blog_content">
      <el-card class="box-card">
        <div slot="header" class="clearfix flex items">
          <div>博客列表</div>
          <!-- <el-button style="float: right; padding: 3px 0" type="text"
            >操作按钮</el-button
          > -->

          <div>
            <el-button type="primary">查询</el-button>

            <el-button type="primary">添加</el-button>
          </div>
        </div>
        <el-row :gutter="20">
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
                <img :src="item.img" alt="" srcset="" />
                <h2 v-text="item.title"></h2>
              </div>

              <div class="blog_content_s">
                <p class="ellipsis">
                  时间在变，人也在变。生命是一场无法回放的绝版电影，有些事，不管你如何努力，回不去就是回不去了。就算真的回去了，你也会发现，一切已经面目全非。唯一能回去的，只是存于心底的记忆。世界上最远的距离，不是爱，不是恨，而是熟悉的人，渐渐变得陌生。
                </p>
                <el-divider></el-divider>
                <div class="whole flex state">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="置顶"
                    placement="top"
                  >
                    <i class="iconfont icon-zhiding"></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="推荐"
                    placement="top"
                  >
                    <i class="iconfont icon-tuijian"></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="热门"
                    placement="top"
                  >
                    <i class="iconfont icon-remen"></i>
                  </el-tooltip>

                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="轮播图"
                    placement="top"
                  >
                    <i class="iconfont icon-zhaopian"></i>
                  </el-tooltip>
                </div>
                <el-divider></el-divider>
                <div class="whole flex  operation">
                  <p class="author">by: <span v-text="item.author"></span></p>

                  <div>
                    <i class="iconfont icon-trash"></i>

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
  id: any = 1;
  name: string = '秦帜楠';
  sex: any = '男';
  age: any = 35;
  census_register: string = '吉林省长春市市辖区';
  Identity_id: any = '220101198310120534';
  list: any = [
    {
      img:
        'https://img.zcool.cn/community/017b495b037370a801209a85763b91.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '扁平插画',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/01bb4f5ce50c94a801208f8b435de8.jpg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '扁平插画',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/01b4ac5cb99a4da80121416877d028.jpg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '扁平插画',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/015b385caf0915a801214168f4ca9d.jpg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '扁平插画',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/01f5cd5acdb9e5a801204029be80a3.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '咆哮的野牛',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/01bbee5b50650ba80121ade0671801.jpeg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '飞越的鲸鱼鲸鱼',
      author: '飞翔的兔子',
      is_display: true
    },
    {
      img:
        'https://img.zcool.cn/community/01b29f5c9dbe55a801208f8b854990.jpg@260w_195h_1c_1e_1o_100sh.jpg',
      title: '扁平插画',
      author: '飞翔的兔子',
      is_display: true
    }
  ];
  @Prop({
    required: false,
    default: ''
  })
  // onsubmit() {
  //   const that = this;
  //   // this.axios
  //   //   .delete(`/admin/deluser/` + that.id)
  //   //   .then(res => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch(response => {
  //   //     console.log(response);
  //   //   });
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
}
</script>

<style lang="scss">
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
    // padding-top: 7px;
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
</style>
