<template>
    <div>
        <h4 class="item-title">产能列表</h4>
        <!-- 循环组件 -->
        <item-comp v-for="list in lists" :key="list.LineID">
            <template v-slot:text>
                <p class="vertical-center">{{list.LineName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>产能</span><span>{{list.TotalNum}}</span></p>
                <p><span>OK量:</span><span>{{list.OK}}</span></p>
                <p><span>NG量:</span><span>{{list.NG}}</span></p>
                <p><span>良率:</span><span>{{list.OKRate}}</span></p>       
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'LineCapacity',
    props:['lists'],
    components:{
        ItemComp
    },
    data() {
        return {
        }
    },
}
</script>
<style lang="stylus" scoped>
    p
      span:nth-child(1)
        display inline-block
        width 4em
</style>