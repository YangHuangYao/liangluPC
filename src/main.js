// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
// 引用API文件
import {router} from './router/router.config'
import api from './api/index.js'
import '../theme/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)
// 将API方法绑定到全局
Vue.prototype.$api = api
Vue.config.productionTip = false;

//'vue-i18n'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  local: 'cn', // 设置语言 
  // messages // 语言包
});

new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>',
  data(){
    return{
      eventHub:new Vue()
    }
  }

});
