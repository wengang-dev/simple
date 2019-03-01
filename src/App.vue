<template>

  <div id="app"
       v-loading='true'>
    <!-- <sim-alert title="成功提示的文案"
               type="error"
               description="这是辅助文案"
               :closeable='true'
               v-loading='true'></sim-alert>
    <br>
    <sim-alert title="成功提示的文案"
               type="info"
               description="这是辅助文案"
               :closeable='true'></sim-alert>
    <br>
    <sim-alert title="成功提示的文案"
               type="success"
               description="这是辅助文案"
               :closeable='true'></sim-alert>
    <br>
    <sim-alert title="成功提示的文案"
               type="warning"
               description="这是辅助文案"
               :closeable='true'></sim-alert> -->
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
  width: 400px;
  height: 200px;
  margin: 100px auto;
  background: black;
}
</style>
