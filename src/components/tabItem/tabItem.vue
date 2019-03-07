<template>
  <div class='sim-tab-item'>
    <slot v-bind:user="user">
      {{ user.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "sim-tab-item",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      user: {
        firstName: "文",
        lastName: "刚"
      }
    };
  },
  components: {},
  methods: {
    click() {
      this.$parent.$emit("handclick");
    }
  }
};
</script>

<style lang='less' scoped>
</style>
