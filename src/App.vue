<template>
  <div id="app">
    <sim-tab type='card'
             v-model="value">
      <sim-tab-item label="用户管理"
                    name="first">
        用户管理
      </sim-tab-item>
      <sim-tab-item label="配置管理"
                    name="second">
        配置管理
      </sim-tab-item>
      <sim-tab-item label="角色管理"
                    name="third">
        角色管理
      </sim-tab-item>
      <sim-tab-item label="定时任务补偿"
                    name="four">
        定时任务补偿
      </sim-tab-item>
    </sim-tab>
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
</style>
