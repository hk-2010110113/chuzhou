<template>
  <div class="time-component">
    <div class="start-time" is-link @click="showPopup">{{selectedStartTime}}</div>
    <div class="left connect-text">至</div>
    <div class="start-time" is-link @click="showPopup1">{{selectedEndTime}}</div>
    <!-- <button class="search-button">查询</button> -->
    <!-- 开始时间的弹框 -->
    <van-popup v-model="show" position="top" :overlay="true">
      <!-- 日期组件 -->
      <van-datetime-picker
        v-model="startTime"
        type="date"
        :max-date="maxDate"
        @confirm="confirmTime"
        @cancel="cancelTime"
      />
    </van-popup>
    <!-- 结束时间的弹框 -->
    <van-popup v-model="show1" position="top" :overlay="true">
      <!-- 日期组件 -->
      <van-datetime-picker
        v-model="endTime"
        type="date"
        :max-date="maxDate"
        @confirm="confirmTime1"
        @cancel="show1 = false"
      />
    </van-popup>
  </div>
</template>
<script>
import global from '@/assets/js/global.js'
export default {
  name: "Timer",
  data() {
    return {
      startTime: new Date(global.formateTime(-7)),  // 默认开始时间,7天前
      endTime: new Date(),                          // 默认结束时间,今天
      maxDate: new Date(),
      show: false,
      show1:false,
      selectedStartTime: global.formateTime(-7),     // 选中的开始时间
      selectedEndTime: global.formateTime(0)         // 选中的结束时间
    }
  },
  methods: {
    confirmTime() {
      this.show = false
      this.selectedStartTime = global.getYearMonthDay(this.startTime)
      this.$emit('changeTime',this.selectedStartTime,this.selectedEndTime)  
    },
    confirmTime1(){
      this.show1 = false
      this.selectedEndTime = global.getYearMonthDay(this.endTime) 
      this.$emit('changeTime',this.selectedStartTime,this.selectedEndTime) 
    },
    cancelTime() {
      this.show = false
    },
    showPopup() {
      //弹出时执行
      this.show = true
      this.startTime = new Date(this.selectedStartTime)
    },
    showPopup1(){
      //弹出时执行
      this.show1 = true
      this.endTime = new Date(this.selectedEndTime)
    }
  }
}
</script>
<style lang="stylus" scoped>
.time-component >>> .van-popup--top 
  top: 100px;
.time-component 
  overflow hidden
  .start-time
    width:calc((100% - 44px) / 2)
    height: 32px;
    line-height: 32px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid #eee;
    float left
  .connect-text
     height: 34px
     width 10%
     line-height 34px
     text-align center
  .search-button
    height 34px
    line-height 34px
    width 18%
    margin-left 4%
    display: inline-block;
    border-radius: 999px;
    box-sizing: border-box;
    border: 1px solid #eee;
    background-color #fff
</style>
