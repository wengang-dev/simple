<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  watch: {},
  methods: {
    click() {
      // alert("click");
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
</style>
