<template>

  <div class='sim-cascader-item sim-cascader-item-border'
       v-show="currentShowStatus"
       :style="cascaderItemLocationX">
    <div class="sim-cascader-item-show-list-ul">
      <div class="sim-cascader-item-show-list-li"
           v-for="(item,key) in options"
           :key="key"
           @click="nextLevel(item.children,item)">
        <span class="sim-cascader-item-show-list-li-content">
          <span class="sim-cascader-item-show-list-li-label"
                :class="cascaderIndex?'sim-cascader-item-show-list-li-label-level':''">{{item.label}}</span>
          <span v-if="item.children"
                class="iconfont icon-carousel-next sim-cascader-item-show-list-li-arrow"></span>
        </span>

      </div>
    </div>

    <sim-cascader-item @select="select"
                       v-if="nextLevelStatus"
                       :options='currentOptions'
                       :cascader-index='cascaderIndex+1'
                       :active-cascader-index='activeCascaderIndex'></sim-cascader-item>
  </div>
</template>

<script>
export default {
  name: "sim-cascader-item",
  props: ["options", "cascaderIndex", "activeCascaderIndex"],
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
    },
    currentShowStatus() {
      return this.cascaderIndex > this.activeCascaderIndex + 1 ? false : true;
    }
  },
  methods: {
    select(value) {
      this.$emit("select", value);
    },
    nextLevel(options, value) {
      if (options) {
        this.currentOptions = options;
        this.nextLevelStatus = true;
        this.$emit("select", {
          value: {},
          activeCascaderIndex: this.cascaderIndex
        });
      } else {
        this.$emit("select", {
          value,
          activeCascaderIndex: this.cascaderIndex
        });
        this.nextLevelStatus = false;
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
