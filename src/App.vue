<template>
  <div id="app">
    <sim-pagination :total="20"
                    :pageCount="7"
                    background></sim-pagination>
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
