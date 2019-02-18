<template>
  <div class="sim-cascader"
       :class="[rotateShow?'sim-cascader-active':'',size==='normal'?'sim-cascader-size-normal':'sim-cascader-size-small']">
    <div class="sim-cascader-show"><span class="sim-cascader-show-value">{{value.label}}</span>
      <span class="sim-cascader-markArrow iconfont icon-down-arrow"
            :class="[rotateShow?'sim-cascader-markArrow-ratate-up':'',rotateHidden?'sim-cascader-markArrow-ratate-down':'']"></span>
    </div>
    <transition name="simcascaderList">
      <div class="sim-cascader-list"
           v-show="rotateShow">
        <span class="sim-cascader-list-arrow">^</span>

      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "sim-cascader",
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
          event.target.classList[0] === "sim-cascader-markArrow" ||
          event.target.classList[0] === "sim-cascader-show"
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