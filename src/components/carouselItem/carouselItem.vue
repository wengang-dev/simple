<template>
  <div class='sim-carousel-item '>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-carousel-item",
  data() {
    return {};
  },
  components: {},
  mounted() {
    console.log(this);
  }
};
</script>

<style lang='less' scoped>
</style>
