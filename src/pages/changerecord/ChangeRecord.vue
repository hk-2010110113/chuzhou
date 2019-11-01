<template>
    <div class="linebody-list">
      <!-- 线体列表（循环） -->
      <div class="linebody-info" @click="jumpToDetail">
        <div class="linebody-name">CT101</div>
        <div class="change-record">查看变更记录>>></div>
      </div>
      <div class="linebody-info" @click="jumpToDetail">
        <div class="linebody-name">CT101</div>
        <div class="change-record">查看变更记录>>></div>
      </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
  name: "ChangeRecord",
  activated() {
    this.changeTitle(this.$route.meta)
  },
  methods: {
    ...mapMutations({
      changeTitle: "increment"
    }),
    jumpToDetail(){
      //调到展示页面  
      this.$router.push({
        name:'RecordDetail',
        params:{
          id:1
        }
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.linebody-list
  position absolute
  top 42px
  left 0
  right 0
  bottom 43px
  padding 0 10px
  .linebody-info
    display flex
    height 48px
    line-height 48px
    border-bottom 1px solid #ddd
    // margin-bottom 10px
    .linebody-name
      width 40%
    .change-record
      flex 1
      text-align right
</style>