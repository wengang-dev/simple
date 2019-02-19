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
        <span class="sim-cascader-list-arrow">^</span>
        <div class="sim-cascader-show-list"
             @click='selectCascader($event)'>
          <div class="sim-cascader-first">
            <div class="sim-cascader-options "
                 v-for="(item,index) of options"
                 :key='item.firstName'
                 :class="firstActive===item.firstName?'sim-cascader-options-active':''">
              <span class="sim-cascader-options-label sim-cascader-options-first"
                    :data-index="index">{{item.firstName}}</span>
            </div>
          </div>
          <div class="sim-cascader-second"
               v-if="cascaderSecond">
            <div class="sim-cascader-options "
                 v-for="(item,index) of cascaderSecond"
                 :key="index"
                 :class="secondActive===item.secondName?'sim-cascader-options-active':''">
              <span class="sim-cascader-options-label sim-cascader-options-second"
                    :data-index="index">{{item.secondName}}</span>
            </div>
          </div>
          <div class="sim-cascader-third"
               v-if="cascaderThird">
            <div class="sim-cascader-options "
                 v-for="(item,index) of cascaderThird"
                 :key="index"
                 :class="thirdActive===item.thirdName?'sim-cascader-options-active':''">
              <span class="sim-cascader-options-label sim-cascader-options-third"
                    :data-index='index'>{{item.thirdName}}</span>
            </div>
          </div>
        </div>
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