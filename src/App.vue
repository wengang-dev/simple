<template>
  <div id="app">
    <sim-steps space="200"
               active='3'>
      <sim-step-item title='步骤一'
                     desc="这是一段很长很长很长的描述性文字"></sim-step-item>
      <sim-step-item title='步骤二'
                     desc="这是一段很长很长很长的描述性文字"></sim-step-item>
      <sim-step-item title='步骤三'
                     desc="这一段没那么长"></sim-step-item>
    </sim-steps>
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
