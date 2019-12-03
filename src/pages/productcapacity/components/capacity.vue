<template>
  <van-row class="capacity">
    <van-col span="12" class="capacity-item">
      <span class="label-name">总产能</span>
      <span>12425</span>
    </van-col>
    <van-col span="12" class="capacity-item">
      <span class="label-name">OK 量</span>
      <span>12346</span>
    </van-col>
    <van-col span="12" class="capacity-item">
      <span class="label-name">NG 量</span>
      <span>12425</span>
    </van-col>
    <van-col span="12" class="capacity-item">
      <span class="label-name">平均良率</span>
      <span>12346</span>
    </van-col>
  </van-row>
</template>
<script>
export default {
    name:'Capacity'
}
</script>
<style lang="stylus" scoped>
.capacity
    margin-top 10px
    .capacity-item
        height 42px
        line-height 42px
        .label-name
            display inline-block
            width 64px
</style>