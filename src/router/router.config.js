/***
 * 路由总文件
 * **/

import Vue from 'vue'
import VueRouter from 'vue-router'
//
import index from './routers/index'
import login from './routers/login'
// import register from './routers/register'


Vue.use(VueRouter);
const router=new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name:'Index',
      component: resolve => require(['../page/index'], resolve),
      children: [
        {
          path: '/',
          name:'Home',
          component: resolve => require(['../page/home/home'], resolve)
        },
      ]
    },
    index[0],
    login[0],
    {
      path: '../../components/error',
      name: 'Error',
      component: resolve => require(['../components/error'], resolve)
    }
    // register[0]
  ]
});
router.beforeEach((to, from, next) => {
  if(to.matched.length==0){
    console.log(to.matched)
    console.log(from.name)
    router.push({name:'Error'})
    // from.name ? next({ name:from.name }) : router.push({name:'Home'}) ;
  }else{
    next(); //如果匹配到正确跳转
  }
});
export {router}
