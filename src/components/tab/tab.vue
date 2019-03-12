<template>
  <div class="sim-tab"
       :class="type==='border-card'?'sim-tabs-border-card':''">
    <sim-tab-bar :itemLabels='itemLabels'
                 :itemLabelsLength='itemLabelsLength'
                 :type='type'></sim-tab-bar>
    <div class="sim-tab-content"
         :class="type==='border-card'?'sim-tab-content-card':''">
      <slot>
      </slot>
    </div>

  </div>
</template>

<script>
import simTabBar from "../tabBar/tabBar";
import simTabItem from "../tabItem/tabItem";
export default {
  name: "sim-tab",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: {
      type: String | Number
    },
    type: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      activeLabel: "",
      itemLabels: [],
      itemLabelsLength: null
    };
  },
  components: {
    simTabBar,
    simTabItem
  },
  watch: {
    activeLabel(val) {
      this.$emit("change", val);
    }
  },
  methods: {
    click(label) {
      this.activeLabel = label;
    },
    initItemLabel(label) {
      if (this.itemLabels.indexOf(label) === -1) {
        this.itemLabels.push(label);
      }
    },
    checkValue() {
      if (typeof this.value !== "undefined") {
        this.activeLabel = this.value;
      } else {
        this.activeLabel = this.itemLabels[0];
      }
    }
  },

  mounted() {
    this.checkValue();
  }
};
</script>

<style lang='less' scoped>
.sim-tabs {
  width: 100px;
  height: 100px;
}
</style>

