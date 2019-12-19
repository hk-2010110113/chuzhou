<template>
  <div>
    <h4 class="item-title">缺陷信息</h4>
    <h5><span></span>全部缺陷分析</h5>
    <div class="catagory">
        <div><p>1234<span>种/线别</span></p><p>平均缺陷种类</p></div>
        <div><p>17865<span>个/线别</span></p><p>平均缺陷数</p></div>
    </div>
    <!-- 饼状图 -->
    <!-- <div class="defect-bar"></div> -->

    <!-- 缺陷最多线体 -->
    <h5><span></span>缺陷最多线体</h5>
    <item-comp v-for="(list,index) in lists" :key="index">
      <template v-slot:text>
        <p class="vertical-center">{{list.lineName}}</p>
      </template>
      <template v-slot:detail>
        <p>
          <span>缺陷种类:</span>
          <span>{{list.disc.count}}</span>
        </p>
        <p>
          <span>缺陷总数:</span>
          <span>{{list.disc.category}}</span>
        </p>
      </template>
    </item-comp>

    <!-- 缺陷最少线体 -->
    <h5><span></span>缺陷最少线体</h5>
    <item-comp v-for="(list) in lists" :key="list.name">
      <template v-slot:text>
        <p class="vertical-center">{{list.lineName}}</p>
      </template>
      <template v-slot:detail>
        <p>
          <span>缺陷种类:</span>
          <span>{{list.disc.count}}</span>
        </p>
        <p>
          <span>缺陷总数:</span>
          <span>{{list.disc.category}}</span>
        </p>
      </template>
    </item-comp>
  </div>
</template>
<script>
import ItemComp from "@/common/reusecomp/ItemComp";
export default {
  name: "DefectList",
  components: {
    ItemComp
  },
  data() {
    return {
      lists: [
        {
          lineName: "line1",
          disc: {
            count: 10,
            category: 45
          }
        },
        {
          lineName: "line2",
          disc: {
            count: 11,
            category: 41
          }
        }
      ],
      // options: {
      //   series: [
      //     {
      //       name: "项目进度数据分析",
      //       type: "pie",
      //       radius: "70%",
      //       center: ["50%", "50%"],
      //       label: {
      //         normal: {
      //           show: true,
      //           formatter: "{b}:\n({d}%)" //自定义显示格式(b:name, c:value, d:百分比)
      //         }
      //       },
      //       data: [
      //         { value: 335, name: "直接访问" },
      //         { value: 310, name: "邮件营销" },
      //         { value: 234, name: "联盟广告" },
      //         { value: 135, name: "视频广告" },
      //         { value: 135, name: "视频广告1" },
      //         { value: 135, name: "视频广告2" },
      //         { value: 158, name: "搜索引擎" },
      //         { value: 158, name: "搜索引擎1" },
      //         { value: 188, name: "搜索引擎2" },
      //         { value: 198, name: "搜索引擎3" }
      //       ]
      //     }
      //   ]
      // }
    };
  },
  mounted() {
    // this.showPictrue();
  },
  methods: {
    // showPictrue() {
    //   var myChart = this.$echarts.init(
    //     document.getElementsByClassName("defect-bar")[0]
    //   );
    //   myChart.setOption(this.options);
    // }
  }
};
</script>
<style lang="stylus" scoped>
.defect-bar 
  height 240px
  width 100%
  margin-top 20px

h5
    font-size 15px
.catagory
    display flex
    text-align center
    div:nth-child(1)
      p:nth-child(1)
        color #68b75c
        font-size 20px
    div:nth-child(2)
      p:nth-child(1)
        color #4a89dc
        font-size 20px
    div
        flex 1
        span 
          font-size 14px
          margin-left 8px
          color #2c3e50

</style>