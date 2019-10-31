<template>
  <div id="app">
    <!-- 下面是页面的头部 -->
    <fixed-head :showicon="showicon" :title="title"></fixed-head>
    <!-- 下面是中间显示区域 -->
    
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <!-- 下面是页面底部的tabs -->
    <bottom-tabs></bottom-tabs>
  </div>
</template>

<script>
// import Bar from './components/bar'
// import Bar1 from './components/bar1'
// import LineCharts from './components/LineCharts'
// import VantT from './components/VantTabs'

import BottomTabs from "./common/tabs/BottomTabs";
import FixedHead from "./common/fixedhead/FixedHead";
export default {
  name: "App",
  components: {
    BottomTabs,
    FixedHead
  },
  data() {
    return {
      showicon: false
    };
  },
  computed: {
    title() {
      return this.$store.state.title;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* .content-container {
  position: absolute;
  top: 42px;
  bottom: 43px;
  left: 0;
  right: 0;
  padding: 0 10px;
} */
</style>
