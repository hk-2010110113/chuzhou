<template>
    <tab-bar>
        <tabbaritem path='/productcapacity'>产能</tabbaritem>
        <tabbaritem path='/version'>版本</tabbaritem>
        <tabbaritem path='/changerecord'>变更</tabbaritem>
        <tabbaritem path='/alarm'>报警</tabbaritem>
        <tabbaritem path='/me'>我的</tabbaritem>
    </tab-bar>
</template>
<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        tabbaritem:TabBarItem
    },
}
</script>
<style lang="stylus" scoped>

</style>