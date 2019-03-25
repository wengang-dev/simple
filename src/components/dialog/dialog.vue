<template>
  <transition name="dialog">
    <div class="sim-dialog-container"
         v-show="visible">
      <div class='sim-dialog'
           :style="{width:width}">
        <div class="sim-dialog-head">
          <strong class="sim-dialog-head-notice">提示</strong>
          <span @click="close"
                class="sim-dialog-head-close">x</span> </div>
        <div class="sim-dialog-slot-text">
          <slot>
          </slot>
        </div>
        <slot name='footer'></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "sim-dialog",
  props: {
    desc: {
      type: String | Number
    },
    visible: {
      type: Boolean
    },
    width: {
      type: String,
      default: "300px"
    }
  },
  watch: {},
  data() {
    return {};
  },

  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style lang='less' scoped>
</style>
