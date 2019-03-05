<template>
  <div id="app">
    <div class="container">
      <sim-collapse></sim-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: ["肉包子", "狮子头", "土豆卷", "红烧鱼", "辣子鸡"]
    };
  },
  watch: {},
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
</style>
