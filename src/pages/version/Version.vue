<template>
  <div>版本</div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
  activated() {
    this.changeTitle(this.$route.meta);
  },
  methods: {
    ...mapMutations({
      changeTitle: "increment"
    })
  }
};
</script>
<style lang="stylus" scoped></style>