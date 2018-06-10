<template>
  <div class="index">
    <el-carousel class="carousel-box" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in bannerImgs">
        <div class="banner-ground">
          <img :src="item.picUrl" alt="">
        </div>
        <!--<h3>{{ item }}</h3>-->
      </el-carousel-item>
    </el-carousel>
    <el-row class="app-container-width advertising-container">
      <el-col :span="6">
        <el-row>
          <el-col :span="6">
            <div class="advertising-icon">智物流</div>
          </el-col>
          <el-col :span="18">
            <div class="advertising-text">
              <p><span>智能物流</span></p>
              <p><span>文案文案文案文案</span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="6">
            <div class="advertising-icon">智物流</div>
          </el-col>
          <el-col :span="18">
            <div class="advertising-text">
              <p><span>智能物流</span></p>
              <p><span>文案文案文案文案</span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="6">
            <div class="advertising-icon">智能流</div>
          </el-col>
          <el-col :span="18">
            <div class="advertising-text">
              <p><span>智能物流</span></p>
              <p><span>文案文案文案文案</span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col :span="6">
            <div class="advertising-icon">智物流</div>
          </el-col>
          <el-col :span="18">
            <div class="advertising-text">
              <p><span>智能物流</span></p>
              <p><span>文案文案文案文案</span></p>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <div class="body-bg pdB-30">
      <div class="app-container-width pdT-30">
        <el-row :gutter="26" class="entrance-article">
          <el-col :span="6">
            <div class="entrance-ground">
              <div class="entrance-title">我要买</div>
              <div class="entrance-text">没有粮源，需要采购</div>
              <el-button type="Transparent" size="mini">发布采购</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="entrance-ground">
              <div class="entrance-title">我要买</div>
              <div class="entrance-text">没有粮源，需要采购</div>
              <el-button type="Transparent" size="mini">发布采购</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="entrance-ground">
              <div class="entrance-title">我要买</div>
              <div class="entrance-text">没有粮源，需要采购</div>
              <el-button type="Transparent" size="mini">发布采购</el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="entrance-ground">
              <div class="entrance-title">我要买</div>
              <div class="entrance-text">没有粮源，需要采购</div>
              <el-button type="Transparent" size="mini">发布采购</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="app-container-width pdT-30">
        <el-row :gutter="30">
          <el-col :span="18">
            <div class="new-guidelines">
              <div class="guidelines-title">新手引导</div>
              <el-row>
                <el-col :span="7">
                  <el-row>
                    <el-col :span="6">
                      <div class="advertising-icon">智物流</div>
                    </el-col>
                    <el-col :span="18">
                      <el-row>
                        <el-col :span="18">
                          <div class="guidelines-text">
                            <p><span>智能物流</span></p>
                            <p><span>30秒快速注册</span></p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="right-arrow-ground">
                            <span class="right-arrow"></span>
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="7">
                  <el-row>
                    <el-col :span="6">
                      <div class="advertising-icon">智物流</div>
                    </el-col>
                    <el-col :span="18">
                      <el-row>
                        <el-col :span="18">
                          <div class="guidelines-text">
                            <p><span>智能物流</span></p>
                            <p><span>实名身份证认证</span></p>
                          </div>
                        </el-col>
                        <el-col :span="6">
                          <div class="right-arrow-ground">
                            <span class="right-arrow"></span>
                          </div>
                        </el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="7">
                  <el-row>
                    <el-col :span="6">
                      <div class="advertising-icon">智物流</div>
                    </el-col>
                    <el-col :span="18">
                      <el-row>
                        <el-col :span="18">
                          <div class="guidelines-text">
                            <p><span>智能物流</span></p>
                            <p><span>线上交易平台</span></p>
                          </div>
                        </el-col>
                        <el-col :span="6"></el-col>
                      </el-row>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="">
              555
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="app-container-width pdT-30">
        <el-row :gutter="30">
          <el-col :span="10">
            <div  class="market-container">
              <div class="market-ground">
                <span class="market-title">玉米行情</span>
                <span class="market-time">2018–03-25</span>
              </div>
              <el-table
                :data="tableData"
                style="width: 100%" class="market-table">
                <el-table-column
                  prop="port"
                  label="港口"
                  width="180px"
                >
                </el-table-column>
                <el-table-column
                  prop="priceTypeText"
                  label="价格类型"
                >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="价格(元/吨)">
                </el-table-column>
                <el-table-column
                  prop="waterContent"
                  label="水分">
                </el-table-column>
              </el-table>
            </div>
          </el-col>
          <el-col :span="14">
            <div class="table-line">
              <div id="container" style="height:456px;width:600px;"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="app-container-width pdT-30">
        <el-row :gutter="30" class="index-table-body">
          <el-col :span="16">
            <div class="table-container">
              <span class="table-title">我要采购</span>
              <div class="table-title-ground">
                <span @click="open($event)" :class="{'active':TabStatuA}" data-type="yumiA">玉米</span>
                <span @click="open($event)" data-type="damiA" :class="{'active':TabStatuB}">大米</span>
                <router-link :to="{name:'Purchase'}" tag="span" >更多</router-link>
              </div>
            </div>
            <tableCompontent v-model="typeTab" v-show="typeTab=='yumiA'" :purchase="purchaseData"></tableCompontent>
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
              <div v-model="typeTab" v-show="typeTab=='damiA'" :style="{'height':'334px','background-color':'#fff'}">
                暂无数据
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="flow-path">
              <div class="flow-path-ground border-bottom">
                <p class="flow-path-title">采购操作流程</p>
                <div class="path-first-ground">
                  <div class="flow-icon-box">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="path-first-text-ground">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <span class="path-first-text">发布供应</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">采购下单</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">确认订单</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">签订合同</span>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
              <div class="flow-path-ground pdT">
                <p class="flow-path-title">采购操作流程</p>
                <div class="path-first-ground">
                  <div class="flow-icon-box">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                          <i class="flow-trigon-icon"></i>
                        </div>
                      </el-col>
                      <el-col :span="6">
                        <div class="flow-icon-ground">
                          <i class="flow-icon"></i>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  <div class="path-first-text-ground">
                    <el-row :gutter="20">
                      <el-col :span="6">
                        <span class="path-first-text">发布供应</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">采购下单</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">确认订单</span>
                      </el-col>
                      <el-col :span="6">
                        <span class="path-first-text">签订合同</span>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="app-container-width pdT-30">
        <el-row :gutter="30" class="index-table-body">
          <el-col :span="16">
            <div class="table-container">
              <span class="table-title">我要供应</span>
              <div class="table-title-ground">
                <span @click="open($event)" :class="{'active':TabStatuC}" data-type="yumiB">玉米</span>
                <span @click="open($event)" :class="{'active':TabStatuD}" data-type="damiB">大米</span>
                <router-link :to="{name:'Supply'}" tag="span" >更多</router-link>
              </div>
            </div>
            <tableCompontent v-model="typeTab2" v-show="typeTab2=='yumiB'" :supply="supplyData"></tableCompontent>
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
              <div v-model="typeTab2" v-show="typeTab2=='damiB'" :style="{'height':'334px','background-color':'#fff'}">
                暂无数据
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="flow-path">
              <div class="flow-path-first">
                <p class="path-first-title">交易记录</p>
                <div class="path-first-ground">

                </div>
              </div>
            </div>
          </el-col>
        </el-row>

      </div>
      <div class="app-container-width pdT-30">
        <el-row :gutter="30" class="food-news">
          <el-col :span="16">
            <div class="news">
              <div class="table-container news-content">
                <span class="table-title">粮食专栏</span>
                <div class="more-btn">
                  <router-link :to="{name:'Information'}" tag="span" >更多</router-link>
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
              <div class="news-container" v-for="(item,key) in newsData" :id="item.id">
                <el-row class="news-list-box" >
                  <el-col :span="4">
                    <img class="img-box" :src="item.cover" alt="">
                  </el-col>
                  <el-col :span="20" class="pdL-20">
                    <div class="news-ground">
                      <div class="news-title">{{item.title}}</div>
                      <div class="news-assistant-title">{{item.subTitle}}</div>
                      <div class="news-titme">{{item.createTime}}</div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              <!--<div class="news-container">-->
                <!--<el-row class="news-list-box">-->
                  <!--<el-col :span="4">-->
                    <!--<img class="img-box" src="../../../static/images/news.png" alt="">-->
                  <!--</el-col>-->
                  <!--<el-col :span="20" class="pdL-20">-->
                    <!--<div class="news-ground">-->
                      <!--<div class="news-title">标题标题标题标题标题标题标题标题标题标题</div>-->
                      <!--<div class="news-assistant-title">标题标题标题标题标题标题标题标题标题标题</div>-->
                      <!--<div class="news-titme">标题标题标题标题标题标题标题标题标题标题</div>-->
                    <!--</div>-->
                  <!--</el-col>-->
                <!--</el-row>-->
              <!--</div>-->
            </div>
          </el-col>
          <el-col :span="8">
            <div class="table-container news-content">
              <span class="table-title">粮食专栏</span>
              <div class="more-btn">
                <span>更多</span>
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
            <div class="news-right-list">
              <ul class="right-list-box">
                <li>
                  <div class="right-list-title">标题标题标题标题标题标题</div>
                  <div class="right-list-time">2018-01-31</div>
                </li>
                <li>
                  <div class="right-list-title">标题标题标题标题标题标题</div>
                  <div class="right-list-time">2018-01-31</div>
                </li>
                <li>
                  <div class="right-list-title">标题标题标题标题标题标题</div>
                  <div class="right-list-time">2018-01-31</div>
                </li>
                <li>
                  <div class="right-list-title">标题标题标题标题标题标题</div>
                  <div class="right-list-time">2018-01-31</div>
                </li>
                <li>
                  <div class="right-list-title">标题标题标题标题标题标题</div>
                  <div class="right-list-time">2018-01-31</div>
                </li>
              </ul>

            </div>
          </el-col>
        </el-row>


      </div>
    </div>
  </div>
