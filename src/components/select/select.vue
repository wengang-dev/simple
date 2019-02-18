<template>
  <div class="sim-select"
       :class="[rotateShow?'sim-select-active':'',size==='normal'?'sim-select-size-normal':'sim-select-size-small']">
    <div class="sim-select-show"><span class="sim-select-show-value">{{value.label}}</span>
      <span class="sim-select-markArrow iconfont icon-down-arrow"
            :class="[rotateShow?'sim-select-markArrow-ratate-up':'',rotateHidden?'sim-select-markArrow-ratate-down':'']"></span>
    </div>
    <transition name="simSelectList">
      <div class="sim-select-list"
           v-show="rotateShow">
        <span class="sim-select-list-arrow">^</span>
        <slot></slot>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: "sim-select",
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    value: {
      default: {}
    },
    placeholder: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {
      selectValue: "",
      rotateShow: false,
      rotateHidden: false
    };
  },
  methods: {
    rotate() {
      if (!this.rotateShow) {
        this.rotateShow = true;
        this.rotateHidden = false;
      } else if (!this.rotateHidden) {
        this.rotateHidden = true;
        this.rotateShow = false;
      }
    }
  },
  mounted() {
    this.selectValue = this.placeholder;
    window.addEventListener(
      "click",
      e => {
        let event = e || window.event;

        if (
          event.target.classList[0] === "sim-select-markArrow" ||
          event.target.classList[0] === "sim-select-show"
        ) {
          this.rotate();
        } else {
          this.rotateHidden = true;
          this.rotateShow = false;
        }
      },
      false
    );
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>