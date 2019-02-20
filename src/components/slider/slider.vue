<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-slider",
  props: ["test"],
  data() {
    return {};
  },
  mounted() {
    console.log(this.test);
  }
};
</script>

<style lang='less' scoped type='text/css'>
div {
  height: 100px;
}
</style>