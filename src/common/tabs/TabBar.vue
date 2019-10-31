<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'TabBar',
}
</script>
<style lang="stylus" scoped>
#tab-bar
    display flex 
    position absolute
    bottom 0
    left 0
    right 0
    height 42px
    border-top 1px solid #ddd
    background-color #eee
</style>