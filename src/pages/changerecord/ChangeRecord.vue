<template>
  <div>变更</div>
</template>
<script>
import { mapMutations } from "vuex"
export default {
  name: "ChangeRecord",
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