<template>
  <div class="alert-container">
    <van-tabs v-model="activeName" animated>
      <van-tab title="Defect报警" name="Defect报警">
          <continue-alert :defectAlarm='defectAlarm'></continue-alert>
      </van-tab>
      <van-tab title="Viewer状态" name="Viewer状态">
          <connect-status :viewerStatus='viewerStatus'></connect-status>
      </van-tab>
      <van-tab title="EQ报警" name="EQ报警">
        <frequency-alert :EQAlarms='EQAlarms'></frequency-alert>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import ConnectStatus from './components/ConnectStatus'
import ContinueAlert from './components/ContinueAlert'
import FrequencyAlert from './components/FrequencyAlert'
import Server from "@/http/request";
export default {
  name:'Alarm',
  data(){
    return {
      activeName: 'Defect报警',
      defectAlarm:[],
      viewerStatus:[],
      EQAlarms:[]
    }
  },
  mounted(){
      Server.GetLineAlarmData().then(data=>{
        this.defectAlarm = data.results
      })
      Server.GetViewerState().then(data=>{
        this.viewerStatus = data.results
      })
      Server.GetGetAlarmEQInfo().then(data=>{
        let arr = data.results;
        if(arr.length == 0){
          this.EQAlarms = []
          return
        }
        let targetArr = [];
        let obj ={};
        for(let i=0;i<arr.length;i++){
          let firstCircleID = arr[i].LineID
          if(obj[firstCircleID]){
            obj[firstCircleID]++
          }else{
            obj[firstCircleID] = 1 
            let len = targetArr.length 
            targetArr[len] ={
              LineName:arr[i].LineName,
              LineID:firstCircleID,
              Alarms:[arr[i].Alarm]
            }
            for(let j=i+1;j<arr.length;j++){
              if(firstCircleID === arr[j].LineID){
                targetArr[len].Alarms.push(arr[j].Alarm)
              }
            }
          }       
        }
        this.EQAlarms = targetArr
      })
  },  
  components:{
    ConnectStatus,
    ContinueAlert,
    FrequencyAlert
  }
};
</script>
<style lang="stylus" scoped>
.alert-container
  position absolute
  top 42px
  bottom 43px
  left 0
  right 0
  padding 0 10px
</style>