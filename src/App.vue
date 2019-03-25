<template>
  <div id="app">
    <sim-dialog :visible='state'
                @close='close'>
      <span>我是一段提示文字！！</span>
      <div slot='footer'
           class="btn-container">
        <sim-btn size='mini'
                 @click="close">取消</sim-btn>
        <sim-btn size='mini'
                 @click="close"
                 type='info'>确定</sim-btn>
      </div>
    </sim-dialog>
    <button @click="click">click</button>
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
