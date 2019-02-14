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
  computed: {},
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
    selectlist: {
      type: Array
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
        let newValue = this.selectList;
        console.log("Array is? ", Array.isArray(this.selectList));
        let index = newValue.indexOf(this.label);
        if (index === -1) {
          newValue.push(label);
        } else {
          newValue.slice(index, index + 1);
        }
        this.$parent.$emit("change", newValue);
      }
    }
  },
  mounted() {
    if (this.value === true) {
      this.selectState = true;
    }
    console.log("", this.$props);
  }
};
</script>

<style lang='less' type='text/css'>
</style>