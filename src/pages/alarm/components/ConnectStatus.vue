<template>
    <div class="continue-alert-wrapper">
        <div class="content">
            <h4 class="item-title">Viewer运行状态</h4>
            <!-- 循环组件 -->
            <item-comp v-for="(list) in viewerStatus" :key="list.ViewerID">
                <template v-slot:text>
                    <p class="vertical-center">{{list.ViewerName}}</p>
                </template>
                <template v-slot:detail>
                    <div><div>版本:</div><div>{{list.ViewerVersion}}</div></div>
                    <div><div>目前状态:</div><div>{{list.ViewerState}}</div></div>
                    <div>
                        <div>对应线体:</div>
                        <div>
                            <p v-for="item in toArr(list.LineNames)" :key="item">{{item}}</p>
                            <!-- <p>ffdfs</p>
                            <p>ffsfs</p> -->
                        </div>
                    </div>                   
                </template>
            </item-comp> 
        </div>
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
import global from "@/assets/js/global.js"
export default {
    name:'ConnectStatus',
    props:['viewerStatus'],
    components:{
        ItemComp
    },
    mounted(){    
        this.bs == null? global.Bsscrolls(this,'continue-alert-wrapper'):global.refreshBs(this)
    },
    // updated(){
    //     this.bs == null? this.initBscroll():this.refreshBS()
    // },
    data() {
        return {
            num:0,
            bs:null
        }
    },
    methods:{
        toArr(str){
            if(str == null){
                return []
            }
            let arr = [];
            arr = str.split(',')
            return arr
        },
    }
}
</script>
<style lang="stylus" scoped>
.continue-alert-wrapper
    height calc(100vh - 129px)
    .right-container 
        >div
            display flex
            div:nth-child(1)
                width 5em
            div:nth-child(2)
                flex 1
</style>