<template>
    <div>
        <h4 class="item-title">产能列表</h4>
        <!-- 循环组件 -->
        <item-comp v-for="(list,index) in lists" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.lineName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>产能</span><span></span></p>
                <p><span>OK量:</span><span></span></p>
                <p><span>NG量:</span><span></span></p>
                <p><span>良率:</span><span></span></p>       
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'LineCapacity',
    components:{
        ItemComp
    },
    data() {
        return {
            lists:[
                {
                    lineName:'line1line1line1',
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