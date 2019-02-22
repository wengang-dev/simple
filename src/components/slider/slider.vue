<template>
  <div class="sim-slider">
    <div class="sim-slider-runway">
      <div class="sim-slider-bar"
           :style="{width:location+'%'}"></div>
      <div class="sim-slider-point"
           :style="{left:location+'%'}">
        <span class="sim-slider-drag"
              :class="hoverState?'sim-slider-drag-hover':''"></span>
        <span v-if="typeof tooltip_disabled==='undefined'"
              :class="hoverState?'sim-slider-proportion-show':''"
              class="sim-slider-proportion sim-slider-proportion-transition ">{{proportion}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sim-slider",
  model: {
    prop: "proportion",
    event: "drag"
  },
  props: {
    proportion: {
      type: Number | String,
      default: 0
    },
    step: {
      type: Number | String,
      default: 1
    },
    tooltip_disabled: {}
  },
  data() {
    return {
      hoverState: false
    };
  },
  computed: {
    location() {
      return this.proportion;
    }
  },
  watch: {},
  methods: {
    dragging() {
      let dragPoint = document.querySelector(".sim-slider-point");
      let simSlider = document.querySelector(".sim-slider-runway");
      let initLocation = simSlider.offsetLeft;
      let sliderWidth = simSlider.offsetWidth;
      let step = parseInt(this.step);
      dragPoint.onmousedown = e => {
        this.hoverState = true;
        document.onmousemove = event => {
          let diff = event.clientX - initLocation;
          let oldLocation = this.proportion;
          let nowLocation = null;
          if (diff >= 0 && diff <= sliderWidth) {
            nowLocation = Math.floor((diff * 100) / sliderWidth);
            if (Math.abs(nowLocation - oldLocation) >= step) {
              this.$emit("drag", Math.floor(nowLocation / step) * step);
            }
          }
          document.onmouseup = () => {
            this.hoverState = false;
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      };
    }
  },
  mounted() {
    this.dragging();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>