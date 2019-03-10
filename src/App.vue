<template>
  <div id="app">
    <sim-carousel>
      <sim-carousel-item>
        <div class="one"></div>
      </sim-carousel-item>
      <sim-carousel-item>
        <div class="two"></div>
      </sim-carousel-item>
      <sim-carousel-item>
        <div class="three"></div>
      </sim-carousel-item>
      <sim-carousel-item>
        <div class="four"></div>
      </sim-carousel-item>
      <sim-carousel-item>
        <div class="five"></div>
      </sim-carousel-item>
    </sim-carousel>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "角色管理"
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
.one {
  background: red;
  height: 100%;
}
.two {
  background: green;
  height: 100%;
}
.three {
  background: yellow;
  height: 100%;
}
.four {
  background: blue;
  height: 100%;
}
.five {
  background: purple;
  height: 100%;
}
</style>
