<template>
  <span class="sim-checkbox"
        :class="[disabled===undefined?'sim-checkbox-normal':'sim-checkbox-disabled '
        ]"
        @click="change($event)">
    <span class="sim-checkbox-graph"
          :class="[disabled===undefined?'':'sim-checkbox-graph-disabled',
          selectState&&disabled===undefined?'sim-checkbox-graph-active':''
          ]"
          v-text="selectText"></span>
    <span class="sim-checkbox-text"
          :class="selectState&&disabled===undefined?'sim-checkbox-text-active':''">
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
  computed: {
    // 获取parent的v-model绑定属性
    parentVlaue() {
      return this.$parent.selectList;
    }
  },
  props: {
    disabled: {
      type: undefined | null,
      default: undefined
    },
    value: {
      type: Boolean | Array
    },
    label: {
      type: String,
      default: ""
    },
    selected: {
      type: undefined | null
    }
  },
  watch: {
    selectState(val) {
      if (val) {
        this.selectText = "√";
      } else {
        this.selectText = "";
      }
    }
  },
  methods: {
    change(event) {
      if (this.disabled !== undefined) {
        return;
      }
      this.selectState = !this.selectState;
      // event.stopPropagation();
      event.preventDefault();
      // event.cancleBubble = true;
      event.returnValue = false;
      let val = null;
      if (!this.label) {
        // 代表使用的是chekbox
        val = !this.value;
        this.$emit("change", val);
      } else {
        // 代表使用的是checkbox-group
        this.insertOrRmemove();
      }
    },
    insertOrRmemove() {
      let newValue = this.parentVlaue;
      let index = newValue.indexOf(this.label);
      if (index === -1) {
        newValue.push(this.label);
      } else {
        newValue.splice(index, 1);
      }
      this.$parent.$emit("change", newValue);
    }
  },

  mounted() {
    // 单独使用checkbox情况下
    if (this.value === true) {
      this.selectState = true;
    }

    // 包含在checkbox group里
    // console.log(this.selected == "");
    if (this.selected !== undefined) {
      this.selectState = true;
      let newValue = this.parentVlaue;
      let index = newValue.indexOf(this.label);
      if (index === -1) {
        newValue.push(this.label);
        this.$parent.$emit("change", newValue);
      }
    }
  }
};
</script>

<style lang='less' type='text/css'>
</style>