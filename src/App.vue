<template>
  <div id="app">
    <sim-input v-model="value"
               placeholder="forbid"
               disabled>
      <sim-btn slot="before"></sim-btn>
      <sim-btn slot="after"></sim-btn>
    </sim-input>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      sloted: "before"
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
