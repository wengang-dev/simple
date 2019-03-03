<template>
  <button class="btn"
          :class="[
                    size==='middle'?'middle-btn':size==='small'?'small-btn':'mini-btn',
                    type==='default'?'default-btn':type==='success'?'success-btn':type==='info'?'info-btn':type==='warn'? 'warn-btn':type==='danger'?'danger-btn':'',
                    disabled?'disabled':'']"
          @click="click">
    <slot></slot>
  </button>
</template>

<script>
import "./button.less";
export default {
  name: "sim-btn",
  props: {
    size: {
      type: String,
      default: "middle"
    },
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    click() {
      if (this.disabled) {
        let event = window.event;
        event.stopPropagation();
        event.returnValue = false;
        event.preventDefault();
      } else {
        this.$emit("click");
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
