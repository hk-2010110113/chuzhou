<template>
  <div class="alert-container wrapper">   
    <div class="content">
      <!-- Viewer连接状态 -->
       <div>
         <connect-status></connect-status>
       </div>
       <!-- Defect连续报警 -->
       <div>
         <continue-alert></continue-alert>
       </div>
       <!-- EQ频发报警 -->
       <div>
         <frequency-alert></frequency-alert>
       </div>
    </div>
  </div>
</template>
<script>
import ConnectStatus from './components/ConnectStatus'
import ContinueAlert from './components/ContinueAlert'
import FrequencyAlert from './components/FrequencyAlert'
import BScroll from '@better-scroll/core'
export default {
  name:'Alarm',
  mounted(){
     this.bs = new BScroll(".wrapper",{
          click:true,
          taps: true
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
  .content
    padding-top 10px
</style>