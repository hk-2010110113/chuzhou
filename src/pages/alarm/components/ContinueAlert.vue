<template>
  <div class="wrapper">
    <div class="content">
      <h4 class="item-title">Defect连续NG报警</h4>
    <!-- 循环组件 -->
      <item-comp v-for="(list) in defectAlarm" :key="list.LineID">
        <template v-slot:text>
          <p class="vertical-center">{{list.LineName}}</p>
        </template>
        <template v-slot:detail>
          <p>
            <span>DefectCode:</span>
            <span>{{list.DefectCode}}</span>
          </p>
          <p>
            <span>连续NG:</span>
            <span>{{list.ContinuousNG==null?'NG':list.ContinuousNG}}</span>
          </p>
          <p>
            <span>累计NG:</span>
            <span>{{list.TotalNG==null?'NG':list.ContinuousNG}}</span>
          </p>
          <p>
            <span>T T(秒):</span>
            <span>{{list.TT}}</span>
          </p>
        </template>
      </item-comp>
    </div>   
  </div>
</template>
<script>
import ItemComp from "@/common/reusecomp/ItemComp";
import global from "@/assets/js/global.js"
export default {
  name: "ContinueAlert",
  props: ["defectAlarm"],
  components: {
    ItemComp
  },
  updated(){
    this.bs == null? global.Bsscrolls(this,'wrapper'):global.refreshBs(this)
  },
  data() {
    return {
      bs:null
    };
  }
};
</script>
<style lang="stylus" scoped>
.wrapper
  height calc(100vh - 129px)
</style>