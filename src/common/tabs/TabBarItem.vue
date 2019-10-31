<template>
    <div id="tab-item" @click="handleClick" :style="activeStyle">
        <slot></slot>  
    </div>
</template>
<script>
export default {
    name:'TabsItem',
    props:{
        path:{
            type:String,
            default(){
                return ''
            }
        }
    },
    methods:{
        handleClick(){
            this.$router.push(this.path)
        }
    },
    computed:{
        activeStyle(){ 
            return this.isShow ? {color:'red'} : {}
        },
        isShow(){
            return this.$route.path.indexOf(this.path) > -1 ? true : false
        }
    }
}
</script>
<style lang="stylus" scoped>
#tab-item
    flex 1
    line-height 42px
    text-align center
</style>