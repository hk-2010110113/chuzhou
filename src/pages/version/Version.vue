<template>
    <div class="content-container wrap">
      <div class="contents">
        <!-- 下拉选择框 -->
        <div class="select-container">
          <choose :softwareAndVersion='softwareAndVersion' @changeSoftware='getlinedefectInfo'></choose>
        </div>
        <!-- 线体上软体的数据 -->
        <div>
          <software-detail :linedefectInfo='linedefectInfo'></software-detail>
        </div>
      </div>
    </div>
</template>
<script>
import choose from './components/Choose'
import SoftwareDetail from './components/SoftwareDetail'
import Server from '@/http/request'
export default {
  name:'Version',
  mounted(){
    this.getSoftwareAndVersion()
  },
  data(){
    return{
      softwareAndVersion:[],
      linedefectInfo:[]
    }
  },
  components:{
    choose,
    SoftwareDetail
  },
  methods:{
    getSoftwareAndVersion(){
      Server.GetSoftWareListWithTrueVersion().then(data=>{
        this.softwareAndVersion = data.results
        //初始化时请求使用第一个软件的线体信息
        this.getlinedefectInfo(this.softwareAndVersion[0].SOFTWAREID)
      })
    },
    getlinedefectInfo(id){
      Server.GetLinePcSoftwareList({
        softwareID:id
      }).then(data=>{
        this.linedefectInfo = data.results
      })
    }
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
  .contents
    box-sizing border-box
    .select-container
      padding-top 10px
      z-index 1
      position relative
      background white
</style>