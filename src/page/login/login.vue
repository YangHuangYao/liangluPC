<template>
    <div class="login-container">
        <div class="login-title">

        </div>
        <div class="banner-ground">
          <div class="app-container-width login-box">
            <div class="login-ground">
              <p class="login-ground-title">登录</p>
              <el-form :label-position="labelPosition" label-width="80px" :rules="rules" ref="formLabelAlign" :model="formLabelAlign" class="demo-ruleForm">
                <el-form-item prop="mobile">
                  <el-input v-model="formLabelAlign.mobile" auto-complete="off" placeholder="手机号码"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" v-model="formLabelAlign.password" auto-complete="off" placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <p class="login-ground-bottom clearfix">
                    <router-link class="left" :to="{name:'Home'}" tag="span">忘记密码</router-link>
                    <router-link class="right" :to="{name:'Register'}" tag="span">立即注册</router-link>
                  </p>
                </el-form-item>
                <el-form-item>
                  <el-button class="btn-submit" type="primary" @click="submitForm('formLabelAlign')">立即登录</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      <Dialog></Dialog>
    </div>
</template>

<script>
  const Dialog = r => require.ensure([], () => r(require('../../components/dialog/dialog')), 'Dialog')
  import {MDD5} from '../../api/MD5'
  String.prototype.MDB5=MDD5;
    export default {
      name: "Login"
      ,components:{
        Dialog:Dialog
      }
      ,data(){
        var checkPhone=(rule, value, callback) => {
          console.log(value)
          if(!value) {
            return callback(new Error('请输入手机号！'));
          }else if(!(/^1[34578]\d{9}$/.test(value))){
            return callback(new Error('请输入正确的手机号！'));
          }else{
            callback()
          }
        };
        var validatePass = (rule, value, callback) => {
          if(value === '') {
            callback(new Error('请输入密码'));
          }else{
            callback();
          }
        };
        return{
          labelPosition: 'top',
          formLabelAlign:{
            mobile:'',
            password: ''
          },
          rules:{
            mobile: [
              { validator: checkPhone, trigger: 'blur' }
            ],
            password: [
              { validator: validatePass, trigger: 'blur' }
            ]
          }
        }

      }
      ,methods: {
        submitForm(formName) {
          var data={};
          data['mobile']=this.formLabelAlign.mobile;
          var passMD5=this.formLabelAlign.password.MDB5();
          var first=passMD5.substring(0,4);
          var content=passMD5.substring(4,passMD5.length-4);
          var last=passMD5.substring(passMD5.length-4,passMD5.length);
          var pas=last+content+first;
          data['password']=pas.MDB5().toUpperCase();
            this.$refs[formName].validate((valid) => {
              if(valid) {
                this.$api.post('045',data,r => {
                  console.log(r)
                  var foodstuff={
                    id:r.data.id,
                    mobile:r.data.mobile,
                    token:r.data.token,
                    name:r.data.name,
                    portrait:r.data.portrait,
                    company:r.data.company,
                    type:r.data.type,
                    phoneNumber:r.data.phoneNumber,
                    identityType:r.data.identityType,
                    isUpdate:r.data.isUpdate,
                    createDate:r.data.createDate
                  };
                  localStorage.setItem("foodstuff", JSON.stringify(foodstuff));

                },f=>{
                  this.$root.eventHub.$emit('centerDialog',{
                      boolean:true,
                      html:f.head.msg
                    });
                })
              }else{
                    console.log('error submit!!');
                return false;
              }
           });
        }
     }
  }
</script>

<style scoped>

</style>
