<template>
  <span class='sim-dropdown-menu'
        :style="{height:getMenuHeight+'px',opacity:getMenuHeight?'1':'0'}">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "sim-dropdown-menu",
  data() {
    return {};
  },
  computed: {
    getMenuHeight() {
      return this.$parent.menuHeight;
    }
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
