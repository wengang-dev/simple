<template>
  <div @click="select"
       class="sim-options"
       :class="active===label?'sim-options-active':''">
    <span v-text="label"
          class="sim-options-label"></span></div>
</template>

<script>
export default {
  name: "sim-options",
  props: ["label", "value"],
  data() {
    return {};
  },
  computed: {
    active() {
      return this.$parent.value.label;
    }
  },
  methods: {
    select() {
      this.$parent.$emit("select", { value: this.value, label: this.label });
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>