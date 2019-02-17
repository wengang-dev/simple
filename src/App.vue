<template>
  <div id="app">
    <sim-input-number size='large'
                      v-model="number"
                      :max="max"
                      :step="step"
                      :min="min"></sim-input-number>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      number: 0,
      max: 10,
      min: 0,
      step: 2
    };
  },
  watch: {
    selectList(val) {
      // console.log("selectList value:", val);
    }
  },
  methods: {
    click() {
      alert("click");
    }
  }
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
