<template>
  <div class="content-container wrapper">
    <div class="content">
      <!-- <div class="linebody-list"> -->
        <!-- 线体列表（循环） -->
        <div v-for="item in allLineList" :key="item.LineID" class="linebody-info" @click="jumpToDetail(item.LineID)">
          <div class="linebody-name">{{item.LineName}}</div>
          <div class="change-record">查看变更记录>>></div>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import Server from '@/http/request'
import global from '@/assets/js/global'
export default {
  name: "ChangeRecord",
  data() {
    return {
      bs: null,
      allLineList:[],
      name:'huangkun'
    };
  },
  mounted() {
    Server.GetLineList().then(data =>{
      this.allLineList = data.results
    })
  },
  methods: {
    jumpToDetail(lineID) {
      //调到展示页面
      this.$router.push({
        name: "RecordDetail",      
        params: {
          id: lineID
        }
      })
    }
  },
  updated(){
    this.bs == null? global.Bsscrolls(this,'wrapper'):global.refreshBs(this)
  }
};
</script>
<style lang="stylus" scoped>
.content-container {
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  bottom: 43px;
  padding: 0 10px;

  .linebody-info {
    display: flex;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #ddd;

    // margin-bottom 10px
    .linebody-name {
      width: 40%;
    }

    .change-record {
      flex: 1;
      text-align: right;
    }
  }
}
</style>