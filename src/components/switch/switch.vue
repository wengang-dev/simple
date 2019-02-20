<template>
  <div class="sim-switch">
    <span class="sim-switch-label-inactive"
          v-show="text_inactive "
          :class="!state?'sim-switch-label-active-color':''"
          v-text="textActive"></span>
    <span @click="select"
          class="sim-switch-core"
          :style="{background:bg_color}">
      <span class="sim-switch-point"
            :class="state?'sim-switch-point-active':'sim-switch-point-inactive'"></span>
    </span>
    <span class="sim-switch-label-active"
          v-show="text_active"
          :class="state?'sim-switch-label-active-color':''"
          v-text="textInactive"></span>
    <div>dbasibcias</div>
  </div>
</template>

<script>
export default {
  name: "sim-switch",
  model: {
    prop: "value",
    event: "select"
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    colorActive: {
      type: String,
      default: "#409EFF"
    },
    colorInactive: {
      type: String,
      default: "#dcdfe6"
    },
    textActive: {
      type: String | Number | Boolean
    },
    textInactive: {
      type: String | Number | Boolean
    }
  },
  computed: {
    bg_color() {
      if (this.state) {
        return this.colorActive;
      } else {
        return this.colorInactive;
      }
    },
    text_inactive() {
      if (typeof this.textInactive !== "undefined") {
        console.log("text_inactive");
        return true;
      } else {
        return false;
      }
    },
    text_active() {
      if (typeof this.textActive !== "undefined") {
        return true;
      } else {
        return false;
      }
    }
  },
  data() {
    return {
      state: false
    };
  },
  methods: {
    select() {
      this.$emit("select", !this.value);
      this.state = !this.state;
    }
  },
  mounted() {
    if (this.value) {
      this.state = true;
    }
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>