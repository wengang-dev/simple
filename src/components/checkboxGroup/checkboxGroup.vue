<template>
  <span class="sim-checkbox-group">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "simCheckboxGroup",
  model: {
    prop: "selectList",
    event: "change"
  },
  props: {
    selectList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>