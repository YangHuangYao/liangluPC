<template>
<div class="nav-top">
  <div class="nav-top-content">
    <div>
      <span>你好，欢迎来到两路网</span>
    </div>
    <ul class="top-span-ground">
      <router-link :to="{name:'Login'}" tag="li" ><span >请登录</span></router-link>
      <!--<router-link :to="{name:'Register'}" tag="li" ><span >免费注册</span></router-link>-->
      <!--<router-link :to="{name:'AboutUs'}" tag="li"><span>关于我们</span></router-link>-->
      <router-link :to="{name:'HelpCenter'}" tag="li" ><span >帮助中心</span></router-link>
      <li><span>APP下载</span></li>
    </ul>
  </div>
</div>
</template>
<script>

    export default{
        name: "HeaderTop",
      methods: {
        // navState(){
        //   console.log('666')
        //   var navStatus = sessionStorage.navStatus;
        //   if(navStatus) {
        //     var Status = JSON.parse(navStatus);
        //     console.log(Status)
        //     if(Status.status=='show'){
        //       this.$root.eventHub.$emit('navHide', true)
        //       // console.log(this.ok)
        //     }else if(Status.status=='hide'){
        //       // sessionStorage.navStatus = JSON.stringify({'status':'hide'});
        //         this.$root.eventHub.$emit('navHide', false)
        //       // console.log(this.ok)
        //     }
        //   }
        // }
      }
    }
</script>

