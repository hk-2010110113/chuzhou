<template>
    <div class="line-container wrapper">
        <div class="content">
            <item-comp v-for="list in lineDefectInfoArr" :key="list.LineID">
                <template v-slot:text>
                    <p class="vertical-center">{{list.LineName}}</p>
                </template>
                <template v-slot:detail>
                    <div class="showLine" v-for="item in list.description" :key="item.VersionID">
                        <p><span>{{item.PcName}}:</span><span>{{item.VersionNum == null?"无版本记录":item.VersionNum}}</span></p>
                        <p><span>{{item.VersionNote}}</span></p>
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
    name:'SoftwareDetail',
    props:['linedefectInfo'],
    data() {
        return {
            bs:null
        }
    },
    components:{
        ItemComp
    },
    computed:{
        lineDefectInfoArr(){
            let obj = {}
            let arr = []
            if(this.linedefectInfo.length == 0){
                return arr
            }
            for(let i =0;i<this.linedefectInfo.length;i++){  
                let currentItem = this.linedefectInfo[i] 
                if(obj[currentItem.LineID]){
                    obj[currentItem.LineID]++
                }else{
                    obj[currentItem.LineID] = 1
                    let len = arr.length
                    arr[len] = {
                        LineName:currentItem.LineName,
                        LineID:currentItem.LineID,
                        description:[
                            {
                                PcName:currentItem.PcName,
                                VersionNum:currentItem.VersionNum,
                                VersionNote:currentItem.VersionNote,
                                VersionID:currentItem.VersionID
                            }
                        ]
                    }
                    for(let j =i+1;j<this.linedefectInfo.length;j++){
                        let currentCircle = this.linedefectInfo[j]
                        if(currentItem.LineID ===currentCircle.LineID){
                            arr[len].description.push({
                                PcName:currentCircle.PcName,
                                VersionNum:currentCircle.VersionNum,
                                VersionNote:currentCircle.VersionNote
                            })
                        } 
                    }
                }               
            }           
            return arr         
        }
    },
    updated(){
        this.bs == null? global.Bsscrolls(this,'wrapper'):global.refreshBs(this)    
    }
}
</script>
<style lang="stylus" scoped>
.line-container
    position absolute
    top 52px
    bottom 0
    z-index 0
    left 10px
    right 10px
    box-sizing border-box
    .content
        background-color white
        .showLine
            border-bottom 1px solid #eee
            p:nth-child(1)
                span:nth-child(1)
                    margin-right 10px
            p:nth-child(2)
                span 
                    word-break:break-all

        .showLine:last-child
            border none
</style>