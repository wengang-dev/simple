<template>
  <div class="inputContainer">
    <slot name="before"></slot>
    <input class="sim-input "
           :class="[
                    typeof disabled==='undefined'?'':'sim-input-disbaled',
                    slotBefore?'sim-input-before':'',
                    slotAfter?'sim-input-after':''
                  ]"
           :type="type"
           :value="value"
           :placeholder="placeholder"
           @input="input($event.target.value)"
           :disabled="disabled">
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "simInput",
  props: {
    value: {
      type: String | Number,
      default: ""
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {}
  },
  data() {
    return {};
  },
  computed: {
    slotBefore() {
      if (this.$slots.before) {
        return true;
      } else {
        return false;
      }
    },
    slotAfter() {
      if (this.$slots.after) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang='less' scoped>
.inputContainer {
  display: inline-block;
  font-size: 0px;
}
</style>
