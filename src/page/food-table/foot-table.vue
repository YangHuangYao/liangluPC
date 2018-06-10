<template>
    <div class="foot-table">
      <div class="table-component">
        <div class="table-box">
          <div class="table-thead">
            <div class="table-th">
              <el-row class="">
                <el-col :span="2">
                  品种
                </el-col>
                <el-col :span="3">
                  挂单标题
                </el-col>
                <el-col :span="2">
                  单价(元/吨)
                </el-col>
                <el-col :span="2">
                  价格类型
                </el-col>
                <el-col :span="3">
                  产地
                </el-col>
                <el-col :span="1">
                  年份
                </el-col>
                <el-col :span="2">
                  国家等级
                </el-col>
                <el-col :span="2">
                  发布时间
                </el-col>
                <el-col :span="2">
                  采购总量(吨)
                </el-col>
                <el-col :span="2">
                  可供应量(吨)
                </el-col>
                <el-col :span="3">
                  操作
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="table-tbody">
            <div class="table-tr" v-for="(item,index) in purchase" @click="toggle($event,index)" :class="surrentIndex==index?{'active':active}:{'active':!active}">
              <el-row :class="surrentIndex==index?{'active':active}:{'active':!active}" v-show="purchase.length > 0">
                <el-col :span="2" class="relative">
                  <div class="arrows-icon">
                    <i class="el-icon-arrow-down down"></i>
                    <i class="el-icon-arrow-up up" ></i>
                  </div>
                  <span>{{item.name}}</span>
                </el-col>
                <el-col :span="3" class="title">
                  <span>{{item.title}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.price / 100}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.priceTypeText}}</span>
                </el-col>
                <el-col :span="3" class="title">
                  <span>{{item.origin}}</span>
                </el-col>
                <el-col :span="1">
                  <span>{{item.years}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.foodLevText}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.createTime.slice(0,11)}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.deal}}</span>
                </el-col>
                <el-col :span="2">
                  <span>{{item.total}}</span>
                </el-col>
                <el-col :span="3">
                  <el-button type="primary" size="mini">立即采购</el-button>
                </el-col>
              </el-row>
              <el-row data-type="detail" class="food-detail">
                <el-col :span="5">
                  <span>包装方式：</span>
                  <span>{{item.packingText}}</span>
                </el-col>
                <el-col :span="7">
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
              <div v-show="purchase.length==0">
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
      name: "FootTable",
      props:[
        'purchase'
      ],
      data(){
          return {
            active:true,
            surrentIndex:'-1'
          }
      }
      ,methods:{
        toggle: function(ev,index) {
          var ev=ev||event;
          this.surrentIndex=index;
        }
      }
    }
</script>

<style scoped>

</style>
