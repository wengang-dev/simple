<template>
  <div class="sim-collapse-item"
       ref="simCollapseItem"
       @click="click">
    <div class="sim-collapse-item-title">{{title}} <span class="iconfont icon-carousel-next sim-collapse-title-arrow"
            :class="computedShowState?'sim-collapse-title-arrow-rotate':''"></span>
    </div>
    <div class="sim-collapse-item-container"
         :style="{height:computedShowState?itemHeight+'px':'0px'}">
      <div class="sim-collapse-hidden-content"
           ref="hiddenContent">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "sim-collapse-item",
  props: {
    title: {
      type: String
    },
    name: {
      type: String | Number
    }
  },
  data() {
    return {
      showState: false
    };
  },
  computed: {
    itemHeight() {
      return this.$refs.hiddenContent.offsetHeight;
    },
    getParentValue() {
      return this.$parent.value;
    },
    getActiveName() {
      return this.$parent.activeName;
    },
    getAccordionType() {
      return typeof this.$parent.accordion;
    },
    computedShowState() {
      if (this.getAccordionType !== "undefined") {
        // 手风琴模式
        if (this.getParentValue === this.name) {
          return this.showState;
        } else {
          this.showState = false;
          return false;
        }
      } else {
        // 普通模式
        return this.showState;
      }
    }
  },
  methods: {
    click() {
      this.showState = !this.showState;
      this.emitName(this.showState);
      this.dispatchEvent();
    },
    emitName(state) {
      let parentValue = this.getParentValue;
      if (this.getAccordionType === "undefined") {
        let index = parentValue.indexOf(this.name);
        if (state && index === -1) {
          parentValue.push(this.name);
          this.$parent.$emit("change", parentValue);
        } else {
          parentValue.splice(index, 1);
          this.$parent.$emit("change", parentValue);
        }
      } else {
        this.$parent.$emit("change", this.name);
      }
    },
    dispatchEvent() {
      let event = new CustomEvent("simAccordion", {
        bubbles: true,
        detail: { name: this.name }
      });
      this.$refs.simCollapseItem.dispatchEvent(event);
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>