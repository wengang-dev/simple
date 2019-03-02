<template>
  <div class="sim-carousel"
       :style="{height:height}">
    <div class="sim-carousel-container"
         ref="sim-carousel-container"
         :style="{height:height}">
      <slot></slot>
    </div>
    <div class="sim-carousel-arrow-prev sim-carousel-arrow"
         @click="simCarouselPrev"
         @mouseenter="mouoseenterPrev"
         @mouseleave="mouseleavePrev"><span :class="!prevShow&&arrow!='always'?'sim-carousel-arrow-prev-hidden':''"
            class="iconfont icon-carousel-prev sim-carousel-icon-arrow"></span></div>
    <div class="sim-carousel-arrow-next sim-carousel-arrow "
         @click="simCarouselNext"
         @mouseleave="mouseleaveNext"
         @mouseenter="mouoseenterNext"><span :class="!nextShow&&arrow!= 'always'?'sim-carousel-arrow-next-hidden':''"
            class="iconfont icon-carousel-next sim-carousel-icon-arrow"></span></div>
    <ul class="sim-carousel-indicators">
      <li v-for="(item,index) in items"
          class="sim-carousel-indicator"
          @mouseenter="mouseenter(index)"
          @click="click(index)"
          :class="activeIndex==index?'sim-carousel-indicator-active':''"
          :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sim-carousel",
  props: {
    type: {
      type: String,
      default: "touch"
    },
    arrow: {
      type: String,
      default: ""
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 5000
    },
    height: {
      type: String,
      default: "100%"
    }
  },
  data() {
    return {
      items: [],
      transfromX: [],
      activeIndex: -1,
      containerWidth: "",
      prevShow: false,
      nextShow: false,
      autoPlayTimer: null
    };
  },
  computed: {
    getItemLength() {
      if (Array.isArray(this.$parent.list)) {
        return this.$parent.list.length;
      } else {
        return parseInt(this.$parent.list);
      }
    }
  },
  watch: {
    activeIndex(val) {
      clearTimeout(this.autoPlayTimer);
      this.autoPlayInterval();
      this.updateTransfrom(val);
    }
  },
  methods: {
    mouoseenterNext() {
      this.nextShow = true;
    },
    mouoseenterPrev() {
      this.prevShow = true;
    },
    mouseleaveNext() {
      this.nextShow = false;
    },
    mouseleavePrev() {
      this.prevShow = false;
    },
    updateItems() {
      this.items = this.$children.filter(
        child => child.$options.name === "sim-carousel-item"
      );
    },
    simCarouselPrev() {
      if (this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.items.length - 1;
      }
    },
    simCarouselNext() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },
    getItemWidth() {
      this.containerWidth = this.items[0].$el.offsetWidth;
    },
    updateTransfrom(index) {
      let itemQuantity = this.items.length;
      for (let i = 0; i < itemQuantity; i++) {
        if (index == i) {
          this.$set(this.transfromX, i, 0);
        } else {
          this.$set(this.transfromX, i, (i - index) * this.containerWidth);
        }
        if (index == 0) {
          this.$set(this.transfromX, itemQuantity - 1, -this.containerWidth);
        }
        if (index == itemQuantity - 1) {
          this.$set(this.transfromX, 0, this.containerWidth);
        }
      }
    },
    mouseenter(index) {
      if (this.type === "touch") {
        this.activeIndex = index;
      }
    },
    click(index) {
      if (this.type == "click") {
        this.activeIndex = index;
      }
    },
    autoPlayInterval() {
      if (this.autoPlay === true) {
        this.autoPlayTimer = setTimeout(() => {
          this.simCarouselNext();
          this.autoPlayInterval();
        }, this.interval);
      }
    }
  },
  mounted() {
    this.activeIndex = 0;
    this.getItemWidth();
    this.autoPlayInterval();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>