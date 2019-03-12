<template>
  <span :class="disabled===undefined?'sim-normal-cursor':'sim-disabled-cursor'">
    <div class="sim-radio"
         @click="selectRadio($event)"
         :class="[checked==label?'sim-radio-active':'sim-radio-normal',
         disabled===undefined?'':'sim-radio-disabled']">
    </div>
    <span :class="[checked==label?'sim-radio-text-active':''
    ,disabled===undefined?'':'sim-radio-disabled']"
          class="sim-radio-text-normal">
      <slot></slot>
    </span>
  </span>

</template>

<script>
export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: {
      type: String,
      default: "1"
    },
    label: {
      type: String
    },
    disabled: {}
  },
  name: "sim-radio",
  methods: {
    selectRadio(event) {
      if (this.disabled !== undefined) {
        event.stopPropagation();
        event.cancelBubble = true;
        event.preventDefault();
        event.returnValue = false;
      } else {
        this.$emit("change", this.label);
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
