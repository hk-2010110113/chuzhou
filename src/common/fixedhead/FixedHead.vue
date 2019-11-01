<template>
   <!-- <head-item>
       <template v-slot:back>
            <div class="back-icon">dfd</div>   
       </template>
       <template v-slot:title>
            <div class="content"></div>
       </template>
   </head-item> -->
   <div class="title-container">
       <div v-show="showicon" class="back-icon" @click="back">返回</div>
       <div class="title">{{title}}</div>
   </div>
</template>
<script>
import HeadItem from './HeadItem'
export default {
    name:'FixedHead',
    components:{
        HeadItem
    },
    props:['showicon','title'],
    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="stylus" scoped>
.title-container
    position absolute
    z-index 100
    left 0
    right 0
    top 0
    height 42px
    padding 0 10px
    line-height 42px
    background lightgray
    .back-icon
        float left 
    .title
        text-align center
</style>