<template>
    <div class="line-container">
         <item-comp v-for="(list,index) in lists" :key="index">
            <template v-slot:text>
                <p class="vertical-center">{{list.lineName}}</p>
            </template>
            <template v-slot:detail>                             
                <p><span>使用版本:</span><span></span></p>
                <p><span>版本说明:</span><span></span></p>                      
            </template>
        </item-comp> 
    </div>
</template>
<script>
import ItemComp from '@/common/reusecomp/ItemComp'
export default {
    name:'SoftwareDetail',
    data() {
        return {
            lists:[
                {
                    lineName:'line1',
                    useVersion:'1.0',
                    versionDes:'附近的否定'
                },
                {
                    lineName:'line2',
                    useVersion:'1.3',
                    versionDes:'金佛的皮革'
                },
                {
                    lineName:'line3',
                    useVersion:'1.1',
                    versionDes:'饥饿哦积分'
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
.line-container
    margin-top 10px
</style>