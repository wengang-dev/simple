<template>
  <div class="sim-tabel-column"></div>
</template>

<script>
export default {
  name: "sim-table-column",
  props: {
    prop: {
      type: String
    },
    label: {
      type: String
    },
    width: {}
  },
  created() {
    this.$parent.updateTableColumn(this.prop, this.label, this.width);
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>