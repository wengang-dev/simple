<template>
  <div class='sim-breadcrumb'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-breadcrumb",
  props: {
    separator: {
      type: String,
      default: ""
    },
    separatorClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
