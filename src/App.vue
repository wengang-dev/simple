<template>
  <div id="app">
    <sim-checkbox-group v-model="selectList">
      <template slot-scope="props">
        <sim-checkbox label="选项一">选项1</sim-checkbox>
        <sim-checkbox label=“选项二”>选项2</sim-checkbox>
      </template>
    </sim-checkbox-group>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectList: ["1"]
    };
  },
  watch: {
    selectList(val) {
      // console.log("fater value:", val);
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
