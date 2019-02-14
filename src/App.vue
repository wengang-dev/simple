<template>
  <div id="app">
    <sim-checkbox v-model="value"
                  disabled>选项</sim-checkbox>
    <sim-checkbox v-model="value">选项</sim-checkbox>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: false
    };
  },
  watch: {
    value(val) {
      console.log("fater value:", val);
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
