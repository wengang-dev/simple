<template>
  <div id="app">
    <sim-popover title='标题'
                 content='这是一段提示性的文字!这是一段提示性的文字!这是一段提示性的文字!'
                 placement='left'
                 type="click"
                 width='100px'>
      <sim-btn slot="reference">popover</sim-btn>
    </sim-popover>
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
