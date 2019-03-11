<template>
  <div id="app">
    <!-- <sim-cascader :options="options"></sim-cascader> -->
    <sim-popover title='提示标题'
                 placement='top'
                 content="这是一段内容，这是一段内容">
      <sim-btn slot="reference">悬浮按钮</sim-btn>
    </sim-popover>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: []
    };
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
.span {
  display: inline-block;
  width: 40px;
  height: 40px;
  font-size: 14px;
}
</style>
