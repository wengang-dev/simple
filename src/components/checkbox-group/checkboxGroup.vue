<template>
  <span class="sim-checkbox-group">
    <slot :selectlist="selectlist"></slot>
  </span>
</template>

<script>
export default {
  name: "simCheckboxGroup",
  model: {
    prop: "selectlist",
    event: "change"
  },
  props: {
    selectlist: {
      type: Array
    }
  },
  data() {
    return {
      list: null
    };
  },
  beforeMount() {
    console.log("selectlist group:", this.selectlist);
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>