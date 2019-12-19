<template>
    <div>
        <h4 class="item-title">{{currentSoft}}</h4>
        <!-- 循环 -->
        <div class="des-container">
            <div class="date-box">
                <div class="date-text">变更日期：</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">变更版本：</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">所属电脑：</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">IP地址：</div>
                <div class="date-date"></div>
            </div>
             <div class="date-box">
                <div class="date-text">版本说明：</div>
                <div class="date-date">
                    <div class="version-description">放假房间哦发了积分家乐福及飞浪费脚手架哦</div>
                    <div class="version-description">放假房间哦积分家乐福及飞</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'SoftwareDetail',
    props:['currentSoft']
}
</script>
<style lang="stylus" scoped>
.des-container
    padding 5px 0
    border-bottom 1px solid #ddd
    .date-box
        display flex 
        .date-text
            width 25%
            text-align right
            line-height 26px
        .date-date
            flex 1
            padding-left 10px
            .version-description
                line-height 26px
                

</style>