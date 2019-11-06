<template>
    <div class="select-box">
        <van-dropdown-menu class="select">
            <!-- <van-dropdown-item :title="selectedItem" ref="item">
                <ul class="">
                    <li>line1</li>
                    <li>line2</li>
                    <li>line3</li>
                    <li>line4</li>
                    <li>line5</li>
                    <li>line6</li>
                    <li>line7</li>
                    <li>line8</li>
                </ul>
                <van-button block type="info" @click="onConfirm">确认</van-button>
            </van-dropdown-item> -->
            <van-dropdown-item class="bgcolor" v-model="value" :options="option" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:'Choose',
    data() {
        return {
            // show:false,
            value: 0,
            option: [
                { text: 'EDC', value: 0 },
                { text: 'PPC', value: 1 },
                { text: 'IPC', value: 2 },
                { text: 'CPC', value: 3 }
            ],
            // selectedItem:'item',
            // switch1:false,
            // switch2:false
        }
    },
    methods:{
        // showPop(){
        //     this.show = true
        // },
        // onConfirm() {
        //     this.$refs.item.toggle()
        // }
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