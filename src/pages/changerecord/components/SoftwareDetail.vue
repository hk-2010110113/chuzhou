<template>
    <div>
        <h4 class="item-title">EDC</h4>
        <!-- 循环 -->
        <div class="des-container">
            <div class="date-box">
                <div class="date-text">日期</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">版本</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">说明</div>
                <div class="date-date">
                    <div class="version-description">放假房间哦发了积分家乐福及飞浪费脚手架哦</div>
                    <div class="version-description">放假房间哦积分家乐福及飞</div>
                    <div class="version-description">放假房间哦发了积分家乐福及飞</div>
                    <div class="version-description">放假房间发了积分家乐福及飞</div>
                </div>
            </div>
        </div>

        <div class="des-container">
            <div class="date-box">
                <div class="date-text">日期</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">版本</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">说明</div>
                <div class="date-date">
                    <div class="version-description">放假房间哦发了积分家乐福及飞浪费脚手架哦</div>
                    <div class="version-description">放假房间哦积分家乐福及飞</div>
                    <div class="version-description">放假房间哦发了积分家乐福及飞</div>
                    <div class="version-description">放假房间发了积分家乐福及飞</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SoftwareDetail'
}
</script>
<style lang="stylus" scoped>
.des-container
    padding 5px 0
    border-bottom 1px solid #ddd
    .date-box
        display flex 
        margin: 10px 0
        .date-text
            width 25%
            text-align center
        .date-date
            flex 1
            .version-description
                line-height 26px
                

</style>