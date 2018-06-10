<template>
    <div class="dialog">
      <el-dialog title="温馨提示" :visible.sync="centerDialogVisible" width="30%" center>
        <p :style="font">{{innerHTML}} </p>
        <span slot="footer" class="dialog-footer">
  </span>
      </el-dialog>
    </div>
</template>

<script>
    export default {
      name: "Dialog"
      ,data(){
        return{
          centerDialogVisible: false,
          innerHTML:'d',
          font:{
            'text-align':'center',
            'font-size':'16px'
          }
        }
      }
      ,methods:{
          close:function(){
            this.$emit('centerDialog','false');
          }
      }
      ,created:function(){
        this.$root.eventHub.$on('centerDialog',(target) => {
            this.centerDialogVisible=target.boolean;
            this.innerHTML=target.html;
        })
      }

    }
</script>

<style scoped>

</style>
