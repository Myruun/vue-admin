import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// require("froala-editor/js/froala_editor.pkgd.min.js");
// // Require Froala Editor css files.
// require("froala-editor/css/froala_editor.pkgd.min.css");
// require("froala-editor/css/froala_style.min.css");

// Import and use Vue Froala lib.
Vue.use(VueAxios, axios);

import store from "./store/index";
import "@/assets/scss/common.scss";
import "@/assets/scss/public.scss";

import "@/assets/css/iconfont.css";
import "./plugins/element.js";
import "./plugins/vue-froala-wysiwyg.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
