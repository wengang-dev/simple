<template>
  <div id="app">
    <sim-rate showText
              :colors="colors"></sim-rate>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      value: false,
      textActive: "",
      textInactive: "",
      colorInactive: "",
      colorActive: ""
    };
  },
  watch: {
    value(val) {
      // console.log("app value: ", val);
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
