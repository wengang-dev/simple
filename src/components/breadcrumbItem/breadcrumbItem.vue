<template>
  <span class='sim-breadcrumb-item'>
    <span :class="to?'sim-breadcrumb-item-nav':''"
          @click="click">
      <slot></slot>
    </span>
    <span class="sim-breadcrumb-item-split-line"
          :class="separatorClass?[separatorClass,'iconfont']:''"
          v-text="separatorClass?'':separator"></span>
  </span>
</template>

<script>
export default {
  name: "sim-breadcrumb-item",
  props: {
    to: String | Object
  },
  data() {
    return {};
  },
  computed: {
    separator() {
      return this.$parent.separator;
    },
    separatorClass() {
      return this.$parent.separatorClass;
    }
  },
  methods: {
    click() {
      const { to, $router } = this;
      if (!to || !$router) return;
      this.replace ? $router.replace(to) : $router.push(to);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
