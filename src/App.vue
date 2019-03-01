<template>
  <div id="app">
    <sim-carousel>
    </sim-carousel>
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
  height: 400px;
  margin: 0 auto;
}
</style>
