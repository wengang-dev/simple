<template>
  <div class="sim-dialog-container">
    <div class='sim-dialog'
         :style="{width:width}"
         v-show="visible&&ownStatus">
      <div class="sim-dialog-head">
        <strong>提示</strong> <span @click="close">x</span> </div>
      <slot>
      </slot>
      <slot name='footer'></slot>
    </div>
  </div>

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
  watch: {
    visible(val) {
      this.ownStatus = val;
    }
  },
  data() {
    return {
      ownStatus: true
    };
  },

  methods: {
    close() {
      this.close = !this.close;
    }
  }
};
</script>

<style lang='less' scoped>
</style>
