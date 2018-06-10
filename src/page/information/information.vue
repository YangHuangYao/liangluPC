<template>
    <div class="information-container body-bg">
      <div class="app-container-width">
        <el-row>
          <el-col :span="4" class="left-nav">
            <ul>
              <li>粮食专栏</li>
              <li>粮食科技</li>
              <li>饲料行业</li>
            </ul>
          </el-col>
          <el-col :span="20" class="right-container">
            <div class="list-box">
              <router-view/>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Information"
    }
</script>

<style scoped>

</style>
