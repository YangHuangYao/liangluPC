export function apiBase() {
  let hostname = window.location.hostname,
    API_BASE_URL = 'http://test2api.dunizb.com';//默认环境
  if(hostname === 'crm.dunizb.cn') {  //正式环境
    API_BASE_URL = 'http://api.dunizb.cn';
  } else if(hostname === 'admin.dunizb.com') {//公网测试环境
    API_BASE_URL = 'http://testapi.dunizb.com';
  } else if(hostname === 'manager.dunizb.com') {//内网测试环境
    API_BASE_URL = 'http://test2api.dunizb.com';
  }
  return API_BASE_URL;
}
