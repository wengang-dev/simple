<template>
  <div class="sim-slider">
    <div class="sim-slider-runway">
      <div class=""></div>
      <div class="sim-slider-point"></div>
    </div>
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