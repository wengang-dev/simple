<template>
  <span class='sim-dropdown '>
    <slot></slot>
    <br>
    <slot name='slot'></slot>
  </span>
</template>

<script>
export default {
  name: "sim-dropdown",

  data() {
    return {};
  },
  computed: {
    getChildrenLength() {
      return this.$slots.slot[0].elm.childNodes.length;
    },
    getDropdownItenLength() {
      return this.$slots.slot[0].elm.childNodes[0].offsetHeight;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>
