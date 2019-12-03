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
          data: ["OK量", "NG量","良率"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            name:"产能",
            max: 1000,
            interval: 100,
            axisLabel: {
              formatter: "{value}"
            }
          },
          {
            type: "value",
            name: "良率",
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
              formatter: "{value} %"
            }
          }
        ],
        label: {
          show: true, //开启显示
          position: "inside", //在上方显示
          textStyle: {
            color: "white",
            fontSize: 16
          }
        },
        series: [
          {
            name: "OK量",
            type: "bar",
            stack: "总量",
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [232, 646, 878, 554, 545, 344, 213, 653, 543, 234, 453, 674] ///serieszs 柱状图图数据（数组）
          },
          {
            name: "NG量",
            type: "bar",
            stack: "总量",
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [23, 64, 87, 55, 54, 34, 21, 65, 53, 24, 43, 64] ///serieszs 柱状图图数据（数组）
          },
          {
            name: "良率",
            type: "line",
            yAxisIndex: 1,
            //barWidth: 30, //柱图宽度
            /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
            data: [75, 39, 66, 83, 97, 91, 94, 99, 78, 84, 68, 42] ////seriesyx 柱状图图数据（数组）
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
#bar {
  height: 300px;
  width: 100%;
  margin-top: 20px;
}
</style>