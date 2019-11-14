<template>
  <div class="content-container wrapper">
    <div class="content">
      <!-- <div class="linebody-list"> -->
        <!-- 线体列表（循环） -->
        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT101</div>
          <div class="change-record">查看变更记录>>></div>
        </div>
        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT102</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT103</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT104</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT105</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT106</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT107</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT108</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT109</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT110</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT111</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT112</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT113</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT114</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT115</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT116</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT117</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT118</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT119</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT120</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT121</div>
          <div class="change-record">查看变更记录>>></div>
        </div>

        <div class="linebody-info" @click="jumpToDetail">
          <div class="linebody-name">CT122</div>
          <div class="change-record">查看变更记录>>></div>
        </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
export default {
  name: "ChangeRecord",
  data() {
    return {
      bs: null
    };
  },
  mounted() {
    this.bs = new BScroll(".wrapper", {
      click: true,
      taps: true
    })
  },
  methods: {
    jumpToDetail() {
      //调到展示页面
      this.$router.push({
        name: "RecordDetail",
        params: {
          id: 1
        }
      });
    }
  },
  activated() {
    console.log(1);
  }
};
</script>
<style lang="stylus" scoped>
.content-container {
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  bottom: 43px;
  padding: 0 10px;

  .linebody-info {
    display: flex;
    height: 48px;
    line-height: 48px;
    border-bottom: 1px solid #ddd;

    // margin-bottom 10px
    .linebody-name {
      width: 40%;
    }

    .change-record {
      flex: 1;
      text-align: right;
    }
  }
}
</style>