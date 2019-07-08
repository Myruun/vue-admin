<template>
  <div class="blog-add-wrap">
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本信息" name="first">
        <template>
          <el-form>
            <el-form-item label="文章标题">
              <el-col style="width:360px">
                <el-input
                  v-model="blog_title"
                  placeholder="请输入文章标题"
                ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="文章作者">
              <el-col style="width:360px">
                <el-input
                  v-model="author"
                  placeholder="请输入文章作者"
                ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="分类类别">
              <el-checkbox-group v-model="category_id">
                <el-checkbox
                  v-for="item in category"
                  :key="item.id"
                  :label="item.name"
                  name="type"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item label="推荐类型" >
              <el-checkbox-group v-model="types">
                <el-checkbox label="置顶" name="type"></el-checkbox>
                <el-checkbox label="热门" name="type"></el-checkbox>
                <el-checkbox label="推荐" name="type"></el-checkbox>
                <el-checkbox label="幻灯片" name="type"></el-checkbox>
                <el-checkbox label="有效" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="封面图片">
              <el-col style="width:360px;margin-right: 28px;">
                <el-input
                  v-model="blog_img"
                  placeholder="请输入封面图片/上传"
                ></el-input>
              </el-col>
              <el-button type="primary" @click="upimg">上传</el-button>
            </el-form-item>

            <el-form-item label="创建时间">
              <el-col style="width:200px">
                <el-date-picker
                  type="date"
                  v-model="created_time"
                  placeholder="选择日期"
                  style="width: 100%;"
                ></el-date-picker>
              </el-col>
            </el-form-item>
          </el-form>
        </template>
      </el-tab-pane>
      <el-tab-pane label="详情描述" name="second">
        <template>
          <el-form>
            <el-form-item label="内容简介">
              <el-col style="width:360px">
                <el-input
                  type="textarea"
                  rows="4"
                  v-model="synopsis"
                ></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="内容详情">
              <div class="blog_content">
                <froala ref="froala"></froala>
              </div>
            </el-form-item>
          </el-form>
        </template>
      </el-tab-pane>
    </el-tabs>
    <p>
      <el-button type="primary" @click="onSubmit">提交保存</el-button>
      <el-button>取消</el-button>
    </p>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Froalawysiwyg } from '@/types/components/froala_wysiwyg.interface';
import { froala } from '@/components'; // 组件

@Component({ components: { froala } })
export default class About extends Vue {
  activeName: any = 'first';
  blog_title: any = ''; // 标题
  author: any = ''; // 作者
  created_time: any = new Date(); // 创建时间
  blog_img: any = ''; // 封面图片
  types: any = ['有效'];
  blog_content: any = ''; // 内容
  synopsis: any = ''; // 简介
  category: any[] = []; // 分类
  category_id: any[] = []; // 分类id
  created() {
    const that = this;
    that.axios
      .get(`/api/blog_category`)
      .then((res: any) => {
        that.category = res.data;
      })
      .catch((response: any) => {
        console.log(response);
      });
  }

  activated() {
    //
  }
  upimg() {
    //
  }
  isStrInArray(str: any, arr: any) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
      if (arr[i] === str) {
        return true;
      }
    }
    return false;
  }
  onSubmit() {
    //
    const that = this;
    let istop: any = false;
    let hot: any = false;
    let recommend: any = false;
    let slide: any = false;
    let enabled: any = false;
    let categorys: any = that.category;
    let categoryarr: any = [];
    let froala: any = this.$refs.froala;
    that.blog_content = froala.froalaContent;
    let arr = ['置顶', '热门', '推荐', '幻灯片', '有效'];
    let arrkey = [istop, hot, recommend, slide, enabled];

    let Verification = [
      that.blog_title,
      that.author,
      categoryarr,
      that.blog_img,
      that.synopsis,
      that.blog_content
    ];
    let Verificationtitle: any = [
      '文章标题',
      '文章作者',
      '分类类别',
      '封面图片',
      '内容简介',
      '内容详情'
    ];
    // 非空验证
    for (let j in Verification) {
      if (!Verification[j]) {
        this.$message({
          type: 'info',
          message: '' + Verificationtitle[j] + '为空'
        });
        return false;
      }
    }

    for (let k in categorys) {
      if (that.isStrInArray(categorys[k].name, that.category_id)) {
        categoryarr.push(categorys[k].category_id);
      }
    }
    for (let i = 0; i < arr.length; i++) {
      if (that.isStrInArray(arr[i], that.types)) {
        arrkey[i] = true;
      }
    }
    let time =
      that.created_time.getFullYear() +
      '-' +
      (that.created_time.getMonth() - 0 + 1) +
      '-' +
      that.created_time.getDate();
    let datas = [
      that.blog_title,
      that.author,
      that.synopsis,
      time,
      null,
      null,
      arrkey[0],
      arrkey[1],
      arrkey[2],
      arrkey[3],
      arrkey[4],
      that.blog_content,
      that.blog_img,
      categoryarr
    ];
    that.axios
      .post(`/api/getblog`, datas)
      .then((res: any) => {
        console.log(res);
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
.blog-add-wrap {
  width: 100%;
  min-height: 100%;
  background: $bg;
  box-sizing: border-box;
  padding: 10px 20px 10px;
  .blog_content {
    width: calc(100% - 68px);
    margin-left: 68px;
  }
}
</style>

