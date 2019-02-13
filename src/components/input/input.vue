<template>
  <div class="inputContainer">
    <!-- sloted?'':sloted=='before'?'sim-input-before':'sim-input-after' -->
    <slot name="before">test slotaaa</slot>
    <input class="sim-input "
           :class="[
                    disabled=='undefined'?'':'sim-input-disbaled',
                    
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
    disabled: {
      type: Boolean,
      default: false
    },
    slotBefore: {
      type: String
    },
    slotAfter: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    }
  },
  mounted() {
    console.log("slotBefore: ", this.slotBefore);
    console.log("slotAfter: ", this.slotAfter);
  }
};
</script>

<style lang='less' scoped>
.inputContainer {
  display: inline-block;
}
</style>
