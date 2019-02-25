<template>
  <div id="app">
    <sim-process :percentage="50"></sim-process>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      value: 0,
      textActive: "",
      textInactive: "",
      colorInactive: "",
      colorActive: "",
      iconClasses: ["icon-face-sad", "icon-face-normal", "icon-face-happy"]
    };
  },
  watch: {
    value(val) {
      console.log("app value: ", val);
    }
  },
  methods: {}
};
</script>

<style scoped>
#app {
  text-align: center;
  padding: 100px;
}
.slider-box {
  width: 800px;
  height: 20px;
  margin: 200px auto;
}
</style>
