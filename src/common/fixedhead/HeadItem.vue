<template>
   <div class="">
       <slot name="back"></slot>
       <slot name="title"></slot>
   </div>
</template>
<script>
export default {
    name:'HeadItem',
    props:{
        title:{
            type:String,
            default(){
                return ""
            }
        }
    },
}
</script>
<style lang="stylus" scoped>

</style>