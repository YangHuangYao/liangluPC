<template>
  <div class="nav-container">
    <el-row :gutter="20" class="app-container-width">
      <el-col :span="4">
        <!--<img src="../assets/logo.png" alt="">-->
      </el-col>
      <el-col :span="14">
        <el-row :gutter="20" class="nav-ground">
          <el-col :span="4">
            <router-link :to="{name:'Home'}" >首页</router-link>
          </el-col>
          <el-col :span="5">
            <router-link :to="{name:'Purchase'}" >我要采购</router-link>
          </el-col>
          <el-col :span="5">
            <router-link :to="{name:'Supply'}" >我要供应</router-link>
          </el-col>
          <el-col :span="5">
            <router-link :to="{name:'Information'}">行业资讯</router-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
          <!--<img src="../assets/logo.png" alt="">-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "HeaderNav",
      data(){
        return{
          ok:true
        }
      },
      methods:{
        close(value) {
          this.ok=value;//更改状态值使组件隐藏
        },
        navState(){
          var navStatus = sessionStorage.navStatus;
          if(navStatus) {
            var Status = JSON.parse(navStatus);
            if(Status.status=='show'){
              this.ok=true
              console.log(this.ok)
            }else if(Status.status=='hide'){
              // sessionStorage.navStatus = JSON.stringify({'status':'hide'});
              console.log(this.ok)
              this.ok=false
            }
          }
        }
      },
      created(){
        // this.$root.eventHub.$on('navHide', value => {//获取登录组件传过来的状态值
        //   this.close(value)
        // })
        var navStatus = sessionStorage.navStatus;
        // var ok=this.ok;
        if(navStatus) {
          var Status = JSON.parse(navStatus);
          if(Status.status=='show'){
            this.ok=true;
            console.log()
          }else if(Status.status=='hide'){
            this.ok=false;
          }
        }
        //   console.log(this.ok)


      },
      beforeDestroy() {
        // console.log(this)
        // this.$root.eventHub.$off('navHide')
      }
    }
</script>

