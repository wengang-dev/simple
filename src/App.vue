<template>
  <div id="app">
    <sim-input-number></sim-input-number>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectList: []
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
