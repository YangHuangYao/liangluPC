<template>
  <div id="app">
    <HeaderTop class="app-header-top"></HeaderTop>

    <el-container class="app-container">
      <el-main>
        <div id="body-main">
          <router-view/>
        </div>
      </el-main>
    </el-container>
    <FooterBottom></FooterBottom>
    <Dialog></Dialog>
  </div>
</template>

<script>
  import './style/css/index.css'

  const HeaderTop = r => require.ensure([], () => r(require('./components/header-top')), 'HeaderTop');
  const FooterBottom = r => require.ensure([], () => r(require('./components/footer-bottom')), 'FooterBottom');
  const Dialog = r => require.ensure([], () => r(require('./components/dialog/dialog')), 'Dialog');
  export default {
    name: 'App',
    data(){
      return{
        ok:true
      }
    },
    components:{
      HeaderTop:HeaderTop,
      FooterBottom:FooterBottom,
      Dialog:Dialog
    },
    methods:{

    },
    created(){

    }
  }
</script>

