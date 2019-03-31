<template>
  <div id="app">
    <sim-breadcrumb separator='/'>
      <!-- separator-class='icon-carousel-next' -->
      <sim-breadcrumb-item to='{path:/}'>首页</sim-breadcrumb-item>
      <sim-breadcrumb-item>活动列表</sim-breadcrumb-item>
      <sim-breadcrumb-item>活动详情</sim-breadcrumb-item>
    </sim-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      state: false
    };
  },
  watch: {
    value(val) {
      console.log(val);
    }
  },
  methods: {
    click() {
      this.state = true;
    },
    close() {
      this.state = false;
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
  background: white;
}
.container {
  width: 300px;
}
.btn-container {
  text-align: center;
}
</style>
