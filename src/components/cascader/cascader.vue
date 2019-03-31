<template>
  <div class="sim-cascader"
       :class="[rotateShow?'sim-cascader-active':'']">
    <div class="sim-cascader-show"><span class="sim-cascader-show-value">{{value.label}}</span>
      <span class="sim-cascader-markArrow iconfont icon-down-arrow"
            :class="[rotateShow?'sim-cascader-markArrow-ratate-up':'',rotateHidden?'sim-cascader-markArrow-ratate-down':'']"></span>
    </div>
    <transition name="simcascaderList">
      <div class="sim-cascader-list"
           v-show="rotateShow">

        <div class="sim-cascader-show-list">
          <sim-cascader-item :options='options'
                             :cascader-index='cascaderIndex'></sim-cascader-item>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import simCascaderItem from "../cascaderItem/cascaderItem";
export default {
  name: "sim-cascader",
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    value: {},
    options: {
      default: {}
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selectValue: "",
      rotateShow: false,
      rotateHidden: false,
      cascaderIndex: 0
    };
  },
  components: {
    simCascaderItem
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
        if (event.target.classList[0] === "sim-cascader-show") {
          this.rotate();
        } else if (
          event.target.classList[0] !== "sim-cascader-item-show-list-li"
        ) {
          this.rotateShow = false;
          this.rotateHidden = true;
        }
      },
      false
    );
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>