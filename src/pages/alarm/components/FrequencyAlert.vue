<template>
    <div class="wrapper3">
        <div class="content">
            <h4 class="item-title">EQ频发报警</h4>
            <!-- 循环组件 -->
            <item-comp v-for="list in EQAlarms" :key="list.LineID">
                <template v-slot:text>
                    <p class="vertical-center">{{list.LineName}}</p>
                </template>
                <template v-slot:detail>                             
                    <!-- <p><span>吸真空异常次数:</span><span></span></p>
                    <p><span>DCR异常次数:</span><span></span></p> 
                    <p><span>CDF异常次数:</span><span></span></p> -->
                    <p v-for="(item,index) in list.Alarms" :key="index">{{item}}</p>                    
                </template>
            </item-comp> 
        </div> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
import global from "@/assets/js/global.js"
export default {
    name:'FrequencyAlert',
    props:['EQAlarms'],
    mounted(){
        this.bs == null? global.Bsscrolls(this,'wrapper3'):global.refreshBs(this)
    },
    components:{
        ItemComp
    },
    data() {
        return {
            bs:null
        }
    }
}
</script>
<style lang="stylus" scoped>
.wrapper3
    height calc(100vh - 129px)
</style>