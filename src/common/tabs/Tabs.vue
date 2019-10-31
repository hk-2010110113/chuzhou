<template>
    <ul class="container">
        <li
        class="list-item"
        v-for="(list,index) in lists" 
        :key="index"
        @click="handleClick(index)"
        >
        {{list}}
        </li>
    </ul>
</template>
<script>
const jumpTo = (index)=>{
    var curpath = ''
    switch(index){
        case 0:
            curpath = '/'
            break;
        case 1:
            curpath = '/version'
            break;
        case 2:
            curpath = '/changerecord'
            break;
        case 3:
            curpath = '/alert'
            break;
        default:
            break;            
    }
    return curpath
}
export default {
    name:'Tabs',
    props:{
        lists:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        handleClick(index){
            this.$router.push(jumpTo(index))
        }
    },
    
}
</script>
<style lang="stylus" scoped>
.container
    display flex 
    position absolute
    bottom 0
    left 0
    right 0
    height 42px
    border-top 1px solid #ddd
    background-color #eee
    .list-item
        flex 1
        line-height 42px
        text-align center
</style>