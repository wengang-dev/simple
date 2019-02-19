<template>
  <div id="app">
    <sim-cascader v-model="value"
                  :options="firstValue">

    </sim-cascader>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      firstValue: [
        {
          firstName: "一级选项1",
          secondLevel: [
            {
              secondName: "二级选项1",
              thirdLevel: [{ thirdName: "三级选项1" }]
            }
          ]
        },
        {
          firstName: "一级选项2",
          secondLevel: [
            {
              secondName: "二级选项2",
              thirdLevel: [
                { thirdName: "三级选项21" },
                { thirdName: "三级选项22" },
                { thirdName: "三级选项23" },
                { thirdName: "三级选项24" },
                { thirdName: "三级选项25" },
                { thirdName: "三级选项26" },
                { thirdName: "三级选项27" },
                { thirdName: "三级选项28" },
                { thirdName: "三级选项29" }
              ]
            }
          ]
        },
        {
          firstName: "一级选项3",
          secondLevel: [
            {
              secondName: "二级选项3",
              thirdLevel: [
                { thirdName: "三级选项31" },
                { thirdName: "三级选项32" }
              ]
            }
          ]
        }
      ]
    };
  },
  watch: {
    value(val) {
      console.log(val);
    }
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
