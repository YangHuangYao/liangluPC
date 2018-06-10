export default {
  state:{
    show:true
  }
  ,mutations:{
    switch_Login(state){//这里的state对应着上面这个state
      state.show = state.show?true:false;
      //你还可以在这里执行其他的操作改变state
    }
  }
  ,actions:{
    switch_Login(context){//这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('switch_Login');
      //你还可以在这里触发其他的mutations方法
    }
  }
}
