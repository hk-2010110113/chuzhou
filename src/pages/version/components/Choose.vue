<template>
    <div class="select-box">
        <div class="select" @click="showPop"></div>
        <van-popup 
            v-model="show" 
            round 
            :overlay-style="{background:'rgba(224,224,224,.4)'}"
            :get-container="getContainer"
            :style="{ height: '20%',top:'84px',background:'pink' }"
             position="top"
        >
        </van-popup>
    </div>
</template>
<script>
export default {
    name:'Choose',
    data() {
        return {
            show:false
        }
    },
    methods:{
        getContainer(){
             return document.querySelector('.select-box')
        },
        showPop(){
            this.show = true
        }
    }
}
</script>
<style lang="stylus" scoped>
.select
    width 35%;
    padding 0 2% 
    max-width 35%
    height 32px
    line-height 32px
    box-sizing border-box
    background-color #eee
    border-radius 999px
</style>