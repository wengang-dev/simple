<template>
  <div class='sim-tab-bar'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-tabs",
  data() {
    return {};
  },
  components: {},
  mounted() {
    this.$on("handclick", () => {
      console.log("listen handclick");
    });
  }
};
</script>

<style lang='less' scoped>
</style>
