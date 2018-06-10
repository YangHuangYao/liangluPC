/***
 * 默认首页部分模块
 * ***/
export default [
  {
    path: 'home',
    name:'Home',
    component: resolve => require(['../../page/home/home'], resolve)
  }
]
