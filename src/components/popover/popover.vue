<template>
  <div class="sim-popover">
    <slot name="reference"></slot>
    <div class="sim-popover-content">
      <div class="sim-popover-container">
        <h2 class="sim-popover-title">{{title}}</h2>
        <span class="sim-popover-text">{{content}}</span>
        <div class="sim-popover-arrow">
          <div class="sim-popover-arrow-container">
            <span class="bot"></span><span class="top"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sim-popover",
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>