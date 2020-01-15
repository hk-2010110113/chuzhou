<template>
  <!-- <van-row class="capacity">
    <van-col span="12" class="capacity-item">
      <p><span class="label-name">总产能</span><span>12425</span></p>
      <p><span>日均产能</span><span>43.5</span></p>
    </van-col>
    <van-col span="12" class="capacity-item">
      <p><span class="label-name">OK 量</span><span>12346</span></p>
      <p><span>日均产能</span><span>43.5</span></p>
    </van-col>
    <van-col span="12" class="capacity-item">
      <p><span class="label-name">NG 量</span><span>12425</span></p>
      <p><span>日均产能</span><span>43.5</span></p>
    </van-col>
    <van-col span="12" class="capacity-item">
      <p><span class="label-name">平均良率</span><span>12346</span></p>
      <p><span>日均产能</span><span>43.5</span></p>
    </van-col>
  </van-row> -->

  <div class="capacity">
    <div span="12" class="capacity-item">
      <p><span class="label-name">总产能</span><span>{{obj.TotalNum}}</span></p>
      <p><span>日均产能</span><span>{{obj.AvgTotal}}</span></p>
    </div>
    <div span="12" class="capacity-item">
      <p><span class="label-name">总OK量</span><span>{{obj.OK}}</span></p>
      <p><span>日均OK量</span><span>{{obj.AvgOK}}</span></p>
    </div>
    <div span="12" class="capacity-item">
      <p><span class="label-name">总NG量</span><span>{{obj.NG}}</span></p>
      <p><span>日均NG量</span><span>{{obj.AvgNG}}</span></p>
    </div>
    <div span="12" class="capacity-item">
      <p><span class="label-name">良率</span><span>{{obj.OKRate}}</span></p>
      <!-- <p><span>日均产能</span><span>43.5</span></p> -->
    </div>
  </div>
</template>
<script>
export default {
    name:'Capacity',
    props:['arr'],
    computed:{
      obj(){
        return this.arr[0]
      }
    }
}
</script>
<style lang="stylus" scoped>
.capacity
    margin-top 10px
    display flex
    flex-wrap wrap
    padding 0 10px
    >.capacity-item:nth-child(even)
        margin-left 2%    
    .capacity-item:nth-child(1)
        background-color:#20448A
    .capacity-item:nth-child(2)
        background-color:#3C9052
    .capacity-item:nth-child(3)
        background-color:#C9A775
    .capacity-item:nth-child(4)
        background-color:#626262
    .capacity-item
        margin-bottom 10px
        width 49%
        padding 5px 10px 
        box-sizing border-box  
        color rgba(255,255,255,0.5)    
        p
            height 24px
            line-height 24px
            display flex
            span:nth-child(1) 
                width 5em
            span:nth-child(2) 
                flex 1
                text-align right    
        p:nth-child(1)
            span:nth-child(2)
                color rgb(255,255,255)
</style>