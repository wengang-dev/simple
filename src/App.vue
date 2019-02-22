<template>
  <div id="app">
    <div class="slider-box">
      <sim-slider v-model="value">
      </sim-slider>
    </div>

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

<style scoped>
.slider-box {
  width: 800px;
  height: 20px;
  margin: 200px auto;
}
</style>