</template>

<script>
  import tableCompontent from './table/table'
  var echarts = require('echarts/echarts.all');
  export default {
    name: 'Home',
    components:{
      tableCompontent
    },
    data(){
      return {
        typeTab:'yumiA',
        TabStatuA:true,
        TabStatuB:false,
        TabStatuC:true,
        TabStatuD:false,
        typeTab2:'yumiB',
        purchaseData:[]
        ,supplyData:[]
        ,newsData:[
          {
            title:'有些人走着走着就散了'
            ,cover:'../../../static/images/news.png'
            ,subTitle :'走着散了'
            ,classify  :'1'
            ,toped :'1'
            ,source:'粮路网'
            ,createTime:'2017-07-06 19:52:40'
            ,id:'1'
          },{
            title:'有些人走着走着就散了'
            ,cover:'../../../static/images/news.png'
            ,subTitle :'1sffgfd'
            ,classify  :'1'
            ,toped  :'1'
            ,source:'粮路网'
            ,createTime:'2017-07-06 19:52:40'
            ,id:'2'
          },{
            title:'有些人走着走着就散了'
            ,cover:'../../../static/images/news.png'
            ,subTitle :'走着'
            ,classify  :'1'
            ,toped  :'1'
            ,source:'粮路网'
            ,createTime:'2017-07-06 19:52:40'
            ,id:'3'
          },{
            title:'有些人走着走着散了'
            ,cover:'../../../static/images/news.png'
            ,subTitle :'走着散了'
            ,classify  :'1'
            ,toped  :'1'
            ,source:'粮路网'
            ,createTime:'2017-07-06 19:52:40'
            ,id:'4'
          }
        ]
        ,bannerImgs:[
          {picUrl:require('../../../static/images/banner04.jpg')},
          {picUrl:require('../../../static/images/banner.jpg')},
          {picUrl:require('../../../static/images/banner04.jpg')},
          {picUrl:require('../../../static/images/banner.jpg')},
          {picUrl:require('../../../static/images/banner04.jpg')}
        ],
        footDataOne:[
          {name:'玉米',price:'1,780',priceTypeText:'库内价',origin:'辽宁铁岭',years:'2018',createTime:'2018-05-08 11:43:43',total:'100008',operate:'立即采购'}
        ],
        activeName: '1',
        activeName: 'second',
        tableData: [{
          port: '大连大窖港湾',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '上海港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '宁波镇海港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '广东蛇口港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '江苏南通港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '鲅鱼圈港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '锦州港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        },{
          port: '大连北良港',
          priceTypeText: '平舱价',
          price: '1,745',
          waterContent:'≤15%'
        }]
        ,optionLegend:[]
        ,optionDates:[]
      }
    },
    methods: {
      open:function(e){
        var e=e||event;
        console.log(e)
        console.log(e.target.dataset.type)
        if(e.target.dataset.type=='yumiA'){
          this.typeTab='yumiA';
          this.TabStatuA=true;
          this.TabStatuB=false;
        }else if(e.target.dataset.type=='damiA'){
          this.typeTab='damiA';
          this.TabStatuA=false;
          this.TabStatuB=true;
        }else if(e.target.dataset.type=='yumiB'){
          this.typeTab2='yumiB';
          this.TabStatuC=true;
          this.TabStatuD=false;
        }else if(e.target.dataset.type=='damiB'){
          this.typeTab2='damiB';
          this.TabStatuC=false;
          this.TabStatuD=true;
        }
      }
    },
    mounted() {
      var that=this;
      //统计数据折线图
      var myChart = echarts.init(document.getElementById("container"));
      that.$api.post('069',{},r => {
        var data=r.data;
        var option = null;
        var ser=[];
        if(r.head.status=='1'){
          console.log(data);
          var series=data.series;
          for(var i=0;i<series.length;i++){
            ser.push({data:series[i].list,name:series[i].name,type:'line',stack: '总量'})
          }
          console.log(ser)
          option = {
            title: {
              text: '港口指数'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data:data.ports
            },
            smooth:{
              default: true
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: data.dates
            },
            yAxis: {
              type: 'value'
            },
            series:ser
          };
          if (option && typeof option === "object") {
            myChart.setOption(option, true);
          }
        }
      })
    },
    created () {
      var that=this;

      //供应列表
      var timer1=window.setTimeout(function(){
          that.$api.post('007',{"type": "1", "page": "1", "pageSize": "10"},r => {
            that.supplyData=r.data.items;
            window.clearTimeout(timer1);
          });
      },1000);
      //采购列表
      var timer2=window.setTimeout(function(){
          that.$api.post('007',{"type": "2", "page": "1", "pageSize": "10"},r => {
              that.purchaseData=r.data.items;
              window.clearTimeout(timer2);
          })
      },1000);
      //新闻列表
      var timer3=window.setTimeout(function(){
        that.$api.post('031',{"classify": "1", "page": "1", "pageSize": "20"},r => {
          // that.newsData=r.data.items;



          window.clearTimeout(timer3);
        });
      },1000);
    }
  }
</script>
