<template>
  <div class='sim-cascader-item'>
    <div class="sim-cascader-item-show-list-li"
         v-for="(item,key) in options"
         :key="key"><span class="sim-cascader-item-show-list-li-label">{{item.label}}</span>
      <span class="iconfont icon-carousel-next sim-cascader-item-show-list-li-arrow"></span></div>
  </div>
</template>

<script>
export default {
  name: "sim-cascader-item",
  props: ["options"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
</style>
