<template>
    <div class="detail-content wrapper">
        <div class="content">
            <!-- 选择部分 -->
            <div class="select-soft">
                <select-software @selectedSoft = 'getSelectedSoftWare' :currentSoft='currentSoft' :softwareArr='softwareArr'></select-software>
            </div>
            <!-- 软件说明部分 -->
            <div>
                <software-detail :currentSoft='currentSoft' :softwareObj='softwareObj'></software-detail>
            </div>
        </div>
    </div>
</template> 
<script>
import SelectSoftware from './SelectSoftware'
import SoftwareDetail from './SoftwareDetail'
import Server from '@/http/request'
export default {
    name:'RecordDetail',
    data() {
        return {
            currentSoft:'ALL', 
            softwareAllObj:{},
            softwareArr:[]          
        }
    },
    components:{
        SelectSoftware,
        SoftwareDetail
    },
    activated(){
        this.getInfo(this.$route.params.id)
    },
    computed:{
        softwareObj(){
            let obj = {}
            if(this.currentSoft == 'ALL'){
                return this.softwareAllObj
            }else{
                for(let i in this.softwareAllObj){
                    if(i == this.currentSoft){
                        obj[i]=this.softwareAllObj[i]
                        return obj
                    }
                }
            }
        }
    },
    beforeRouteLeave (to, from, next){
        this.currentSoft = 'ALL'
        next()
    },
    methods:{
        getSelectedSoftWare(e){
            this.currentSoft = e
        },
        getInfo(lineID){
            Server.GetVersionChangeRecord({
                lineID:lineID,
                pcid:'',
                sofeWareID:'',
                startTime:'',
                endTime:''
            }).then(data =>{
                // 按照软件分类如cpc,ppc,ipc,edc等
                let results = data.results
                let obj = {}
                let dataobj = {}
                let arr = []
                for(let i =0;i<results.length;i++){
                    let firstSoftwareName = results[i].SoftwareName
                    if(obj[firstSoftwareName]){
                        obj[firstSoftwareName]++
                    }else{                       
                        obj[firstSoftwareName]=1
                        arr.push(firstSoftwareName)
                        dataobj[firstSoftwareName] =[results[i]]
                        for(let j=i+1;j<results.length;j++){
                            if(firstSoftwareName == results[j].SoftwareName){
                                dataobj[firstSoftwareName].push(results[j])
                            }
                        }
                    }
                }
                this.softwareAllObj = dataobj
                this.softwareArr = arr
            })
        }
    },
}
</script>
<style lang="stylus" scoped>
.detail-content
    position absolute
    top 42px
    left 0
    right 0
    bottom 0
    padding 0 10px
    .content
        box-sizing border-box
        padding-top 10px
        .select-soft
            position relative
            z-index 1
            background-color white
</style>