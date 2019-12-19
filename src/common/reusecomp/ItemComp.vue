<template>
    <div class="container">
        <div class="left-container">
            <slot name="text"></slot>   
        </div>
        <div class="right-container">
            <slot name='detail'></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
.container
    display flex 
    padding-bottom 10px
    border-bottom 1px solid #eee
    margin: 10px 0;
    font-size 16px
    .left-container
        width 35%
    .right-container
        flex 1
        line-height 24px
        padding-left 2em
</style>