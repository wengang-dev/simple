<template>
  <div id="app">
    <sim-carousel height="400px">
      <sim-carousel-item v-for="item in list"
                         :key="item">
        <h2>item</h2>
      </sim-carousel-item>
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
  height: 200px;
  margin: 0 auto;
}
</style>
