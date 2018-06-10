/***
 * 行业资讯
 * ***/
export default [
  {
    path: '/information',
    name:'Information',
    component: resolve => require(['../../page/information/information'], resolve)
    // redirect:'/information/',
    // children:[
    //
    // ]
  }
]
