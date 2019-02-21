<template>
  <div id="app">
    <sim-slider>

    </sim-slider>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
