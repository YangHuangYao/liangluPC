/***
 * 帮助中心模块
 * ***/
export default [
  {
    path: '/help/help-center',
    name:'HelpCenter',
    component: resolve => require(['../../page/help/help-center'], resolve),
    redirect:'/help/help-center/about-use',
    children: [
      {
        path: 'about-use',
        name: 'AboutUs',
        meta: {
          title: '关于我们',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/about-us'], resolve)
      },
      {
        path: 'contact-use',
        name: 'ContactUs',
        meta: {
          title: '联系我们',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/contact-us'], resolve)
      },
      {
        path: 'recruitment',
        name: 'Recruitment',
        meta: {
          title: '招贤纳士',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/recruitment'], resolve)
      },
      {
        path: 'legal-statement',
        name: 'LegalStatement',
        meta: {
          title: '法律声明',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/legal-statement'], resolve)
      },
      {
        path: 'transaction-flow',
        name: 'TransactionFlow',
        meta: {
          title: '交易流程',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/transaction-flow'], resolve)
      },
      {
        path: 'publish-supply',
        name: 'PublishSupply',
        meta: {
          title: '发布供应',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/publish-supply'], resolve)
      },
      {
        path: 'publish-purchase',
        name: 'PublishPurchase',
        meta: {
          title: '发布采购',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/publish-purchase'], resolve)
      },
      {
        path: 'supply-commodities',
        name: 'SupplyCommodities',
        meta: {
          title: '商品供应',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/supply-commodities'], resolve)
      },
      {
        path: 'purchase-commodities',
        name: 'PurchaseCommodities',
        meta: {
          title: '商品采购',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/purchase-commodities'], resolve)
      },
      {
        path: 'evidence-payment',
        name: 'EvidencePayment',
        meta: {
          title: '上传付款凭证',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/evidence-payment'], resolve)
      },
      {
        path: 'user-registration',
        name: 'UserRegistration',
        meta: {
          title: '用户注册',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/user-registration'], resolve)
      },
      {
        path: 'user-authentication',
        name: 'UserAuthentication',
        meta: {
          title: '用户认证',
          requiresAuth: true
        },
        component: resolve => require(['../../page/help/help-center/user-authentication'], resolve)
      }
    ]
  }
]
