<template>
  <div id="app">
    <sim-dialog :visible='state'></sim-dialog>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      state: true
    };
  },
  watch: {
    value(val) {
      console.log(val);
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
  width: 800px;
  height: 200px;
  margin: 0 auto;
  padding-top: 100px;
  background: white;
}
.container {
  width: 300px;
}
.span {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 14px;
}
</style>
