<template>
    <div class="line-container">
        <div class="left-container">
            fdfgg
        </div>
        <div class="right-container">
            <p><span>产能</span><span></span></p>
            <p><span>YO&AO:</span><span></span></p>
            <p><span>GA:</span><span></span></p>
            <p><span>YO&AO Rate:</span><span></span></p>
            <p><span>T.T:</span><span></span></p>
        </div>
    </div>
</template>
<script>
export default {
    props:{

    }
}
</script>
<style lang="stylus" scoped>
.line-container
    font-size 16px
    display flex 
    border-bottom 1px solid #111
    margin-bottom 15px
    .left-container
        width 35%
        background-color pink
    .right-container
        flex 1
        background-color yellow
        p
            margin 8px 0
</style>