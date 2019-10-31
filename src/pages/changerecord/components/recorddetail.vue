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
    },
    methods:{
        ...mapMutations({
            changeTitle: "increment"
        }),
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
    background #fff
</style>