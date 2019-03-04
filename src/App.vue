<template>
  <div id="app">
    <sim-dropdown size="mini"
                  @commond='click'>
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
      list: ["肉包子", "狮子头", "土豆卷", "红烧鱼", "辣子鸡"]
    };
  },
  watch: {},
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
</style>
