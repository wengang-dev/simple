<template>
  <span class="sim-checkbox"
        :class="[disabled===undefined?'sim-checkbox-normal':'sim-checkbox-disabled '
        ]"
        @click="change($event)">
    <span class="sim-checkbox-graph"
          :class="[disabled===undefined?'':'sim-checkbox-graph-disabled',
          selectState?'sim-checkbox-graph-active':''
          ]">{{selectText}}</span>
    <span class="sim-checkbox-text"
          :class="selectState?'sim-checkbox-text-active':''">
      <slot></slot>
    </span>
  </span>
</template>

<script type='text/ecmascript-6'>
export default {
  name: "sim-checkbox",
  data() {
    return {
      selectText: "",
      selectState: false
    };
  },
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    disabled: {
      type: undefined | null,
      default: undefined
    },
    value: {
      type: Boolean | Array,
      default: false
    },
    label: {
      type: String,
      default: ""
    }
  },
  methods: {
    change(event) {
      if (this.disabled !== undefined) {
        return;
      }
      this.selectState = !this.selectState;
      if (this.selectState) {
        this.selectText = "√";
      } else {
        this.selectText = "";
      }
      event.stopPropagation();
      event.preventDefault();
      event.cancleBubble = true;
      event.returnValue = false;
      let val = null;
      if (!this.label) {
        // 代表使用的是chekbox
        val = !this.value;
        console.log("label: ", this.label);
      } else {
        // 代表使用的是checkbox-group
        let index = this.value.indexOf(this.label);
        val = this.value;
        if (index !== -1) {
          val.slice(index, index + 1);
        } else {
          val.push(this.label);
        }
      }
      this.$emit("change", val);
    }
  }
};
</script>

<style lang='less' type='text/css'>
</style>