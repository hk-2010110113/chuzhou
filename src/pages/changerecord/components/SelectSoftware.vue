<template>
    <div class="select-box">
        <van-dropdown-menu class="select">
            <van-dropdown-item class="bgcolor" @change="selected" v-model="value" :options="option" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:'SelectSoftware',
    data() {
        return {
            value: 'ALL',
            option: [
                { text: 'ALL', value: 'ALL' },
                { text: 'EDC', value: 'EDC' },
                { text: 'PPC', value: 'PPC' },
                { text: 'IPC', value: 'IPC' },
                { text: 'CPC', value: 'CPC' }
            ]
        }
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