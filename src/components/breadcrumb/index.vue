<template>
  <el-breadcrumb class="app-levelbar" separator=">">{{leftNavActive}}
    <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path">
      <span v-if='item.redirect==="noredirect"||index==levelList.length-1' class="no-redirect">{{item.meta.title}}</span>
      <span v-else :to="item.redirect||item.path">{{item.name}}</span>
      <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>

export default {
  props:['leftNavActive'],
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      levelList: null,
      leftNavActiveName:'',
      realList: []
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0]
      if (first && (first.name !== '首页' || first.path !== '')) {
        matched = [{name: '首页', path: '/'}].concat(matched)
        if(this.leftNavActiveName==1){
          matched[1].name='关于粮路';
        }else if(this.leftNavActiveName==2){
          matched[1].name='交易帮助';
        }else if(this.leftNavActiveName==3){
          matched[1].name='账号服务';
        }
      }
      this.levelList = matched
      console.log(matched)
    }
  },
  mounted () {
    // console.log(this.leftNavActive)
  }
}
</script>

