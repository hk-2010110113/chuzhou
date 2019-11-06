<template>
    <div class="select-box">
        <van-dropdown-menu class="select">
            <van-dropdown-item class="bgcolor" v-model="value" :options="option" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:'SelectSoftware',
    data() {
        return {
            value: 0,
            option: [
                { text: 'ALL', value: 0 },
                { text: 'EDC', value: 1 },
                { text: 'PPC', value: 2 },
                { text: 'IPC', value: 3 },
                { text: 'CPC', value: 4 }
            ]
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