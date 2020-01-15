<template>
  <div class="content-container wrapper">
    <div class="content">
      <!-- 选择时间 -->
      <div>
        <timer @changeTime="changeTime"></timer>
      </div>
      <!-- 显示产能 -->
      <div>
        <capacity :arr='capacityData'></capacity>
      </div>
      <!-- 柱状图 -->
      <div>
        <bar :barData='lineCapacityList'></bar>
      </div>
      <!-- 使用标签页 -->
      <van-tabs v-model="activeName" @change="selectedTab" animated>
        <van-tab title="线别产能" name="线别产能">
          <line-capacity :lists='lineCapacityList'></line-capacity>
        </van-tab>
        <van-tab title="缺陷分析" name="缺陷分析">
          <defect-list :defectAnalysis='defectAnalysis' :defectRankList ='defectRankList'></defect-list>
        </van-tab>
        <van-tab title="线别缺陷" name="线别缺陷">
          <shift-line @sendCurrentLine="getCurrentLine" :allLineList='allLineList'></shift-line>
          <defect-top :currentLineName="currentLineName" :defectListTop='defectListTop'></defect-top>
        </van-tab>
      </van-tabs>

      <!-- 产能列表 -->
      <!-- <div>
                <line-capacity></line-capacity>
      </div>-->
      <!-- 缺陷信息 -->
      <!-- <div>
                <defect-list></defect-list>
      </div>-->
      <!-- 切换线体     -->
      <!-- <div>
                <shift-line @sendCurrentLine='getCurrentLine'></shift-line>
      </div>-->
      <!-- 线体缺陷复现率Top 10 -->
      <!-- <div>
                <defect-top :currentLine ='defaultLine'></defect-top>
      </div>-->
    </div>
  </div>
</template>
<script>
import timer from "./components/timer";
import capacity from "./components/capacity";
import bar from "./components/bar";
import LineCapacity from "./components/LineCapacity";
import DefectList from "./components/DefectList";
import DefectTop from "./components/DefectTop";
import ShiftLine from "./components/ShiftLine";
import BScroll from "@better-scroll/core";
import Server from "@/http/request";
import global from "@/assets/js/global.js";
export default {
  data() {
    return {
      bs: null,
      activeName: "线别产能",
      startTime: global.formateTime(-7),
      endTime: global.formateTime(0),
      capacityData:[{}],
      lineCapacityList:[{}],
      allLineList:[{}],
      currentLineId:'',
      defectListTop:[{}],
      currentLineName:'全部线体',
      defectAnalysis:[{}],
      defectRankList:[]
    };
  },
  components: {
    timer,
    capacity,
    bar,
    LineCapacity,
    DefectList,
    DefectTop,
    ShiftLine
  },
  mounted() {
    this.changeTime(this.startTime, this.endTime,this.currentLineId)
     // 获得所有线体
    Server.GetLineList().then(data =>{
      this.allLineList = data.results
    })
  },
  activated() {
    //this.bs.scrollTo(0, this.$route.meta.y, 500); // 回到顶部
  },
  methods: {
    initBscroll() {
      this.$nextTick(() => {
        this.bs = new BScroll(".wrapper", {
          click: true,
          taps: true
        });
      });
    },
    selectedTab() {
      this.$nextTick(() => {
        this.bs.refresh();
      });
    },
    changeTime(currentStartTime, currentEndTime) {      
      this.startTime = currentStartTime 
      this.endTime = currentEndTime

      // 获得产能统计等数据
      Server.getTotalNum({
        startTime: this.startTime+' 00:00:00',
        endTime:  this.endTime +' 00:00:00'
      }).then(data => {
        this.initBscroll();
        this.capacityData = data.results
      });

      // 获得线别产能列表数据
      Server.GetLineProductionList({
        startTime: this.startTime+' 00:00:00',
        endTime: this.endTime+' 00:00:00'
      }).then(data => {
        this.lineCapacityList = data.results
      });
      // 获得缺陷分析统计数据
      Server.GetDefectNum({
        startTime: this.startTime+' 00:00:00',
        endTime: this.endTime+' 00:00:00'
      }).then(data=>{
        this.defectAnalysis = data.results
      })
      //
      Server.GetDefectNumTopList({
        startTime: this.startTime+' 00:00:00',
        endTime: this.endTime+' 00:00:00'
      }).then(data=>{
        this.defectRankList = data.results
      })
      //获得缺陷列表top10
      this.getDefectList(this.startTime,this.endTime,this.currentLineId)
    },
    //获得缺陷列表top10
    getDefectList(currentStartTime,currentEndTime,lineID){
       Server.GetDefectTopList({
        startTime: currentStartTime+' 00:00:00',
        endTime: currentEndTime+' 00:00:00',
        lineID:lineID,
        topNum:10
      }).then(data=>{
        this.defectListTop = data.results;
      })
    },
    getCurrentLine(value) {
      let arr = value.split('=')
      this.currentLineId = arr[1]
      this.currentLineName = arr[0]
      this.getDefectList(this.startTime, this.endTime,this.currentLineId)
    }
  }
};
</script>
<style lang="stylus" scoped>
.content-container {
  position: absolute;
  top: 42px;
  bottom: 43px;
  left: 0;
  right: 0;
  padding: 0 10px;

  .content {
    padding-top: 10px;
  }
}
</style>