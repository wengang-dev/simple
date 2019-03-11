<template>
  <div class="sim-steps">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-steps",
  props: {
    active: {
      type: String | Number,
      default: 0
    },
    finishStatus: {
      type: String
    },
    space: {
      type: String | Number
    }
  },
  data() {
    return {
      stepItemSet: [],
      stepItemQuantity: null,
      stepItemWidth: null
    };
  },
  methods: {
    updateStepItemSet() {
      this.stepItemSet = this.$children.filter(item => {
        return item.$options.name === "sim-step-item";
      });
    }
  },
  mounted() {
    this.stepItemQuantity = this.stepItemSet.length;
    console.log(this.stepItemQuantity);
    if (typeof this.space !== "undefined") {
      this.stepItemWidth = this.space + "px";
    } else {
      this.stepItemWidth = Math.floor(100 / this.stepItemQuantity) + "%";
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>