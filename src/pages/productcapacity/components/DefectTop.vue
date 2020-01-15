<template>
    <div>
        <h4 class="item-title"><span>{{currentLineName}}</span>缺陷复现率Top 10</h4>
        <!-- 循环组件 -->
        <item-comp v-for="(list,index) in defectListTop" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.DefectName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>缺陷数量</span><span>{{list.DefectNum}}</span></p>
                <p><span>复现次数:</span><span>{{list.PanelNum}}</span></p>
                <p><span>复现率:</span><span>{{list.NGRate}}</span></p>     
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'DefectTop',
    props:['currentLineName','defectListTop'],
    data(){
        return {
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