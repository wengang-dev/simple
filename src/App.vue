<template>
  <div id="app">
    <sim-alert title="成功提示的文案"
               type="error"
               description="这是辅助文案"
               :closeable='false'></sim-alert>
    <!-- closeText="知道了" -->

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
