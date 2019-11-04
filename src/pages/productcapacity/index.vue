<template>
  <div class="content-container wrapper">
      <div class="content">
            <!-- 选择时间 -->
            <div>
                <timer></timer>
            </div>
            <!-- 显示产能 -->
            <div>
                <capacity></capacity>
            </div>
            <!-- 柱状图 -->
            <div>
                <bar></bar>
            </div>
            <!-- 线别产能列表 -->
            <div>
                <line-capacity></line-capacity>
            </div>
      </div>   
  </div>
</template>
<script>
import timer from './components/timer'
import capacity from './components/capacity'
import bar from './components/bar'
import LineCapacity from './components/linecapacity'
import BScroll from '@better-scroll/core'

export default {
  data() {
    return {
        bs:null
    }
  },
  components:{
      timer,
      capacity,
      bar,
      LineCapacity
  },
  mounted(){
      this.bs = new BScroll(".wrapper",{
          click:true,
          taps: true
      })
  },
  activated() {
  },
  methods: {
    // confirmTime(){
    //     this.show = false
    //     this.selectedEnterTime =
    //     this.startTime.getFullYear() +
    //     "-" +
    //     (Number(this.startTime.getMonth()) + 1) +
    //     "-" +
    //     this.startTime.getDate()
    // },
    // cancelTime(){
    //     this.show = false
    // },
    // showPopup() {
    //   this.show = true;
    // },
  }
};
</script>
<style lang="stylus" scoped>
.content-container
  position absolute
  top 42px
  bottom 43px
  left 0
  right 0
  padding 0 10px
  .content
    padding-top 10px

</style>