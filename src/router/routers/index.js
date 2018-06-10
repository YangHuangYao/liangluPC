import help from "./help";
import purchase from "./purchase";
import supply from "./supply";
import information from "./information";
import financial from "./financial";
import Detail from "./detail";
export default [
    {
      path: '/index',
      name:'Index',
      component: resolve => require(['../../page/index'], resolve),
      redirect:'/index',
      children: [
        purchase[0],
        supply[0],
        Detail[0],
        information[0],
        financial[0],
        help[0]
      ]
    }
]
