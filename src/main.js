import Vue from 'vue'
import App from './App.vue'
// 默认引入一个文件夹下名称为 index/index.js/index.json 的文件
import router from './router/index.js' // 1.从其他文件引入了router

// 引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入 vue-l18n
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


// 所有的文字
// Ready translated locale messages
const messages = {
  en: {
    message: {
      login: 'login in'
    }
  },
  ja: {
    message: {
      login: 'ログイン'
    }
  },
  zh: {
    message: {
      login: '登录'
    }
  }
}
// 初始化
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages, // set locale messages
})

Vue.config.productionTip = false

new Vue({
  router, // 2.使用了router
  render: h => h(App),
  i18n,
}).$mount('#app')
