<template>
  <div id="app">
    <sim-select v-model="value"
                size='normal'>
      <sim-options v-for="item in options"
                   :key="item.label"
                   :label="item.label"
                   :value="item.value"></sim-options>
    </sim-select>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: [
        { label: "1", value: "value1" },
        { label: "2", value: "value2" },
        { label: "3", value: "value3" }
      ],
      value: ""
    };
  },
  watch: {
    value(val) {}
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
