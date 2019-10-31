<template>
  <div class="container">
    <div class="left-column">
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
    <div class="right-column">
      <van-tabs>
        <van-tab v-for="index in 8" :title="'标签 ' + index" :key="index">内容 {{ index }}</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.container 
  display flex
  .left-column 
    ul
        margin-top 44px
        li
            padding  0 10px
            height 44px
            line-height 44px
  .right-column 
    flex 1
</style>