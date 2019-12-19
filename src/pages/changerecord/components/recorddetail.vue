<template>
    <div class="detail-content wrapper">
        <div class="content">
            <!-- 选择部分 -->
            <div>
                <select-software @selectedSoft = 'getSelectedSoftWare'></select-software>
            </div>
            <!-- 软件说明部分 -->
            <div>
                <software-detail :currentSoft='currentSoft'></software-detail>
            </div>
        </div>
    </div>
</template> 
<script>
import SelectSoftware from './SelectSoftware'
import SoftwareDetail from './SoftwareDetail'
import BScroll from '@better-scroll/core'
export default {
    name:'RecordDetail',
    data() {
        return {
            bs:null,
            currentSoft:'ALL'
        }
    },
    mounted(){
        this.bs = new BScroll(".wrapper",{    
            click:true,
            taps: true
        })
    },
    components:{
        SelectSoftware,
        SoftwareDetail
    },
    methods:{
        getSelectedSoftWare(e){
            this.currentSoft = e
        }
    }
}
</script>
<style lang="stylus" scoped>
.detail-content
    position absolute
    top 42px
    left 0
    right 0
    bottom 0
    padding 0 10px
    .content
        box-sizing border-box
        padding-top 10px
</style>