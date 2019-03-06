<template>
  <div class="sim-collapse"
       ref="simCollapse">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "sim-collapse",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: { type: String | Array },
    accordion: {}
  },
  data() {
    return {
      nameTogether: null,
      activeName: null
    };
  },
  methods: {
    mountListenCustomEvent() {
      this.$refs.simCollapse.addEventListener("simAccordion", event => {
        if (typeof this.accordion !== "undefined") {
          this.activeName = event.detail.name;
        }
      });
    }
  },
  mounted() {
    this.mountListenCustomEvent();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>