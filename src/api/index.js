// 配置API接口地址
var root = 'http://120.77.205.134:8080/cailu-trade-api/api/ex.do';
// 引用axios
var axios = require('axios')
import {MD5} from './MD5'
String.prototype.MDA5=MD5;
// 参数过滤函数
function sortJson(json) {
  var m = [];
  for (var key in json) {
    m.push({"key": key, "value": json[key]});
  }
  for (var i = 0; i < m.length; i++) {
    for (var j = 0; j < m.length - 1; j++) {
      if (m[j].key > m[j + 1].key) {
        var temp = m[j];
        m[j] = m[j + 1];
        m[j + 1] = temp;
      }
    }
  }
  var result = {};
  for (var i = 0; i < m.length; i++) {
    result[m[i].key] = m[i].value;
  }
  return result;
};
/*
  接口处理对象
*/
var api = {
  imei: "",
  port:'',
  para: {
    "datacode": "data001",
    "version": "1.0.0",
    "token":"",
    "os":'2'
  },
  querystring: {},
  exjson: {},
  execute: function (port,method,success,failure) {
    api.port=port;
    localStorage.setItem("port", JSON.stringify(port));
    var token = localStorage.getItem("foodstuff");
    if (token && token != "null") {
      token = JSON.parse(token);
      api.para.token = token.token;
    }
    api.para.datacode = "data" + port;
    var data = {
      "head": this.para,
      "data":this.querystring || {}
    };
    for (var key in this.exjson) {
      data[key] = this.exjson[key]
    }
    data.data = sortJson(data.data);
    data.head.sign = JSON.stringify(data.data) == "{}" ? "".MDA5(): JSON.stringify(data.data).MDA5();
    console.log(data.head.sign)
    if(data.head.sign){
      console.log(data)
      if(data){

      }

      axios({
        method: method,
        url: api.submitURL || api.defaultUrl,
        data: method === 'POST' || method === 'PUT' ? data : null,
        params: method === 'GET' || method === 'DELETE' ? data : null,
        baseURL: root,
        withCredentials: false
      }).then(function (res){
        if(res.data.head.status === '1'){
          if(success) {
            success(res.data)
          }
        }else{
          return failure(res.data);
        }
      }).catch(function (err) {
        let res = err.response;
        if(err){
          window.alert('api error, HTTP CODE: ' + res.status)
        }
      })
    }

  },
  query: function (data) {
    this.querystring = data;
    return this
  },
  extion: function (key, val) {
    this.exjson[key] = val;
    return this
  },
  global: function (data) {
    for (var key in data) {
      this.para[key] = data[key]
    }
    return this
  },
  postURL:function (value) {
    if(!value.empty()){
      api.submitURL = value;
    }
    return this;
  },
  detail: function (id, port, fun) {
    return this.query({
      "Id": id
    }).execute(port, fun)
  },
  defaultUrl :root
};

export default {
  get: function(port,data,success){
    if(Object.prototype.toString.call(data)=='[object Object]'){
      console.log(data)
      return api.query(data).execute(port,'GET',success)
    }else{
      return api.execute(port,'GET',success)
      console.log(666)
    }
  },
  post: function(port,data,success,failure){
    if(Object.prototype.toString.call(data)=='[object Object]'){
       return api.query(data).execute(port,'POST',success,failure)
    }else{
       return api.execute(port,'POST',success,failure)
    }
  },
  put: function(port,data,success){
    if(Object.prototype.toString.call(data)=='[object Object]'){
      return api.query(data).execute(port,'PUT',success)
    }else{
      return api.execute(port,'PUT',success)
    }
  },
  delete: function(port,data,success){
    if(Object.prototype.toString.call(data)=='[object Object]'){
      return api.query(data).execute(port,'DELETE',success)
    }else{
      return api.execute(port,'DELETE',success)
    }
  }
}
