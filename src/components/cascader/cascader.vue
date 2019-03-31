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

        <div class="sim-cascader-show-list"
             @click='selectCascader($event)'>
          <sim-cascader-item :options='options'></sim-cascader-item>
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
      cascaderSecond: false,
      cascaderThird: false,
      firstActive: false,
      secondActive: false,
      thirdActive: false
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
    },
    selectCascader(event) {
      let levels = event.target.classList[1];
      if (levels === "sim-cascader-options-first") {
        let firstIndex = event.target.dataset.index;
        this.firstActive = event.target.innerText;
        this.cascaderSecond = this.options[firstIndex].secondLevel;
        this.cascaderThird = false;
      } else if (levels === "sim-cascader-options-second") {
        let secondIndex = event.target.dataset.index;
        this.secondActive = event.target.innerText;
        this.cascaderThird = this.cascaderSecond[secondIndex].thirdLevel;
        if (!this.cascaderThird) {
          this.$emit("select", {
            firstActive: this.firstActive,
            secondActive: this.secondActive
          });
          this.rotate();
        }
      } else if (levels === "sim-cascader-options-third") {
        this.thirdActive = event.target.innerText;
        this.$emit("select", {
          firstActive: this.firstActive,
          secondActive: this.secondActive,
          thirdActive: this.thirdActive
        });
        this.rotate();
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
        } else if (event.target.classList[0] === "sim-cascader-options-label") {
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