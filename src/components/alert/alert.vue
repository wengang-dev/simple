<template>
  <transition name="sim-alert">
    <div class='sim-alert'
         v-show="alertShow"
         :style="{textAlign:typeof center==='undefined'?'left':'center'}"
         :class="type==='success'?'sim-alert-type-success':type==='warning'?'sim-alert-type-warning':type==='error'?'sim-alert-type-error':'sim-alert-type-info'">
      <span class="iconfont sim-alert-noticeIcon"
            :class="[type==='success'?'icon-alert-success':type==='warning'?'icon-alert-warning':type==='error'?'icon-alert-error':'icon-alert-info',
          typeof description !=='undefined'?'sim-alert-noticeIcon_bold':'']"></span>
      <div class="sim-alert-content">

        <span class="sim-alert-content-title"
              :class="typeof description !=='undefined'?'sim-alert-content-title_bold':''">{{title}}</span>
        <span class="sim-alert-content-text">{{description}}</span>

      </div>
      <div class="sim-alert-close"
           @click="close"><span v-if="closeable"
              class="sim-alert-close-text">{{closeText}}</span></div>
    </div>
  </transition>

</template>

<script>
export default {
  name: "sim-alert",
  props: {
    type: {
      type: String,
      default: "info"
    },
    title: {
      type: String | Number
    },
    description: {
      type: String | Number
    },
    closeText: {
      type: String | Number,
      default: "×"
    },
    closeable: {
      type: Boolean,
      default: true
    },
    center: {}
  },
  data() {
    return { alertShow: true };
  },
  methods: {
    close() {
      this.alertShow = false;
    }
  }
};
</script>

<style lang='less' scoped>
</style>
