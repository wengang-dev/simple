<template>

  <span class="sim-rate"
        @mouseleave="mouseleave($event)">
    <span v-for="(item,index) of levelTexts"
          :style="{color:index>activeAccount?'#333333':activeColor}"
          class="iconfont sim-rate-item"
          :class="[typeof iconClasses!=='undefined'?'icon-face-init':'icon-star']"
          ref="rate-level"
          @mouseover="mouseover(index,$event)"
          @mouseleave="itemMouseLeave(index,$event)"
          :key='index'
          @click="chooseLevel(index)"></span>
    <span v-if="typeof showText !=='undefined' "
          class="sim-level-text">{{text}}</span>
  </span>
</template>

<script>
export default {
  name: "sim-rate",
  model: { prop: "value", event: "select" },
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
    },
    value: { type: String | Number, default: "" },
    iconClasses: {
      type: Array
    }
  },
  data() {
    return {
      text: "",
      activeAccount: -1,
      oldAccount: 0,
      activeColor: "#333333",
      activeIcon: "icon-active-star",
      baseIcon: "icon-star",
      oldActiveIcon: "",
      saveStatus: false,
      saveTemIndex: -1
    };
  },
  watch: {
    activeAccount(val) {
      if (typeof this.iconClasses !== "undefined") {
        this.replaceIcon(val);
        this.baseIcon = "icon-face-init";
      }
      if (typeof this.colors !== "undefined") {
        this.replaceColor(val);
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
      if (!this.saveStatus) {
        this.activeAccount = -1;
      } else {
        this.activeAccount = this.saveTemIndex;
      }
    },
    renderActive(val) {
      if (val >= this.oldAccount) {
        for (let i = 0; i <= val; i++) {
          this.$refs["rate-level"][i].style.color = this.activeColor;
          this.$refs["rate-level"][i].classList.add(this.activeIcon);
          this.$refs["rate-level"][i].classList.remove(this.baseIcon);
        }
        this.oldAccount = this.activeAccount;
      } else if (val <= this.activeAccount) {
        if (val !== -1) {
          for (let i = 0; i <= this.oldAccount; i++) {
            this.$refs["rate-level"][i].classList.remove(this.oldActiveIcon);
            this.$refs["rate-level"][i].classList.add(this.baseIcon);
            if (i <= val) {
              this.$refs["rate-level"][i].style.color = this.activeColor;
              this.$refs["rate-level"][i].classList.add(this.activeIcon);
            }
            if (i > val) {
              this.$refs["rate-level"][i].style.color = "";
            }
          }
          this.oldAccount = this.activeAccount;
        } else {
          for (let i = 0; i <= this.oldAccount; i++) {
            this.$refs["rate-level"][i].style.color = "";
            this.$refs["rate-level"][i].classList.remove(this.iconClasses[0]);
            this.$refs["rate-level"][i].classList.remove(this.iconClasses[1]);
            this.$refs["rate-level"][i].classList.remove(this.iconClasses[2]);
            this.$refs["rate-level"][i].classList.add(this.baseIcon);
          }
          this.oldAccount = 0;
        }
      }
    },
    chooseLevel(index) {
      this.saveStatus = true;
      this.activeAccount = index;
      this.saveTemIndex = index;
      this.$emit("select", this.levelTexts[index]);
    },
    replaceColor(val) {
      if (val <= 1) {
        this.activeColor = this.colors[0];
      } else if (val >= 3) {
        this.activeColor = this.colors[2];
      } else {
        this.activeColor = this.colors[1];
      }
    },
    replaceIcon(val) {
      this.oldActiveIcon = this.activeIcon;
      if (val <= 1) {
        this.activeIcon = this.iconClasses[0];
      } else if (val >= 3) {
        this.activeIcon = this.iconClasses[2];
      } else {
        this.activeIcon = this.iconClasses[1];
      }
    }
  },
  mounted() {
    this.text = this.value;
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>