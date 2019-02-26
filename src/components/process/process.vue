<template>
  <div class="sim-process">
    <div class="sim-process-runway"
         :class="typeof textInside !=='undefined'?'sim-process-runway-inside':''">
      <span class="sim-inside-init-percentage"
            v-if="percentage<10&&typeof textInside !=='undefined'">0%</span>
      <div class="sim-process-bar"
           :class="[typeof status !=='undefined'?status==='success'?'sim-process-bar-success':'sim-process-bar-exception':'',
           typeof textInside!=='undefined'?'sim-process-bar-inside':'']"
           :style="{width:percentage+'%',backgroundColor:status==='success'?'#67c23a':status==='exception'?'#f56c6c': currentColor}">
        <span v-if="typeof textInside!=='undefined'"
              class="sim-process-inside-percentage">{{percentage}}%</span></div>
    </div>
    <span v-if="typeof textInside ==='undefined'&&typeof status ==='undefined'"
          class="sim-percentage-text">{{percentage}}%</span>
    <span v-if="typeof status !=='undefined'"
          class="iconfont"
          :class="[status==='success'?'sim-status-success':'sim-status-exception',status==='success'?'icon-success':'icon-error']"></span>
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
    textInside: {},
    status: {
      type: String
    }
  },
  data() {
    return {
      currentColor: "#409EFF"
    };
  },
  watch: {},
  methods: {
    checkColor() {
      console.log(typeof this.color);
      if (typeof this.color !== "undefined") {
        this.currentColor = this.color;
      }
    }
  },
  mounted() {
    this.checkColor();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>