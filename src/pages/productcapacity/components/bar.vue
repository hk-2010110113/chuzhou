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
        tooltip: {
          trigger: "axis"
        },
        dataZoom:[
          {
            type:'slider',
            yAxisIndex:[0,1],
            filterMode: 'empty'
            // startValue:0,
            // endValue:4
          },
          // {
          //   type:'slider',
          //   yAxisIndex:[0,1],
          //   startValue:0,
          //   endValue:4
          // }
        ],
        legend: {
          data: ["OK量", "NG量", "良率"],
          left: "right"
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
              "12月",
              "13月",
              "14月",
              "15月",
              "16月"
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
            name: "产能",
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
            stack: "1",    //表示要堆叠显示
            // yAxisIndex: 0,
            // barWidth:40,
            barGap:'50%',
            data: [
              232,
              646,
              878,
              554,
              545,
              344,
              213,
              653,
              543,
              234,
              453,
              674,
              543,
              234,
              453,
              674
            ]
          },
          {
            name: "NG量",
            type: "bar",
            stack: "1",    //表示要堆叠显示
            yAxisIndex: 0,
            // barWidth:40,
            // barGap:'50%',
            data: [
              23,
              64,
              87,
              55,
              54,
              34,
              21,
              65,
              53,
              24,
              43,
              64,
              55,
              54,
              34,
              21
            ] 
          },
          {
            name: "良率",
            type: "line",
            yAxisIndex: 1,
            data: [
              75,
              39,
              66,
              83,
              97,
              91,
              94,
              99,
              78,
              84,
              68,
              42,
              66,
              83,
              97,
              91
            ] 
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