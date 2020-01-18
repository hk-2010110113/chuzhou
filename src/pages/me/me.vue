<template>
    <div class="me-container">
        <div class="item">
            <div>账号</div>
            <div>123456</div>
        </div>
        <div class="sign-in">
            <van-row type="flex" justify="center">
                <van-button round type="info" size="normal" @click='signout'>退出登录</van-button>
            </van-row>  
        </div>
    </div>
</template>
<script>
export default {
    name:'Me',
    methods:{
        signout(){
            // 退出登录，跳到登录页面
            localStorage.setItem("chuzhouUsername","")
            this.$router.push({
                name:'Login'
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.me-container
    position absolute
    top 42px
    bottom 43px
    left 0
    right 0
    padding 0 10px
    .item
        display flex
        div:nth-child(1)
            width 6em
            text-align left
        div:nth-child(2)
            flex 1
            text-align right
    .sign-in
        position absolute
        bottom 40px
        height 20px
        left 0 
        right 0
        
</style>