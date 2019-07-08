<template>
  <div class="froala">
    <froala
      :tag="'textarea'"
      :config="froalaConfig"
      v-model="froalaContent"
    ></froala>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';

export default class About extends Vue {
  froalaContent: any = ''; // 默认测试文本
  froalaConfig: any = {
    toolbarButtons: [
      'undo',
      'redo',
      'clearFormatting',
      '|',
      'bold',
      'italic',
      'underline',
      'strikeThrough',
      '|',
      'fontFamily',
      'fontSize',
      'color',
      '|',
      'paragraphFormat',
      'align',
      'formatOL',
      'formatUL',
      'outdent',
      'indent',
      'quote',
      '-',
      'inlineStyle',
      'superscript',
      'paragraphStyle',
      'insertLink',
      'insertImage',
      'insertVideo',
      'embedly',
      'insertFile',
      'insertTable',
      '|',
      'subscript',
      'emoticons',
      'specialCharacters',
      'insertHR',
      'selectAll',
      'clearFormatting',
      '|',
      'html',
      'print',
      'spellChecker',
      'help',
      '|',
      'fullscreen'
    ],
    // 显示可操作项
    // theme: "dark",//主题
    placeholder: '请填写内容',
    language: 'zh_cn', // 国际化
    imageUploadURL: 'http://i.froala.com/upload', // 上传url
    fileUploadURL: 'http://i.froala.com/upload', // 上传url 请访问https://www.froala.com/wysiwyg-editor/docs/options
    // quickInsertButtons: ['image', 'table', 'ul', 'ol', 'hr'], // 快速插入项
    quickInsertButtons: false, // 快速插入项
    // toolbarVisibleWithoutSelection: true,//是否开启 不选中模式
    disableRightClick: true, // 是否屏蔽右击
    colorsHEXInput: false, // 关闭16进制色值
    toolbarSticky: true, // 操作栏是否自动吸顶
    zIndex: 99999,
    events: {
      // 'froalaEditor.initialized': function () {
      //   console.log('initialized')
      // }
    }
  };
}
// import VueFroala from 'vue-froala-wysiwyg';

// export default {
//   name: 'app',
//   data () {
//     return {

//     }
//   }
// }
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

a[href="https://froala.com/wysiwyg-editor"], a[href="https://www.froala.com/wysiwyg-editor?k=u"] {
  display: none !important;
  position: absolute;
  top: -99999999px;
}

.froala {
  width: 100%;
  height: 100%;
  padding-right: 1px;
  box-sizing: border-box;
  .fr-toolbar {
    border-top: 1px solid #dfdfdf;
  }
  .fr-counter {
    display: none;
  }
  .fr-wrapper {
    min-height: 360px;
  }
}
</style>

