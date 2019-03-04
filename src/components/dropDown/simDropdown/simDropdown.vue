<template>
  <span class='sim-dropdown '
        :class="size==='normal'?'sim-dropdown-size-normal':size==='small'?'sim-dropdown-size-small':size==='mini'?'sim-dropdown-size-mini':''"
        @mouseenter="mouseenter($event)"
        @mouseleave="mouseleave($event)">
    <slot></slot>
    <br>
    <slot name='slot'></slot>
  </span>
</template>

<script>
export default {
  name: "sim-dropdown",
  props: {
    size: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      menuHeight: 0
    };
  },
  computed: {
    getChildrenLength() {
      return this.$slots.slot[0].elm.childNodes.length;
    },
    getDropdownMenuHeight() {
      return this.$slots.slot[0].elm.childNodes[0].offsetHeight;
    }
  },
  methods: {
    mouseenter(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      this.menuHeight = this.getChildrenLength * this.getDropdownMenuHeight;
    },
    mouseleave(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      this.menuHeight = 0;
    }
  }
};
</script>

<style lang='less' scoped>
</style>
