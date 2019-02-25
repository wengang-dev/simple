<template>
  <div id="app">
    <sim-rate showText
              v-model="value"
              :colors="colors"
              :icon-classes='iconClasses'></sim-rate>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      value: "init",
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
