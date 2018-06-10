<template>
    <div class="footer">
      <div class="footer-bottom">
        <div>
          <div class="footer-ground">
            <router-link id="about-us" :to="{name:'AboutUs',params:{navName:'1'}}" tag="span">关于我们</router-link>
            <router-link id="contact-us" :to="{name:'ContactUs',params:{navName:'1'}}" tag="span">联系我们</router-link>
            <router-link id="law-statement" :to="{name:'LegalStatement',params:{navName:'1'}}" tag="span">法律声明</router-link>
            <router-link id="invite" :to="{name:'Recruitment',params:{navName:'1'}}" tag="span">招贤纳士</router-link>
          </div>
          <div class="foot-copy">深圳财路控股有限公司 © 2017 <a target="_blank" href="http://www.miitbeian.gov.cn/">粤ICP备17089387号</a></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "FooterBottom"
    }
</script>

<style scoped>

</style>
