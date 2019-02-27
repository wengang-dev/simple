<template>
  <div id="app">
    <sim-pagination :total='12'></sim-pagination>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
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
  height: 700px;
  text-align: center;
}
</style>
