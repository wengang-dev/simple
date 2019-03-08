<template>
  <div class='sim-tab-bar'>
    <ul class="sim-tab-bar-ul"
        :class="[type==='normal'?'sim-tab-bar-ul-normal-border':type==='card'||type==='border-card'?'sim-tab-bar-ul-card-border':'',
        type==='border-card'?'sim-tab-bar-ul-borad-card-bg':'']">
      <li v-for="(item,index) in itemLabels"
          @click="barclick(item)"
          :key="index"
          :class="[getActiveLabel===item?'sim-active-bar':'',type==='card'||type==='border-card'?'sim-tab-bar-card':'',(type==='border-card')&&getActiveLabel===item?'sim-active-bar-border-card ':'',type==='border-card'?'sim-tab-bar-border-card':'']"><span ref="simTabBars">{{item}}</span> </li>
      <div :class="type==='normal'? 'sim-tab-bar-underline':type==='card'||type==='border-card'?'sim-tar-bar-underline-card ':''"
           :style="type==='normal'? underlineStyleObject:type==='card'||type==='border-card'?underlineCardStyleObject:''"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "sim-tabs",
  props: {
    itemLabels: {
      type: Array
    },
    itemLabelsLength: {
      type: Number,
      default: -1
    },
    type: {
      type: String
    }
  },
  data() {
    return { undelineLocation: [], underlineWidth: [] };
  },
  computed: {
    getActiveLabel() {
      return this.$parent.activeLabel;
    },
    activeIndex() {
      return this.itemLabels.indexOf(this.getActiveLabel);
    },
    underlineStyleObject() {
      return {
        transform:
          "translateX(" + this.undelineLocation[this.activeIndex] + "px)",
        width: this.underlineWidth[this.activeIndex] + "px"
      };
    },
    underlineCardStyleObject() {
      return {
        transform:
          "translateX(" +
          (this.undelineLocation[this.activeIndex] - 15) +
          "px)",
        width: this.underlineWidth[this.activeIndex] + 30 + "px"
      };
    }
  },
  methods: {
    initUnderLineLocation() {
      let length = this.itemLabels.length;
      this.$nextTick(() => {
        this.$refs.simTabBars.forEach((item, index) => {
          this.undelineLocation.push(item.offsetLeft);
          this.underlineWidth.push(item.offsetWidth);
        });
      });
    },
    barclick(label) {
      this.$parent.click(label);
    }
  },

  mounted() {
    this.initUnderLineLocation();
  }
};
</script>

<style lang='less' scoped>
</style>
