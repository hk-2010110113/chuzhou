<template>
  <div>
    <h4 class="item-title">缺陷信息</h4>
    <div>
             
    </div>
    <h5><span></span>缺陷类型分布</h5>
    <div class="catagory">
        <div><p>1234</p><p>缺陷种类</p></div>
        <div><p>17865</p><p>缺陷总数</p></div>
        <div><p>20.14%</p><p>不良率</p></div>
    </div>
    <!-- 饼状图 -->
    <div class="defect-bar"></div>
     <h5><span></span>缺陷排行Top 10</h5>
    <!-- 循环组件 -->
    <item-comp v-for="(list,index) in lists" :key="index">
      <template v-slot:text>
        <p class="vertical-center">{{list.lineName}}</p>
      </template>
      <template v-slot:detail>
        <p>
          <span>缺陷数量:</span>
          <span>{{list.disc.count}}</span>
        </p>
        <p>
          <span>不良率:</span>
          <span>{{list.disc.badPercent}}</span>
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
          lineName: "缺陷1",
          disc: {
            count: 10,
            badPercent: "3%"
          }
        },
        {
          lineName: "缺陷2",
          disc: {
            count: 11,
            badPercent: "2.5%"
          }
        }
      ],
      options: {
        series: [
          {
            name: "项目进度数据分析",
            type: "pie",
            radius: "70%",
            center: ["50%", "50%"],
            label: {
              normal: {
                show: true,
                formatter: "{b}:\n({d}%)" //自定义显示格式(b:name, c:value, d:百分比)
              }
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 135, name: "视频广告1" },
              { value: 135, name: "视频广告2" },
              { value: 158, name: "搜索引擎" },
              { value: 158, name: "搜索引擎1" },
              { value: 188, name: "搜索引擎2" },
              { value: 198, name: "搜索引擎3" }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    this.showPictrue();
  },
  methods: {
    showPictrue() {
      var myChart = this.$echarts.init(
        document.getElementsByClassName("defect-bar")[0]
      );
      myChart.setOption(this.options);
    }
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
    div
        flex 1
</style>