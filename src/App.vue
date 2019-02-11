<template>
  <div id="app">
    <btn v-bind="options1">按钮测试</btn>
    <btn v-bind="options2">按钮测试</btn>
    <btn v-bind="options3">按钮测试</btn>
    <btn @click="click">按钮测试</btn>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options1: {
        size: "small"
      },
      options2: {
        size: "middle",
        type: "success"
      },
      options3: {
        size: "large",
        type: "warn",
        disabled: true
      }
    };
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
