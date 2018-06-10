<template>
    <div class="register-container">
      <div class="app-container-width register-title clearfix">
        <div class="img-ground">
          <img src="" alt="">
          <span>欢迎注册</span>
        </div>
        <div class="title-right">
          <span class="left">已有账号？</span>
          <router-link class="right" :to="{name:'Login'}" tag="span">请登录</router-link>
        </div>
      </div>
      <div class="register-box app-container-width">
        <div class="register-box-ground">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="手机号码" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="登录密码" prop="password">
              <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item type="password" label="确认密码" prop="password">
              <el-input type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item label="短信验证" prop="code">
              <el-input v-model="ruleForm.code"></el-input>
            </el-form-item>
            <el-form-item label="推荐人" prop="referrer">
              <el-input v-model="ruleForm.referrer"></el-input>
            </el-form-item>
            <el-form-item label="" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="我已阅读并同意《粮路网平台交易规则》" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>

      </div>
      <h3>我是注册页</h3>
    </div>
</template>
<script>
    export default {
      name: "Register",
      data() {
        return {
          ruleForm: {
            phone: '',
            password: '',
            code: '',
            referrer: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入活动名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
            region: [
              { required: true, message: '请选择活动区域', trigger: 'change' }
            ],
            date1: [
              { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
              { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
              { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
            ],
            resource: [
              { required: true, message: '请选择活动资源', trigger: 'change' }
            ],
            desc: [
              { required: true, message: '请填写活动形式', trigger: 'blur' }
            ]
          }
        };
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              alert('submit!');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>
<style scoped>

</style>
