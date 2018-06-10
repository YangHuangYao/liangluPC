<template>
    <div class="main-container">
      <HeaderNav class="app-header app-container-width"></HeaderNav>
      <router-view/>
      <Footer></Footer>
    </div>
</template>

<script>
  const HeaderNav = r => require.ensure([], () => r(require('../components/header-nav')), 'HeaderNav');
  const Footer = r => require.ensure([], () => r(require('../components/footer')), 'Footer');
    export default {
       name: "Index"
      ,components:{
        HeaderNav,
        Footer
       }
    }
</script>

<style scoped>

</style>
