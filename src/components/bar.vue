<template>
  <div id="containers"></div>
</template>
<script>
export default {
  name: "Bar",
  data() {
    return {
      options: {
        legend: {
           selectedMode:false,
        },
        tooltip: {
          show:true
        },
        dataset: {
          source: [
            // ["product", "2012", "2013", "2014", "2015"],
            // ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
            // ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
            // ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4]

            ["product", "2012", "2013", "2014", "2015"],
            ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
            ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
            ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4]
          ]     
        },
        title:{
          text:'线别产能柱状图'
        },
        xAxis: [
          { type: "category", gridIndex: 0 }
        ],
        yAxis: [{ gridIndex: 0 }],
        //grid: [{ bottom: "55%" }, { top: "55%" }],
        series: [
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" },
          { type: "bar", seriesLayoutBy: "row" }
        ]
      }
    };
  },
  mounted() {
    this.showChart();
  },
  methods: {
    showChart() {
      var myChart = this.$echarts.init(document.getElementById("containers"));
      myChart.setOption(this.options);
    }
  }
};
</script>
<style scoped>
#containers {
  height: 300px;
  width: 100%;
}
</style>