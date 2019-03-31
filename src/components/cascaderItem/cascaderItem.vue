<template>

  <div class='sim-cascader-item sim-cascader-item-border'
       :style="cascaderItemLocationX">
    <div class="sim-cascader-item-show-list-ul">
      <div class="sim-cascader-item-show-list-li"
           v-for="(item,key) in options"
           :key="key"
           @click="nextLevel(item.children)"><span class="sim-cascader-item-show-list-li-label">{{item.label}}</span>
        <span class="iconfont icon-carousel-next sim-cascader-item-show-list-li-arrow"></span></div>
    </div>

    <sim-cascader-item v-if="nextLevelStatus"
                       :options='currentOptions'
                       :cascader-index='cascaderIndex+1'></sim-cascader-item>
  </div>
</template>

<script>
export default {
  name: "sim-cascader-item",
  props: ["options", "cascaderIndex"],
  data() {
    return {
      currentOptions: null,
      nextLevelStatus: false
    };
  },
  computed: {
    cascaderItemLocationX() {
      return {
        left: this.cascaderIndex ? "100%" : "0%",
        top: this.cascaderIndex ? "-1px" : "-7px",
        borderLeftWidth: this.cascaderIndex ? "0px" : "1px"
      };
    }
  },
  methods: {
    nextLevel(options) {
      console.log(options);
      if (options) {
        this.currentOptions = options;
        this.nextLevelStatus = true;
      } else {
        this.nextLevelStatus = false;
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
