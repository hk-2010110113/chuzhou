<template>
  <div class="select-box">
    <span>请选择线体</span>
    <van-dropdown-menu class="select">
      <van-dropdown-item @change="selectedLine" 
      get-container='#app' class="bgcolor" v-model="defaultValue" :options="option" />
    </van-dropdown-menu>
  </div>
</template>
<script>
export default {
  name: "ShiftLine",
  props:['allLineList'],
  data() {
    return {
      show: false,
      defaultValue: '全部线体='
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    selectedLine(value){
      this.$emit('sendCurrentLine',value)
    }
  },
  computed:{
    option(){
      let arr = [{
        text:'全部线体',
        value:'全部线体='
      }]
      for(let i =0;i<this.allLineList.length;i++){
        arr.push({
          text:this.allLineList[i].LineName,
          value:this.allLineList[i].LineName+'='+this.allLineList[i].LineID
        })
      }
      return arr
    }
  }
};
</script>
<style lang="stylus" scoped>
    .select-box
        margin-bottom 15px
        background-color #e2e2e2
        padding 10px 5px
        >span
            float left
            line-height 32px
            margin-right 15px
            font-size 20px
            font-weight bolder
        .select
            width 50%;
            padding 0 2% 
            max-width 50%
            height 32px
            line-height 32px
            box-sizing border-box
            border-radius 999px
            border 1px solid #eee
            >>.van-popup
                >>.van-cell
                    background-color #eee
    
</style>