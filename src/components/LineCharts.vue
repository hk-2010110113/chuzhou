<template>
  <div id="line-charts"></div>
</template>
<script>
export default {
  name: "LineCharts",
  data() {
    return {
      options: {
        title: {
          text: "线别产能趋势图"
        },
        tooltip: {
          trigger: "axis"
        },
        //legend表示每条线的表示
        legend: {
          data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            smooth: true,
            symbol: "circle",
            stack: "总量",
            data: []
          },
          {
            name: "联盟广告",
            type: "line",
            smooth: true,
            symbol: "triangle",
            stack: "总量",
            data: []
          },
          {
            name: "视频广告",
            type: "line",
            smooth: true,
            symbol: "pin",
            stack: "总量",
            data: []
          },
          {
            name: "直接访问",
            type: "line",
            smooth: true,
            symbol: "diamond",
            stack: "总量",
            data: []
          },
          {
            name: "搜索引擎",
            type: "line",
            smooth: true,
            symbol: "roundRect",
            stack: "总量",
            data: []
          }
        ]
      },
      //下面是需要请求的数据
      xAxisData: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      seriesData: [
        [120, 132, 101, 134, 90, 230, 210],
        [220, 182, 191, 234, 290, 330, 310],
        [150, 232, 201, 154, 190, 330, 410],
        [320, 332, 301, 334, 390, 330, 320],
        [820, 932, 901, 934, 1290, 1330, 1320]
      ],
      myCharts: null
    };
  },
  mounted() {
    this.initLineCharts()
  },
  methods: {
    //初始化表格
    initLineCharts() {
      this.myCharts = this.$echarts.init(
        document.getElementById("line-charts")
      );
      this.myCharts.setOption(this.options)
      this.showLineCharts()
    },
    //绘制表格
    showLineCharts() {
      var that = this;
      //   this.options.series.forEach((item, index) => {
      //     item.data = this.seriesData[index]
      //   })
      this.myCharts.setOption({
        xAxis: {
          data: that.xAxisData
        },
        series: this.hk
        //   [{
        //       name: "邮件营销",
        //       data:that.seriesData[0]
        //   },
        //   {
        //       name: "联盟广告",
        //       data:that.seriesData[1]
        //   },
        //   {
        //       name: "视频广告",
        //       data:that.seriesData[2]
        //   },
        //   {
        //       name: "直接访问",
        //       data:that.seriesData[3]
        //   },
        //   {
        //       name: "搜索引擎",
        //       data:that.seriesData[4]
        //   }]
      })
    }
  },
  computed: {
    hk() {
      //返回一个数组
      var arr = []
      this.seriesData.forEach((item,index) => {
          arr.push({
              data:item
          })
      })
      return arr
    }
  }
};
</script>
<style lang="stylus" scoped>
#line-charts
    width 100%
    height 300px
</style>