<template>
    <div>
        <h4 class="item-title"><span>线体</span>缺陷复现率Top 10</h4>
        <!-- 循环组件 -->
        <item-comp v-for="(list,index) in lists" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.defectName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>缺陷数量</span><span>{{list.defectCount}}</span></p>
                <p><span>复现次数:</span><span>{{list.reshowTimes}}</span></p>
                <p><span>复现率:</span><span>{{list.reshowRatio}}</span></p>     
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'DefectTop',
    data(){
        return {
            lists:[
                {
                    defectName:'CM13-Panel周围漏光',
                    defectCount:111,
                    reshowTimes:12,
                    reshowRatio:'0.28%'
                },
                {
                    defectName:'CP12-下偏光板玻璃屑',
                    defectCount:111,
                    reshowTimes:12,
                    reshowRatio:'0.28%'
                }
            ]
        }
    },
    components:{
        ItemComp
    }
}
</script>
<style lang="stylus" scoped>
.right-container 
    p
        span:nth-child(2)
            margin-left 10px
</style>