<template>
    <div class="time-component">
        <div class="start-time" is-link @click="showPopup">{{selectedEnterTime}}</div>
        <van-popup 
            v-model="show"
            position="top"
            :overlay="true"
        >
            <!-- 日期组件 -->
            <van-datetime-picker 
                v-model="startTime" type="date" 
                :min-date="minDate" @confirm="confirmTime"
                @cancel='cancelTime' cancel-button-text=''
            />
        </van-popup>
    </div>
</template>
<script>
export default {
  name:'Timer',
  data() {
    return {
      startTime: new Date(),
      minDate: new Date(2010,0,1),
      show: false,
      selectedEnterTime:''
    }
  },
  methods: {
    confirmTime(){
        this.show = false
        this.selectedEnterTime =
        this.startTime.getFullYear() +
        "-" +
        (Number(this.startTime.getMonth()) + 1) +
        "-" +
        this.startTime.getDate()
    },
    cancelTime(){
        this.show = false
    },
    showPopup() {
      console.log('1')
      this.show = true;
    },
  }
};
</script>
<style lang="stylus" scoped>
.time-component >>> .van-popup--top
    top 100px
.time-component
    .start-time
        width 140px
        height 32px
        line-height 32px
        border-radius 10px
        text-align center
        border 1px solid #eee 
    .time-select
        position absolute
        top 50px
</style>
