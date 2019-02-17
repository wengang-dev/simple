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
           :value="number"
           @focus="checkInput"
           @blur="checkBlur($event)">
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
      minState: false,
      inputState: false
    };
  },
  watch: {
    number(val) {
      this.checkLimit(val);
    }
  },
  methods: {
    checkInput() {
      this.inputState = true;
      this.$emit("focus");
    },
    checkBlur(event) {
      this.$emit("blue");
      if (this.inputState) {
        let value = event.target.value;
        if (value > this.max) {
          this.$emit("input", this.max);
          event.target.value = this.max;
        }
        if (value < this.min) {
          this.$emit("input", this.min);
          event.target.value = this.min;
        }
        this.inputState = false;
      }
    },
    checkLimit(val) {
      if (val >= this.max) {
        this.maxState = true;
        this.$emit("input", this.max);
        this.$emit("change", this.max);
      } else {
        this.maxState = false;
      }
      if (val <= this.min) {
        this.minState = true;
        this.$emit("input", this.min);
        this.$emit("change", this.min);
      } else {
        this.minState = false;
      }
    },
    sub() {
      if (
        typeof this.disabled === "undefined" &&
        (typeof this.min === "undefined" || this.number >= this.min + this.step)
      ) {
        let value = this.number - this.step;
        this.$emit("input", value);
        this.$emit("change", value);
      }
    },
    add() {
      if (
        typeof this.disabled === "undefined" &&
        (typeof this.max === "undefined" || this.number <= this.max - this.step)
      ) {
        let value = this.number + this.step;
        this.$emit("input", value);
        this.$emit("change", value);
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