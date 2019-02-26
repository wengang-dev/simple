<template>
  <div class='sim-tree'>
    <div v-for="(item,index) of data"
         class="sim-tree-levels"
         :key='item[defaultProps.label]'
         @click="checkLevels(index,$event,item[defaultProps.children].length)">
      <span class="sim-tree-label"><span v-if="item[defaultProps.children]"
              :class="[levelsShowState[index]?'sim-tree-label-show':'']"
              class=" iconfont icon-solid-right-arrow sim-solid-right-arrow"></span>{{item[defaultProps.label]}}</span>
      <sim-tree :data="item[defaultProps.children]"
                v-show="secondaryShow[index]"
                :style="{height:secondaryHeight[index]+'px'}"
                :defaultProps="defaultProps"></sim-tree>
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
    checkLevels(index, event, childrenLength) {
      console.log("targetHeight", childrenLength);
      let targetHeight = childrenLength * 25;
      console.log(targetHeight);
      event.stopPropagation();
      event.cancelBubble = true;
      if (!this.levelsShowState[index]) {
        this.$set(this.levelsShowState, index, true);
        this.$set(this.secondaryShow, index, true);
        requestAnimationFrame(() => {
          this.secondaryLevelShow(index, targetHeight);
        });
      } else {
        this.$set(this.levelsShowState, index, false);
        requestAnimationFrame(() => {
          this.secondaryLevelHidden(index);
        });
      }
    },
    secondaryLevelShow(index, targetHeight) {
      //   显示动画
      if (!this.secondaryHeight[index]) {
        this.$set(this.secondaryHeight, index, 0);
      }
      if (this.secondaryHeight[index] < targetHeight) {
        console.log("++++++++++++++");
        this.$set(this.secondaryHeight, index, this.secondaryHeight[index] + 1);
        requestAnimationFrame(() => {
          this.secondaryLevelShow(index, targetHeight);
        });
      }
    },
    secondaryLevelHidden(index) {
      //   隐藏动画
      if (this.secondaryHeight[index] > 0) {
        this.$set(this.secondaryHeight, index, this.secondaryHeight[index] - 1);

        requestAnimationFrame(() => {
          this.secondaryLevelHidden(index);
        });
      } else {
        this.$set(this.secondaryShow, index, false);
      }
    }
  }
};
</script>

<style lang='less' scoped>
</style>
