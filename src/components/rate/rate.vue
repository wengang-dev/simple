<template>
  <span class="sim-rate"
        @mouseleave="mouseleave($event)">
    <span v-for="(item,index) of levelTexts"
          :style="{color:activeColor}"
          class="iconfont icon-star sim-rate-item"
          ref="rate-level"
          @mouseover="mouseover(index,$event)"
          @mouseleave="itemMouseLeave(index,$event)"
          :key='index'></span>
    <span v-if="typeof showText !=='undefined' "
          class="sim-level-text">{{text}}</span>
  </span>
</template>

<script>
export default {
  name: "sim-rate",
  props: {
    levelTexts: {
      type: Array,
      default() {
        return ["极差", "较差", "一般", "满意", "很好"];
      }
    },
    showText: {
      default: undefined
    },
    colors: {
      type: Array
    }
  },
  data() {
    return {
      text: "",
      activeAccount: -1,
      oldAccount: 0,
      activeColor: ""
    };
  },
  watch: {
    activeAccount(val) {
      if (typeof this.colors !== "undefined") {
        if (val <= 1) {
          this.activeColor = this.colors[0];
        } else if (val >= 3) {
          this.activeColor = this.colors[2];
        } else {
          this.activeColor = this.colors[1];
        }
      }
      if (val === -1) {
        this.text = "";
        this.activeColor = "";
      } else {
        this.text = this.levelTexts[val];
      }
      this.renderActive(val);
    }
  },
  methods: {
    mouseover(index, event) {
      event.stopPropagation();
      event.cancelBubble = true;
      this.activeAccount = index;
    },
    itemMouseLeave(index, event) {
      event.stopPropagation();
      event.cancelBubble = true;
      this.activeAccount = index;
    },
    mouseleave(event) {
      this.activeAccount = -1;
    },
    renderActive(val) {
      if (val >= this.oldAccount) {
        for (let i = this.oldAccount; i <= val; i++) {
          this.$refs["rate-level"][i].style.color = this.activeColor;
          this.$refs["rate-level"][i].classList.add("icon-active-star");
          this.$refs["rate-level"][i].classList.remove("icon-star");
        }
        this.oldAccount = this.activeAccount;
      } else if (val <= this.activeAccount) {
        if (val !== -1) {
          for (let i = val + 1; i <= this.oldAccount; i++) {
            this.$refs["rate-level"][i].style.color = "";
            this.$refs["rate-level"][i].classList.remove("icon-active-star");
            this.$refs["rate-level"][i].classList.add("icon-star");
          }
          this.oldAccount = this.activeAccount;
        } else {
          for (let i = 0; i <= this.oldAccount; i++) {
            this.$refs["rate-level"][i].style.color = "";
            this.$refs["rate-level"][i].classList.remove("icon-active-star");
            this.$refs["rate-level"][i].classList.add("icon-star");
          }
          this.oldAccount = 0;
        }
      }
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>