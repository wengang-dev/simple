<template>
  <div id="app">
    <sim-dropdown>
      <span>下拉列表</span>
      <sim-dropdown-menu slot="slot">
        <sim-dropdown-item v-for="(item,index) in list"
                           :key="index"><span>{{item}}</span> </sim-dropdown-item>
      </sim-dropdown-menu>
    </sim-dropdown>
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
  padding-top: 100px;
}
</style>
