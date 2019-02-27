<template>
  <div class='sim-tree'>
    <div v-for="(item,index) of data"
         class="sim-tree-levels"
         :key='item[defaultProps.label]'
         @click="checkLevels(index,$event)">
      <div class="sim-tree-label"
           @click="click(item[defaultProps.label])">
        <span class=" sim-solid-right-arrow">
          <span :class="[levelsShowState[index]?'sim-tree-label-show':'']"
                v-if="item[defaultProps.children]"
                class=" iconfont icon-solid-right-arrow icon-solid-right-arrow-display"></span>
        </span>
        {{item[defaultProps.label]}}
      </div>

      <sim-tree v-if="item[defaultProps.children]"
                class="sim-tree-secondary"
                :data="item[defaultProps.children]"
                :defaultProps="defaultProps"
                v-show="secondaryShow[index]"></sim-tree>

    </div>

  </div>
</template>

<script>
export default {
  name: "sim-tree",
  props: {
    data: {
      type: Array
    },
    defaultProps: {
      type: Object
    }
  },
  data() {
    return {
      levelsShowState: [],
      secondaryShow: [],
      secondaryHeight: []
    };
  },
  components: {},
  methods: {
    checkLevels(index, event) {
      event.stopPropagation();
      event.cancelBubble = true;
      if (!this.levelsShowState[index]) {
        this.$set(this.levelsShowState, index, true);
        this.$set(this.secondaryShow, index, true);
      } else {
        this.$set(this.levelsShowState, index, false);
        this.$set(this.secondaryShow, index, false);
      }
    },
    click(label) {
      this.$emit("click", label);
    }
  }
};
</script>

<style lang='less' scoped>
</style>
