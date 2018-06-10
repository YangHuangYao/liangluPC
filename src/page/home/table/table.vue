<template>
    <div class="table-component">
      <div class="table-box">
        <div class="table-thead">
          <div class="table-th">
            <el-row class="">
              <el-col :span="3">
                品种
              </el-col>
              <el-col :span="3">
                单价(元/吨)
              </el-col>
              <el-col :span="2">
                价格类型
              </el-col>
              <el-col :span="4">
                产地
              </el-col>
              <el-col :span="2">
                年份
              </el-col>
              <el-col :span="3">
                发布时间
              </el-col>
              <el-col :span="3">
                可供应量(吨)
              </el-col>
              <el-col :span="4">
                操作
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="table-tbody">
            <div v-if="purchase">
              <div class="table-tr" v-for="(item,index) in purchase" @click="toggle($event,index)" v-show="purchase.length>0">
                <el-row :class="surrentIndex==index?{'active':active}:{'active':!active}" v-show="purchase.length>0" >
                  <el-col :span="3" class="relative">
                    <div class="arrows-icon">
                      <i class="el-icon-arrow-down down"></i>
                      <i class="el-icon-arrow-up up" ></i>
                    </div>
                    <span>{{item.name}}</span>
                  </el-col>
                  <el-col :span="3">
                    <span>{{item.price / 100}}</span>
                  </el-col>
                  <el-col :span="2">
                    <span>{{item.priceTypeText}}</span>
                  </el-col>
                  <el-col :span="4" class="title">
                    <span>{{item.origin}}</span>
                  </el-col>
                  <el-col :span="2">
                    <span>{{item.years}}</span>
                  </el-col>
                  <el-col :span="3">
                    <span>{{item.createTime.slice(0,11)}}</span>
                  </el-col>
                  <el-col :span="3">
                    <span>{{item.total}}</span>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" :id="item.id" data-type="buy" size="mini" @click="goToDetail($event,index)">立即采购</el-button>
                  </el-col>
                </el-row>
                <el-row data-type="detail" v-show="purchase.length>0" class="food-detail">
                  <el-col :span="5">
                    <span>包装方式：</span>
                    <span>{{item.packingText}}</span>
                  </el-col>
                  <el-col :span="9" class="">
                    <span>库存地：</span>
                    <span>{{item.stockAreaText}}</span>
                  </el-col>
                  <el-col :span="4">
                    <span>水分(≤%)：</span>
                    <span>{{item.waterContent}}</span>
                  </el-col>
                  <el-col :span="4" >
                    <span>容重(≥g/L)：</span>
                    <span>{{item.unitWeight}}</span>
                  </el-col>
                  <el-col :span="6" :offset="3"></el-col>
                </el-row>
              </div>
              <div class="table-tr" v-show="purchase.length==0">
                <div>
                  暂无数据
                </div>
              </div>
            </div>
           <div v-if="supply">
             <div class="table-tr" v-for="(item,index) in supply" @click="toggle($event,index)" v-show="supply.length>0">
               <el-row :class="surrentIndex==index?{'active':active}:{'active':!active}" v-show="supply.length>0">
                 <el-col :span="3" class="relative">
                   <div class="arrows-icon">
                     <i class="el-icon-arrow-down down"></i>
                     <i class="el-icon-arrow-up up" ></i>
                   </div>
                   <span>{{item.name}}</span>
                 </el-col>
                 <el-col :span="3">
                   <span>{{item.price / 100}}</span>
                 </el-col>
                 <el-col :span="2">
                   <span>{{item.priceTypeText}}</span>
                 </el-col>
                 <el-col :span="4" class="title">
                   <span>{{item.origin}}</span>
                 </el-col>
                 <el-col :span="2">
                   <span>{{item.years}}</span>
                 </el-col>
                 <el-col :span="3">
                   <span>{{item.createTime.slice(0,11)}}</span>
                 </el-col>
                 <el-col :span="3">
                   <span>{{item.total}}</span>
                 </el-col>
                 <el-col :span="4">
                   <router-link class="btn-go" :to="{name:'Detail'}" :id="item.id" data-type="sell" @click="goToDetail($event,index)" tag="button">立即采购</router-link>
                   <!--<el-button type="primary"  size="mini" >立即采购</el-button>-->
                 </el-col>
               </el-row>
               <el-row data-type="detail"  class="food-detail" v-show="supply.length>0">
                 <el-col :span="5">
                   <span>包装方式：</span>
                   <span>{{item.packingText}}</span>
                 </el-col>
                 <el-col :span="9">
                   <span>库存地：</span>
                   <span>{{item.stockAreaText}}</span>
                 </el-col>
                 <el-col :span="4">
                   <span>水分(≤%)：</span>
                   <span>{{item.waterContent}}</span>
                 </el-col>
                 <el-col :span="4" >
                   <span>容重(≥g/L)：</span>
                   <span>{{item.unitWeight}}</span>
                 </el-col>
                 <el-col :span="6" :offset="3"></el-col>
               </el-row>
             </div>
             <div class="table-tr" v-show="supply.length==0">
               <div>
                 暂无数据
               </div>
             </div>
           </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "tableComponent",
      props:[
        'purchase',
        'supply'
      ],
      data(){
        return{
          purchaseD:[],
          supplyD:[],
          purchaseData:[],
          supplyData:[],
          surrentIndex:'-1',
          active:true,
          activeClass:{
            active:true
          }
        }
      },
      methods:{
        toggle: function(ev,index) {
          var ev=ev||event;
          this.surrentIndex=index;

        },
        goToDetail:function (ev,index) {
          var ev=ev||event;
          console.log(ev)
          // this.$router.push({name: 'Detail', replace: true})
        }
      }
      ,created () {
        var that=this;
        that.purchaseD=that.$emit('purchase').purchase;
        console.log(that.$emit('purchase'))
        that.supplyD=that.$emit('supply').supply;
        console.log(this.$emit('supply'))

      },
      mounted(){
        var that=this;
        var PH=[];
        var SP=[];
        //采购
        var purchaseDD=that.purchaseD;
        if(purchaseDD){
          for(var i=0;i<purchaseDD.length;i++){
            purchaseDD[i].show=false;
            PH.push(purchaseDD[i]);
          }
          this.purchaseData=PH;
          console.log(this.purchaseData)
        }
        //供应
        var supplyDD=that.supplyD;
        if(supplyDD){
          for(var i=0;i<supplyDD.length;i++){
            supplyDD[i].show=false;
            SP.push(supplyDD[i]);
          }
          this.supplyData=SP;
        }
        console.log(this.supplyData)

      }
    }
</script>

<style scoped>

</style>
