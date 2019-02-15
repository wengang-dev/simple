<template>
  <div id="app">
    <sim-checkbox-group v-model="selectList">
      <sim-checkbox selected
                    label="a">选项1</sim-checkbox>
      <sim-checkbox label=“b”>选项2</sim-checkbox>
      <sim-checkbox label=“c”>选项3</sim-checkbox>
      <sim-checkbox label=“d”>选项4</sim-checkbox>
      <sim-checkbox label=“e”>选项5</sim-checkbox>
    </sim-checkbox-group>

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
