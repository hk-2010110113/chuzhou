<template>
    <div class="detail-content">
        线体详情页面
    </div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
    name:'RecordDetail',
    activated() {
        this.changeTitle(this.$route.meta);
        this.changeBarStatus()
        this.changeIconStatus()
    },
    methods:{
        ...mapMutations({
            changeTitle: "increment"
        }),
        ...mapMutations(['changeBarStatus']),
        ...mapMutations(['changeIconStatus']),
    },
    beforeRouteLeave (to, from, next){
        this.changeBarStatus()
        this.changeIconStatus()
        next()
    }
}
</script>
<style lang="stylus" scoped>
.detail-content
    position absolute
    top 42px
    left 0
    right 0
    bottom 0
    padding 0 10px
    background pink
</style>