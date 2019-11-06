<template>
    <div>
        <h4 class="item-title">Viewer连接状态</h4>
        <!-- 循环组件 -->
        <item-comp v-for="(list,index) in lists" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.lineName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>对应线体:</span><span></span></p>
                <p><span>目前状态:</span><span></span></p>                      
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
                    lineName:'line1',
                    desc:{
                        count:10,
                        badPercent:'3%'
                    }
                },
                {
                    lineName:'line2',
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

</style>