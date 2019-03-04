<template>
  <span class='sim-dropdown-item '
        @click="click($event)">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "sim-dropdown-item",
  props: {
    commond: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    click(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      this.$parent.$parent.$emit("commond", this.commond);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
