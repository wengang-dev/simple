<template>
  <div id="app">
    <sim-pagination total='20'
                    background
                    small>

    </sim-pagination>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
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
</style>
