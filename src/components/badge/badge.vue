<template>
  <div class=' sim-badge'
       @click="click">
    <!-- <slot></slot> -->
    <span>消息</span>
    <span class="sim-badge-message-account"
          :class="type==='primary'?'sim-badge-message-primary':type==='warning'?'sim-badge-message-warning':'sim-badge-message-normal'"
          v-text="messageAccount"></span>
  </div>
</template>

<script>
export default {
  name: "sim-badge",
  props: {
    max: {
      type: String | Number,
      default: 99
    },
    value: {
      type: String | Number
    },
    type: {
      type: String,
      default: "normal"
    }
  },
  data() {
    return {};
  },
  computed: {
    messageAccount() {
      if (this.value > this.max) {
        return this.max + "＋";
      } else {
        return this.value;
      }
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang='less' scoped>
</style>
