<template>
  <div class="sim-carousel">
    <div class="sim-carousel-container"
         ref="sim-carousel-container">
      <slot></slot>
    </div>
    <div class="sim-carousel-arrow-prev sim-carousel-arrow"><span class="iconfont icon-carousel-prev"></span></div>
    <div class="sim-carousel-arrow-next sim-carousel-arrow"><span class="iconfont icon-carousel-next"></span></div>
    <ul class="sim-carousel-indicators">
      <li v-for="item in items"
          class="sim-carousel-indicator"
          :key="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sim-carousel",
  data() {
    return {};
  },
  computed: {
    items() {
      return this.$parent.list;
    },
    getItemWidth() {
      return this.$slots.default[0].elm.offsetWidth;
    },
    getItemLength() {
      if (Array.isArray(this.$parent.list)) {
        return this.$parent.list.length;
      } else {
        return parseInt(this.$parent.list);
      }
    }
  },
  mounted() {
    console.log();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>