<template>
  <div id="app">
    <sim-switch v-model="value"
                textActive="未选择"
                textInactive="要选中"
                colorInactive="#13ce66"
                colorActive="#ff4949">

    </sim-switch>
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
