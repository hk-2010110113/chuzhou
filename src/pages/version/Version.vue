<template>
    <div class="content-container wrap">
      <div class="content">
        <!-- 下拉选择框 -->
        <div>
          <choose></choose>
        </div>
        <!-- 线体上软体的数据 -->
        <div>

        </div>
      </div>
    </div>
</template>
<script>
import choose from './components/Choose'
export default {
  name:'Version',
  components:{
    choose
  }
};
</script>
<style lang="stylus" scoped>
.content-container
  position absolute
  top 42px
  bottom 43px
  left 0
  right 0
  padding 0 10px
  .content
    box-sizing border-box
    padding-top 10px
</style>