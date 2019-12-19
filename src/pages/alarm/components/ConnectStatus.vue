<template>
    <div>
        <h4 class="item-title">Viewer运行状态</h4>
        <!-- 循环组件 -->
        <item-comp v-for="(list,index) in lists" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.lineName}}</p>
            </template>
            <template v-slot:detail>
                <div><div>版本:</div><div></div></div>
                <div><div>目前状态:</div><div></div></div>
                <div>
                    <div>对应线体:</div>
                    <div>
                        <p>ffdfd</p>
                        <p>ffdfs</p>
                        <p>ffsfs</p>
                    </div>
                </div>                   
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'ConnectStatus',
    components:{
        ItemComp
    },
    data() {
        return {
            lists:[
                {
                    lineName:'Viewer01',
                    desc:{
                        count:10,
                        badPercent:'3%'
                    }
                },
                {
                    lineName:'Viewer02',
                    desc:{
                        count:11,
                        badPercent:'2.5%'
                    }
                }
            ]
        }
    },
}
</script>
<style lang="stylus" scoped>
.right-container 
    >div
        display flex
        div:nth-child(1)
            width 5em
        div:nth-child(2)
            flex 1
</style>