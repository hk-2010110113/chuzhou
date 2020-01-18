<template>
  <div class="login-container">
      <div class="logn-content">
          <van-cell-group>
            <van-field left-icon="manager" v-model="username" label="用户名" />
            <van-field left-icon="lock" v-model="password" type="password" label="密码" />           
          </van-cell-group>
          <div class="btn-container">
              <van-button class="btn-color" block @click="signIn">登录</van-button>
          </div>
      </div>
  </div> 
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      username:"",
      password: ""
    }
  },
  methods:{
    signIn(){
      if(!this.valPwd(this.username)){
        //说明用户名为空
        console.log("用户名为空")
        return false
      }
      if(!this.valPwd(this.password)){
        //说明密码为空
        console.log("密码为空")
        return false
      }
      // 登录成功，将用户名缓存起来,跳到首页
      localStorage.setItem("chuzhouUsername",this.username)
      this.$router.push({
        name:'productcapacity'
      })
    },
    valPwd(value){
      if(value.trim() ==""){
        return false
      }
      return true
		}
  }
}
</script>
<style lang="stylus" scoped>
.login-container
    position relative
    z-index 1000
    height calc(100vh)
    background-color white
    .logn-content
        position absolute 
        top 50%
        left 0
        right 0
        transform translateY(-50%)
        .btn-container
            padding 0 16px
            .btn-color
                background-color #4a89dc
                color white
                font-weight bold
</style>