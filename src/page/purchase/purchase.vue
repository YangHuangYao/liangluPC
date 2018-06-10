<template>
    <div class="purchase-container body-bg">
      <div class="app-container-width">
        <div class="banner-flow-container mgB-30">
          <div class="banner-container">
            <p class="banner-title">粮路网三大特点</p>
            <div class="banner-box">
              <div class="box-ground">
                <span class="icon-ground">1</span>
                <div class="img-ground"></div>
                <p class="banner-text-one">海量资源，线上交易</p>
                <p class="banner-text-tow">信息真实，诚信买卖，契约护航</p>
              </div>
              <div class="box-ground">
                <span class="icon-ground">2</span>
                <div class="img-ground"></div>
                <p class="banner-text-one">网上合同，电子签章</p>
                <p class="banner-text-tow">轻松签署，安全保障，司法鉴定</p>
              </div>
              <div class="box-ground">
                <span class="icon-ground">3</span>
                <div class="img-ground"></div>
                <p class="banner-text-one">智慧物流，全程跟踪</p>
                <p class="banner-text-tow">价格透明，多元选择，轨迹可寻</p>
              </div>
            </div>
          </div>
          <div class="flow-container">
            <p class="flow-title">供应流程</p>
            <div class="flow-box">
              <div class="flow-box-container">
                <div class="flow-box-ground">
                  <i class="flow-icon-ground"></i>
                  <span>浏览供应列表</span>
                </div>
                <div class="flow-box-ground">
                  <i class="flow-icon-ground"></i>
                  <span>浏览供应列表</span>
                </div>
                <div class="flow-box-ground">
                  <i class="flow-icon-ground"></i>
                  <span>浏览供应列表</span>
                </div>
                <div class="flow-box-ground">
                  <i class="flow-icon-ground"></i>
                  <span>浏览供应列表</span>
                </div>
                <div class="flow-box-ground">
                  <i class="flow-icon-ground"></i>
                  <span>浏览供应列表</span>
                </div>
              </div>
              <el-button type="primary">发布供应</el-button>
            </div>
          </div>
        </div>
        <div class="filter-container mgB-30">
          <div class="filter-tr">
            <el-row class="filter-tr-box">
              <el-col :span="2"><i class="title">品种：</i></el-col>
              <el-col :span="2" v-for="(item,index) in cid"><span @click="filterValue($event,index)" :data-cid='item.id' data-type="cid" :class="surrentIndex==index?{'active':active}:{'active':!active}">{{item.text}}</span></el-col>
            </el-row>
          </div>
          <div class="filter-tr">
            <el-row class="filter-tr-box">
              <el-col :span="2"><i class="title">产地：</i></el-col>
              <el-col :span="2" v-for="(item,index) in origin"><span @click="filterValue($event,index)" :data-origin='item' data-type="origin" :class="surrentIndexA==index?{'active':active}:{'active':!active}">{{item}}</span></el-col>
            </el-row>
          </div>
          <div class="filter-tr">
            <el-row class="filter-tr-box">
              <el-col :span="2"><i class="title">年份：</i></el-col>
              <el-col :span="2" v-for="(item,index) in year"><span @click="filterValue($event,index)" :data-year='item' data-type="year" :class="surrentIndexB==index?{'active':active}:{'active':!active}">{{item}}</span></el-col>
            </el-row>
          </div>
          <div class="filter-tr">
            <el-row class="filter-tr-box">
              <el-col :span="2"><i class="title">等级：</i></el-col>
              <el-col :span="2" v-for="(item,index) in foodlev"><span @click="filterValue($event,index)" :data-foodlev="item.id" data-type="foodlev" :class="surrentIndexC==index?{'active':active}:{'active':!active}">{{item.text}}</span></el-col>
            </el-row>
          </div>
        </div>
        <div class="food-table-container">
          <div class="food-table-thead">
            <div class="thead-th-box">
              <div class="thead-th th-first" v-for="(item,index) in theadTH" @click="filterTitle($event,index)" :data-ascending="item.ascending" :data-descending="item.descending" :class="surrentIndexTH==index?{'active':active}:{'active':!active}">
                {{item.text}}
              </div>
            </div>
            <div class="thead-right">
              共 &nbsp;<span>{{purchaseTotal}} </span> &nbsp;条买粮信息
            </div>
          </div>
          <FootTable :purchase="purchaseList"></FootTable>
        </div>
        <div class="pagination-container">
          <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage1"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="purchaseTotal">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import FootTable from '../food-table/foot-table';
    export default {
      name: "Purchase",
      components: {
        FootTable
      }
      , methods: {
        handleSizeChange(val) {
          var that=this;
          that.ListData.pageSize=val.toString();
          that.$api.post('007',that.ListData,r => {
            that.purchaseList=r.data.items;
            that.purchaseTotal=r.data.pageInfo.count;
            that.purchasePageCount=r.data.pageInfo.PageCount;
          });
        },
        handleCurrentChange(val) {
          var that=this;
          that.ListData.page=val.toString();
          that.$api.post('007',that.ListData,r => {
            that.purchaseList=r.data.items;
            that.purchaseTotal=r.data.pageInfo.count;
            that.purchasePageCount=r.data.pageInfo.PageCount;
          });
        },
        filterValue(e,index){
          var e=e||event;
          var that=this;
          var dataset=e.target.dataset;
          var type=dataset.type;
          if(type=='cid'){
            this.surrentIndex=index;
            that.ListData.cid=dataset.cid;
          }if(type=='origin'){
            this.surrentIndexA=index;
            that.ListData.origin=dataset.origin;
          }else if(type=='year'){
            this.surrentIndexB=index;
            that.ListData.year=dataset.year;
          }else if(type=='foodlev'){
            this.surrentIndexC=index;
            that.ListData.foodlev=dataset.foodlev;
          }
          that.$api.post('007',that.ListData,r => {
            that.purchaseList=r.data.items;
          });
        },
        filterTitle(e,index){
          var that=this;
          var ascending=e.target.dataset.ascending;
          var descending=e.target.dataset.descending;
          that.surrentIndexTH=index;
          if(that.start==true){
            that.start=!that.start;
            that.ListData.sort=ascending;
          }else if(that.start==false){
            that.start=!that.start;
            that.ListData.sort=descending;
          }
          that.$api.post('007',that.ListData,r => {
            that.purchaseList=r.data.items;
          });
        }

      },
      data() {
        return {
          start:true,
          surrentIndex:'-1',
          surrentIndexA:'-1',
          surrentIndexB:'-1',
          surrentIndexC:'-1',
          surrentIndexTH:'-1',
          active:true,
          theadTH:[{ascending:'1',descending:'2',text:'发布时间'},{ascending:'3',descending:'4',text:'单价'},{ascending:'5',descending:'6',text:'成交量'}],
          cid:[{id:'124',text:'玉米'},{id:'125',text:'稻谷'}],
          origin:['北京市', '黑龙江', '吉林省', '山西省', '河北省', '天津市', '广东'],
          foodlev:[{id:'1',text:'一等品'},{id:'2',text:'二等品'},{id:'3',text:'三等品'}, {id:'4',text:'四等品'}, {id:'5',text:'五等品'}, {id:'6',text:'等外品'}],
          year:['2018','2017','2016','2015','2014','2013','2012'],
          purchaseList: [],
          purchaseTotal:'',
          purchasePageCount:'',
          currentPage1: 5,
          ListData:{
            type:'1',
            page:'1',
            pageSize:'10',
            origin:'',
            year:'',
            cid:'0',
            foodLev:'0',
            max:'0',
            min:'0',
            sort:'0'
          }
        };
      }
     ,created(){
        var that=this;
      //采购
        //供应列表
        that.$api.post('007',that.ListData,r => {
            that.purchaseList=r.data.items;
            that.purchaseTotal=r.data.pageInfo.count;
            that.purchasePageCount=r.data.pageInfo.PageCount;
        });
    }
  }
</script>

<style scoped>

</style>
