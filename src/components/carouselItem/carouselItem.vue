<template>
  <div class='sim-carousel-item'
       :style="{transform:`translateX(${translate}px)`}"
       :class="[itemIndex==getActiveIndex?'sim-carousel-item-active':'']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-carousel-item",
  data() {
    return {
      itemIndex: -1
    };
  },
  components: {},
  computed: {
    translate() {
      return this.$parent.transfromX[this.itemIndex];
    },
    getActiveIndex() {
      return this.$parent.activeIndex;
    }
  },
  methods: {
    getItemIndex() {
      this.itemIndex = this.$parent.items.indexOf(this);
    }
  },
  created() {
    this.$parent && this.$parent.updateItems();
  },
  mounted() {
    this.getItemIndex();
  }
};
</script>

<style lang='less' scoped>
</style>
