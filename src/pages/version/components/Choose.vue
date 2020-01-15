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
            <van-dropdown-item class="bgcolor" v-model="value" :options="options" @change='selectedItem'/>
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:'Choose',
    props:['softwareAndVersion'],
    data() {
        return {
            // show:false,
            value: '',
            option: [
                { text: 'EDC V1.1.1.0', value: 0 },
                { text: 'PPC V1.1.1.0', value: 1 },
                { text: 'IPC V1.1.1.0', value: 2 },
                { text: 'CPC V1.1.1.0', value: 3 },
                { text: 'EDC V1.1.1.0', value: 4 },
                { text: 'PPC V1.1.1.0', value: 5 },
                { text: 'IPC V1.1.1.0', value: 6 },
                { text: 'CPC V1.1.1.0', value: 7 },
                { text: 'EDC V1.1.1.0', value: 8 },
                { text: 'PPC V1.1.1.0', value: 9 },
                { text: 'IPC V1.1.1.0', value: 10 },
                { text: 'CPC V1.1.1.0', value: 11 },
                { text: 'EDC V1.1.1.0', value: 12 },
                { text: 'PPC V1.1.1.0', value: 13 },
                { text: 'IPC V1.1.1.0', value: 14 },
            ]
        }
    },
    computed:{
        options(){
            let arr = [];
            if(this.softwareAndVersion.length == 0){
                return arr
            }
            for(let i =0;i<this.softwareAndVersion.length;i++){
                let currentItem = this.softwareAndVersion[i]
                arr.push({
                    text:currentItem.SOFTWARENAME+" -- "+currentItem.VERSIONNUM,
                    value:currentItem.SOFTWAREID
                })
            }
            this.value = this.softwareAndVersion[0].SOFTWAREID
            return arr
        }
    },
    methods:{
        selectedItem(e){
            this.$emit('changeSoftware',e)
        }
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
.select-box
    .select >>> .van-cell 
        background-color: #eee;
    .select
        width 45%;
        padding 0 2% 
        max-width 50%
        height 32px
        line-height 32px
        box-sizing border-box
        border-radius 999px
        border 1px solid #eee
</style>