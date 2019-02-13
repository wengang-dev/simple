<<<<<<< HEAD
<template>
  <div class="inputContainer">
    <slot name="before">test slotaaa</slot>
    <input class="sim-input "
           :class="[
                    disabled=='undefined'?'':'sim-input-disbaled',
                    slotBefore?'sim-input-before':'',
                    slotAfter?'sim-input-after':''
                  ]"
           :type="type"
           :value="value"
           :placeholder="placeholder"
           @input="input($event.target.value)"
           :disabled="disabled">
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "simInput",
  props: {
    value: {
      type: String | Number,
      default: ""
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    slotBefore: {
      type: String
    },
    slotAfter: {
      type: String
    }
  },
  data() {
    return {};
  },
  computed: {
    slotBefore() {
      if (this.$slots.before) {
        return true;
      } else {
        return false;
      }
    },
    slotAfter() {
      if (this.$slots.after) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style lang='less' scoped>
.inputContainer {
  display: inline-block;
  font-size: 0px;
}
</style>
=======
<template>
  <div class="inputContainer">
    <!-- sloted?'':sloted=='before'?'sim-input-before':'sim-input-after' -->
    <slot name="before">test slotaaa</slot>
    <input class="sim-input "
           :class="[
                    disabled=='undefined'?'':'sim-input-disbaled',
                    
                  ]"
           :type="type"
           :value="value"
           :placeholder="placeholder"
           @input="input($event.target.value)"
           :disabled="disabled">
    <slot name="after"></slot>
  </div>
</template>

<script>
export default {
  name: "simInput",
  props: {
    value: {
      type: String | Number,
      default: ""
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    slotBefore: {
      type: String
    },
    slotAfter: {
      type: String
    }
  },
  data() {
    return {};
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    }
  },
  mounted() {
    console.log("slotBefore: ", this.slotBefore);
    console.log("slotAfter: ", this.slotAfter);
  }
};
</script>

<style lang='less' scoped>
.inputContainer {
  display: inline-block;
}
</style>
>>>>>>> 47f944f15ec30873c4759cf1ceff4a72b4fd6800
