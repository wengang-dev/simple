<template>
  <div id="app">

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
  watch: {},
  methods: {
    animation() {
      this.value++;
      if (this.value < 100) {
        window.requestAnimationFrame(this.animation);
      }
    },
    start() {
      window.requestAnimationFrame(this.animation);
    },
    reset() {
      this.value = 0;
    }
  }
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
