<template>
    <div class="select-box">
        <van-dropdown-menu class="select">
            <van-dropdown-item class="bgcolor" @change="selected" v-model="value" :options="options" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:'SelectSoftware',
    props:['softwareArr','currentSoft'],
    data() {
        return {
            value: this.currentSoft,
        }
    },
    watch:{
        currentSoft(v){
            this.value = v
        }
    },
    computed:{
        options(){
            let arr = []
            arr.push({ text: 'ALL', value: 'ALL' })
            for(let i =0;i<this.softwareArr.length;i++){
                arr.push({
                    text:this.softwareArr[i],
                    value:this.softwareArr[i]
                })
            }
            return arr
        },
    },
    methods:{
        selected(e){
            this.$emit('selectedSoft',e)
        }
    }
}
</script>
<style lang="stylus" scoped>
.select >>> .van-cell 
    background-color: #eee;
.select
    width 35%;
    padding 0 2% 
    max-width 35%
    height 32px
    line-height 32px
    box-sizing border-box
    border-radius 999px
    border 1px solid #eee
</style>