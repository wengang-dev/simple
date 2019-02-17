<template>
  <span class=" sim-input-number "
        :class="[typeof disabled!=='undefined'?'sim-input-number-disabled':'',
        size==='normal'?'sim-input-number-size-normal':size==='large'?'sim-input-number-size-large':'sim-input-number-size-small'
  ]">
    <span class="sim-input-number-sub"
          @click="sub"
          :class="typeof disabled!=='undefined'||minState?'sim-input-nbumber-function-disabled':'sim-input-nbumber-function-hover'">－</span>
    <input class="sim-input-number-input"
           :class="typeof disabled!=='undefined'?'sim-input-number-input-disabled ':''"
           type="text"
           :disabled='disabledState'
           :value="number">
    <span class="sim-input-number-add"
          @click="add"
          :class="[typeof disabled!=='undefined'||maxState?'sim-input-nbumber-function-disabled':'sim-input-nbumber-function-hover']">+</span>
  </span>

</template>

<script>
export default {
  name: "sim-input-number",
  model: {
    prop: "number",
    event: "input"
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    disabled: {},
    size: {
      type: String,
      default: "normal"
    },
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number
    },
    min: {
      type: Number
    }
  },
  data() {
    return {
      disabledState: false,
      maxState: false,
      minState: false
    };
  },
  watch: {
    number(val) {
      this.checkLimit(val);
    }
  },
  methods: {
    checkLimit(val) {
      if (val >= this.max) {
        this.maxState = true;
      } else {
        this.maxState = false;
      }
      if (val <= this.min) {
        this.minState = true;
      } else {
        this.minState = false;
      }
    },
    sub() {
      if (
        typeof this.disabled === "undefined" &&
        (typeof this.min === "undefined" || this.number >= this.min + this.step)
      ) {
        this.$emit("input", this.number - this.step);
      }
    },
    add() {
      if (
        typeof this.disabled === "undefined" &&
        (typeof this.max === "undefined" || this.number <= this.max - this.step)
      ) {
        this.$emit("input", this.number + this.step);
      }
    }
  },
  mounted() {
    this.checkLimit(this.number);
    if (typeof this.disabled !== "undefined") {
      this.disabledState = true;
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>