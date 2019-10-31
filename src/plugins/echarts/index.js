import Vue from 'vue'
//let echarts = require('echarts');
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require("echarts/lib/component/legend");
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
Vue.prototype.$echarts = echarts

