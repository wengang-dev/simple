<template>
  <div class="sim-tab">
    <sim-tab-item v-for="index in 5"
                  :key="index">
      <template v-slot:default="slotProps">
        <div>
          {{ slotProps.user.firstName }} gang
        </div>

      </template>
    </sim-tab-item>
  </div>
</template>

<script>
import simTabBar from "../tabBar/tabBar";
import simTabItem from "../tabItem/tabItem";
export default {
  name: "sim-tab",
  data() {
    return {};
  },
  components: {
    simTabBar,
    simTabItem
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.sim-tabs {
  width: 100px;
  height: 100px;
  background: green;
}
</style>

