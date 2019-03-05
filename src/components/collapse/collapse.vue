<template>
  <div class="sim-collapse">
    <div class="click"
         @click="click">click!click!click!</div>
    <div class="sim-collapse-item-container"
         :style="{height:showState?itemHeight+'px':'0px'}">
      <div class="sim-collapse-item"
           ref="collapseItem"></div>
    </div>
    <div class="under-item"></div>

  </div>
</template>

<script>
export default {
  name: "sim-collapse",
  data() {
    return {
      showState: false
    };
  },
  computed: {
    itemHeight() {
      return this.$refs.collapseItem.offsetHeight;
    }
  },
  methods: {
    click() {
      this.showState = !this.showState;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped type='text/css'>
</style>