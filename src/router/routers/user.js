/***
 * 个人中心模块
 * ***/
export default [
  {
    path: '/',
    redirect:'/Home',
    component: resolve => require(['../../page/home/home'], resolve)
  },{
    path: '/Home',
    name:'Home',
    component: resolve => require(['../../page/home/home'], resolve)
  }
]
