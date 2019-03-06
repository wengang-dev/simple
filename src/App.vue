<template>
  <div id="app">
    <div class="container">
      <sim-collapse v-model="value"
                    accordion>
        <sim-collapse-item title="我是标题!"
                           name='1'>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </sim-collapse-item>
        <sim-collapse-item title="我是标题!"
                           name='2'>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </sim-collapse-item>
        <sim-collapse-item title="我是标题!"
                           name='3'>
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </sim-collapse-item>
      </sim-collapse>
    </div>
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
</style>
