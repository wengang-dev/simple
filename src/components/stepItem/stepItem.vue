<template>
  <div class="sim-step-item"
       :style="{width:getItemWidth}"
       :class="getActive>myIndex?'sim-step-item-finish':getActive==myIndex?'sim-step-item-dot-current':getActive<myIndex?'sim-step-item-dot-todo':''">
    <div class="sim-step-item-identification">
      <span class="sim-step-item-dot">
        <slot name="icon">{{myIndex+1}}</slot>
      </span>
      <div class="sim-step-item-line"
           :class="getActive>myIndex+1?'sim-step-item-line-finish':''"
           v-if="myIndex!==getItemQuantity-1"></div>
    </div>
    <div class="sim-step-item-desc">
      <div class="sim-step-item-title">{{title}}</div>
      <div class="sim-step-item-text">{{desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sim-step-item",
  props: {
    title: {},
    desc: {}
  },
  data() {
    return {
      myIndex: null
    };
  },
  computed: {
    getItemWidth() {
      return this.$parent.stepItemWidth;
    },
    getItemQuantity() {
      return this.$parent.stepItemQuantity;
    },
    getActive() {
      return this.$parent.active;
    }
  },
  methods: {
    getMyIndex() {
      this.myIndex = this.$parent.stepItemSet.indexOf(this);
    }
  },
  created() {
    this.$parent.updateStepItemSet();
  },
  mounted() {
    this.getMyIndex();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>