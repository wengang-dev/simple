<template>
  <div class="sim-process">
    <div class="sim-process-runway">
      <div class="sim-process-bar"
           :style="{width:percentage+'%',background:currentColor}"></div>
    </div>
    <span v-if="typeof textInside !=='undeifned'"
          class="sim-percentage-text">{{percentage}}%</span>
  </div>
</template>

<script>
export default {
  name: "sim-process",
  props: {
    percentage: {
      type: String | Number,
      default: 0
    },
    color: {
      type: String
    },
    textInside: {
      type: Boolean
    }
  },
  data() {
    return {
      bgColor: ["lightskyblue", "skyblue", "lightgreen"],
      currentColor: ""
    };
  },
  watch: {
    percentage(val) {
      this.checkColor(val);
    }
  },
  methods: {
    checkColor(val) {
      if (val < 33) {
        this.currentColor = this.bgColor[0];
      } else if (val < 66) {
        this.currentColor = this.bgColor[1];
      } else {
        this.currentColor = this.bgColor[2];
      }
    }
  },
  mounted() {
    this.checkColor(this.percentage);
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>