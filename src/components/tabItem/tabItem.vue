<template>
  <div class='sim-tab-item'
       v-show="getActiveLabel===label">

    <slot></slot>

  </div>
</template>

<script>
export default {
  name: "sim-tab-item",
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    getActiveLabel() {
      return this.$parent.activeLabel;
    }
  },
  methods: {},
  created() {
    this.$parent.initItemLabel(this.label);
  }
};
</script>

<style lang='less' scoped>
</style>
