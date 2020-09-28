<template>
  <div>
    <!-- 顶部导航开始 -->
    <mt-header title="注册页面">
        <router-link to="/" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <router-link to="/login" slot="right" class="shortcut">
          登录
        </router-link>
    </mt-header>
    <!-- 顶部导航结束 -->
    <!-- 表单区域开始 -->
    <div>
        <mt-field 
          type="text" 
          label="用户名"
          placeholder="请输入用户名"
          :attr="{maxlength:15}"
          v-model.trim="username"
          @blur.native.capture="usernameCheck"
          :state="unameState">
        </mt-field>   

        <mt-field 
          type="password" 
          label="密码"
          placeholder="请输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model.trim="password"
          @blur.native.capture="passwordCheck">
        </mt-field>   

        <mt-field 
          type="password" 
          label="确认密码"
          placeholder="请再次输入密码"
          :attr="{maxlength:20,autocomplete:'off'}"
          v-model.trim="conpassword"
          @blur.native.capture="conpasswordCheck">
        </mt-field>   

        <mt-button type="primary" size="large" @click="handle">免费注册</mt-button>    
    </div>
    <!-- 表单区域结束 -->
  </div>
</template>
<style scoped>
.shortcut{
  text-decoration: none;  
}
</style>
<script>
export default {
  data(){
    return {
      // 用户名
      username:'',
      // 密码
      password:'',
      // 确认密码
      conpassword:'',
      unameState:"",
      passwordState:"",
      conPasswordState:""
    }
  },
  methods:{
    usernameCheck(){
      let unameReg = /[0-9a-zA-Z]{8,16}/;
      if(!unameReg.test(this.username)){
        this.$toast({
          message:"用户名在8-16位的数字或者字母",
          position:"top"
        })
        this.unameState="error"
        return false
      }else{
        this.unameState="success"
        return true
      }
    },
    passwordCheck(){
      if(!this.password){
        this.$toast({
          message:"密码不能为空",
          position:"top",
          duration:2000
        })
        this.passwordState="error"
      }else{
        this.unameState="success"
        return true
      }
    },
    conpasswordCheck(){
      if(this.password!==this.conpassword){
        this.$toast({
          message:"两次密码不匹配",
          position:"top"
        })
        this.conPasswordState="error"
      }else{
        this.unameState="success"
        return true
      }
    },
    handle(){
     if(this.usernameCheck()&&this.passwordCheck()&&this.conpasswordCheck()){
       this.$toast({
         message:"登录成功"
       })
       
     }
    }
  }
}
</script>