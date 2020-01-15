<template>
    <div class="wrapper-detail">
        <div class="content">
            <template v-for="(items,value) in softwareObj">
                <h4 class="item-title" :key="value">{{value}}</h4>
                <!-- 循环 -->
                <div class="des-container" v-for="item in items" :key="item.CreateTime">
                    <div class="date-box">
                        <div class="date-text">变更日期：</div>
                        <div class="date-date">{{item.CreateTime}}</div>
                    </div>
                    <div class="date-box">
                        <div class="date-text">变更版本：</div>
                        <div class="date-date">{{item.VersionNum}}</div>
                    </div>
                    <div class="date-box">
                        <div class="date-text">所属电脑：</div>
                        <div class="date-date">{{item.PcName}}</div>
                    </div>
                    <div class="date-box">
                        <div class="date-text">IP地址：</div>
                        <div class="date-date">{{item.IpAddress}}</div>
                    </div>
                    <div class="date-box">
                        <div class="date-text">版本说明：</div>
                        <div class="date-date">
                            <div class="version-description">{{item.VersionNote}}</div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
import global from '@/assets/js/global'
export default {
    name:'SoftwareDetail',
    props:['currentSoft','softwareObj'],
    updated(){
        this.bs == null? global.Bsscrolls(this,'wrapper-detail'):global.refreshBs(this)
    }
}
</script>
<style lang="stylus" scoped>
.wrapper-detail
    height calc(100vh - 86px)
    .des-container
        padding 5px 0
        border-bottom 1px solid #ddd
        .date-box
            display flex 
            .date-text
                width 5em
                text-align right
                line-height 26px
            .date-date
                flex 1
                padding-left 10px
                .version-description
                    line-height 26px
                

</style>