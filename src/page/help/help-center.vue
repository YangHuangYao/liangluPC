<template>
    <div class="help-center">
      <div class="help-banner">

      </div>
      <div class="app-container-width clearfix mgT-30">
        <div class="help-nav-list">
            <el-collapse v-model="leftNavActiveName" accordion v-number="{number:$route.params.navName}">
              <el-collapse-item title="关于粮路" name="1" class="navLeft">
                <ul>
                  <router-link :to="{name:'AboutUs'}" tag="li" class="AboutUs"><span>关于我们</span></router-link>
                  <router-link :to="{name:'ContactUs'}" tag="li" class="ContactUs"><span>联系我们</span></router-link>
                  <router-link :to="{name:'Recruitment'}" tag="li" class="Recruitment"><span>招贤纳士</span></router-link>
                  <router-link :to="{name:'LegalStatement'}" tag="li" class="LegalStatement"><span>法律声明</span></router-link>
                </ul>
              </el-collapse-item>
              <el-collapse-item title="交易帮助" name="2" class="navLeft" >
                <ul>
                  <router-link :to="{name:'TransactionFlow'}" tag="li" class="TransactionFlow"><span>交易流程</span></router-link>
                  <router-link :to="{name:'PublishSupply'}" tag="li" class="PublishSupply"><span>发布供应</span></router-link>
                  <router-link :to="{name:'PublishPurchase'}" tag="li" class="PublishPurchase"><span>发布采购</span></router-link>
                  <router-link :to="{name:'SupplyCommodities'}" tag="li" class="SupplyCommodities"><span>商品供应</span></router-link>
                  <router-link :to="{name:'PurchaseCommodities'}" tag="li" class="PurchaseCommodities"><span>商品采购</span></router-link>
                  <router-link :to="{name:'EvidencePayment'}" tag="li" class="EvidencePayment"><span>上传付款凭证</span></router-link>
                </ul>
              </el-collapse-item>
              <el-collapse-item title="账号服务" name="3" class="navLeft">
                <ul>
                  <router-link :to="{name:'UserRegistration'}" tag="li" class="UserRegistration"><span>用户注册</span></router-link>
                  <router-link :to="{name:'UserAuthentication'}" tag="li" class="UserAuthentication"><span>用户认证</span></router-link>
                </ul>
              </el-collapse-item>
            </el-collapse>
        </div>
        <div class="help-tab-main">
          <div class="tab-main-navbar">
            <Breadcrumb v-bind:leftNavActive="leftNavActive"></Breadcrumb>
          </div>
          <div class="penal-container">
            <div class="penal-title">

            </div>
            <keep-alive>
              <router-view class="penal-view"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Breadcrumb from '../../components/breadcrumb'
    export default {
        name: "HelpCenter",
        components:{
          Breadcrumb
        },
        data(){
            return {
              leftNavActive: '1'
            }
        },
        methods:{

        },
        directives:{
          'number':function(el,binding,vnode){
            if(binding.value.number){
              vnode.context.leftNavActive=binding.value.number
            }else{

            }

          }
        },
        beforeMount () {
          // console.log(this.elements.navLeft); //=> undefined
        },
        mounted () {

        },
        computed:{

        }

    }
</script>

<style scoped>

</style>
