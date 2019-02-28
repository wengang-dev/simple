<template>
  <div id="app">
    <sim-badge value='1'
               @click="click"
               type='primary'>
    </sim-badge>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  watch: {},
  methods: {
    click() {
      // alert("click");
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  height: 700px;
  text-align: center;
  padding-top: 100px;
}
</style>
