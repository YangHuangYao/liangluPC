<template>
  <div class="footer">
    <div class="footer-top app-container-width">
      <el-row :gutter="30">
        <el-col :span="16">
          <el-row class="footer-ul-list">
            <el-col :span="6">
              <ul class="">
                <li class="li-top"><strong><span>新手指引</span></strong></li>
                <li><router-link id="contact-us" :to="{name:'UserAuthentication',params:{navName:'3'}}" tag="a">用户认证</router-link></li>
                <li><router-link id="contact-us" :to="{name:'PurchaseCommodities',params:{navName:'2'}}" tag="a">如何买粮</router-link></li>
                <li><router-link id="contact-us" :to="{name:'SupplyCommodities',params:{navName:'2'}}" tag="a">如何卖粮</router-link></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="">
                <li class="li-top"><strong><span>交易帮助</span></strong></li>
                <li><router-link id="contact-us" :to="{name:'TransactionFlow',params:{navName:'2'}}" tag="a">交易流程</router-link></li>
                <li><router-link id="contact-us" :to="{name:'PublishSupply',params:{navName:'2'}}" tag="a">发布供应</router-link></li>
                <li><router-link id="contact-us" :to="{name:'PublishPurchase',params:{navName:'2'}}" tag="a">发布采购</router-link></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="">
                <li class="li-top"><strong><span>关于粮路网</span></strong></li>
                <li><router-link id="about-us" :to="{name:'AboutUs',params:{navName:'1'}}" tag="a">关于我们</router-link></li>
                <li><router-link id="contact-us" :to="{name:'ContactUs',params:{navName:'1'}}" tag="a">联系我们</router-link></li>
              </ul>
            </el-col>
            <el-col :span="6">
              <ul class="">
                <li class="li-top"><strong><span>客户服务</span></strong></li>
                <li>客服电话0755-33225798</li>
                <li>免费热线400-6656535</li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="40">
            <el-col :span="10">
              <ul class="">
                <li class="li-top"><strong><span>粮路网APP</span></strong></li>
                <li>
                  <img src="../../static/images/app-icon.png" alt="">
                </li>
              </ul>
            </el-col>
            <el-col :span="8">
              <ul class="">
                <li class="li-top"><strong><span>粮路微信公众号</span></strong></li>
                <li>
                  <img src="../../static/images/wechat-icon.png" alt="">
                </li>
              </ul>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>
