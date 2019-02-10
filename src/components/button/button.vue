<template>
  <button class="btn">
    <span>less test</span>
    <slot></slot>
  </button>
</template>

<script>
import "./button.less";
export default {
  name: "btn",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang='less' scoped>
// .btn {
//   width: 100px;
//   height: 30px;
//   background: lightblue;
//   color: #ffffff;
//   span {
//     color: green;
//     background: yellow;
//   }
// }
</style>
