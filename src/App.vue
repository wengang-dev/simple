<template>
  <div id="app">
    <sim-radio v-model="checked"
               label='1' />
    <sim-radio v-model="checked"
               label='2' />
    <sim-radio v-model="checked"
               label='3'
               disabled>单选项</sim-radio>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      checked: "1",
      sloted: "before"
    };
  },
  watch: {
    checked(val) {
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
