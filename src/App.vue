<template>
  <div id="app">

    <sim-slider v-model="value"></sim-slider>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      sex: ""
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
