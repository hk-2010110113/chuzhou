<template>
  <div id="bar"></div>
</template>
<script>
export default {
  name: "Bar",
  props:['barData'],
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
            type: 'inside',
            xAxisIndex: 0,
            filterMode: 'empty'
          },
        ],
        legend: {
          data: ["OK量", "NG量", "良率"],
          left: "right"
        },
        xAxis: [
          {
            type: "category",
            // 后端的数据
            data: [],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "产能",
            // min: 0,         //最小值
            // max: 1000,      //最大值
            // interval: 100,  //单位长度
            axisLabel: {
              formatter: "{value}"
            }
          },
          {
            type: "value",
            name: "良率",
            //max: 100,
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
            yAxisIndex: 0,
            // barGap:'50%',
            // 后端的数据
            data: [],
            itemStyle:{
              normal:{
                color:"#68B75C"
              }
            }
          },
          {
            name: "NG量",
            type: "bar",
            stack: "1",    //表示要堆叠显示
            yAxisIndex: 0,
            // barCategoryGap:5,
            // barWidth:10,
            // barMinWidth:20,
            // barGap:10,
            // 后端的数据
            data: [], 
            itemStyle:{
              normal:{
                color:"#F1B55D"
              }
            }
          },
          {
            name: "良率",
            type: "line",
            yAxisIndex: 1,
            // 后端的数据
            data: [] 
          }
        ]
      }
    };
  },
  methods: {
    showChart() {
      var myChart = this.$echarts.init(document.getElementById("bar"));
      myChart.setOption(this.options);
    }
  },
  watch:{
    barData(){
      this.options.xAxis[0].data = []
      this.options.series[0].data = []
      this.options.series[1].data = []
      this.options.series[2].data = []
      for(let i=0;i<this.barData.length;i++){
        let item = this.barData[i]
        this.options.xAxis[0].data.push(item.LineName)
        this.options.series[0].data.push(item.OK)
        this.options.series[1].data.push(item.NG)
        this.options.series[2].data.push(item.OKRate)
      }
      this.showChart();
    }
  },
  computed:{
    // a(){
    //   this.options.xAxis.data = []
    //   this.options.series[0].data = []
    //   this.options.series[1].data = []
    //   this.options.series[2].data = []
    //   for(let i=0;i<this.barData.length;i++){
    //     let item = this.barData[i]
    //     this.options.xAxis.data.push(item.LineName)
    //     this.options.series[0].data.push(item.OK)
    //     this.options.series[1].data.push(item.NG)
    //     this.options.series[2].data.push(item.OKRate)
    //   }
    // }
  }
};
</script>
<style lang="stylus" scoped>
#bar 
  height: 300px
  width: 100%
  margin-top: 20px
</style>