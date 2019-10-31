<template>
  <div id="bar"></div>
</template>
<script>
export default {
  name: "Bar",
  data() {
    return {
      options: {
        title: {
          text: "线别产能"
        },
        legend: {
          data: ["做市", "协议"]
        },
        xAxis: [
          {
            type: "category",
            data: ["1", "2", "3", "4", "5","6","7","8","9","10"], ///xaxisdata x轴：标签（数组）
            axisLabel: {
              textStyle: {
                color: "#222"
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        label: {
          show: true,         //开启显示
          position: "inside", //在上方显示
          textStyle: {
            //数值样式
            color: "white",
            fontSize: 16
          }
        },
        series: [
          {
            name: "做市",
            type: "bar",
            stack: "总量",
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [232, 646, 878, 554, 545,344,213,653,543,234] ///serieszs 柱状图图数据（数组）
          },
          {
            name: "协议",
            type: "bar",
            stack: "总量",
            //barWidth: 30, //柱图宽度
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [354, 125, 456, 743, 234,294,344,545,436,346] ////seriesyx 柱状图图数据（数组）
          }
        ]
      }
    };
  },
  mounted() {
    this.showChart();
  },
  methods: {
    showChart() {
      var myChart = this.$echarts.init(document.getElementById("bar"));
      myChart.setOption(this.options);
    }
  }
};
</script>
<style lang="stylus" scoped>
#bar
  height 300px
  width 100%
  margin-top 20px
</style>