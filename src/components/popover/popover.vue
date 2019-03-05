<template>
  <div class="sim-popover"
       @mouseenter="mouseenter($event)"
       @mouseleave="mouseleave($event)"
       @click="click($event)"
       ref="simPopover"
       :class="popoverState?'sim-popover-overflow-show':''">
    <slot name="reference"></slot>
    <div ref="simContent"
         class="sim-popover-content sim-popover-content-top "
         :class="popoverState?'sim-popover-show':''"
         :style="getTransform">
      <div class="sim-popover-container ">
        <span class="sim-popover-title">{{title}}</span>
        <span class="sim-popover-text">{{content}}</span>
        <div class="sim-popover-arrow  "
             :class="locationClassObject">
          <div class="sim-popover-arrow-container "
               :class="directionClassObject">
            <span class="bot"></span><span class="top"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sim-popover",
  props: {
    title: {
      type: String
    },
    content: {
      type: String
    },
    placement: {
      type: String,
      default: "top"
    },
    width: {
      type: String | Number,
      default: "200px"
    },
    type: {
      type: String,
      default: "hover"
    }
  },
  computed: {
    getTransform() {
      return {
        transform: "translate(" + this.translateX + "," + this.translateY + ")",
        width: this.width
      };
    }
  },
  data() {
    return {
      popoverState: false,
      popoverHeight: 0,
      popoverWidth: 0,
      translateX: 0,
      translateY: 0,
      contentHeight: 0,
      locationClassObject: {
        "sim-popover-arrow-location-top": this.placement === "top",
        "sim-popover-arrow-location-top-start": this.placement === "top-start",
        "sim-popover-arrow-location-top-end": this.placement === "top-end",
        "sim-popover-arrow-location-bottom": this.placement === "bottom",
        "sim-popover-arrow-location-bottom-start":
          this.placement === "bottom-start",
        "sim-popover-arrow-location-bottom-end":
          this.placement === "bottom-end",
        "sim-popover-arrow-location-left": this.placement === "left",
        "sim-popover-arrow-location-left-start":
          this.placement === "left-start",
        "sim-popover-arrow-location-left-end": this.placement === "left-end",
        "sim-popover-arrow-location-right": this.placement === "right",
        "sim-popover-arrow-location-right-start":
          this.placement === "right-start",
        "sim-popover-arrow-location-right-end": this.placement === "right-end"
      },
      directionClassObject: {
        "sim-popover-triangle-direction-top":
          this.placement.substring(0, 3) === "top",
        "sim-popover-triangle-direction-left":
          this.placement.substring(0, 4) === "left",
        "sim-popover-triangle-direction-right":
          this.placement.substring(0, 5) === "right",
        "sim-popover-triangle-direction-bottom":
          this.placement.substring(0, 6) === "bottom"
      },
      contentLocationObject: {
        "sim-popover-content-top": this.placement.substring(0, 3) === "top",
        "sim-popover-content-left": this.placement.substring(0, 4) === "left",
        "sim-popover-content-right": this.placement.substring(0, 4) === "right",
        "sim-popover-content-bottom":
          this.placement.substring(0, 6) === "bottom"
      }
    };
  },
  methods: {
    getTranslate() {
      if (this.placement === "top") {
        this.translateX = -(this.width - this.popoverWidth) / 2 + "px";
        this.translateY = this.contentHeight + 10 + "px";
      } else if (this.placement === "top-start") {
        this.translateX = 0 + "px";
        this.translateY = "120%";
      } else if (this.placement === "top-end") {
        this.translateX = -(this.width - this.popoverWidth) + "px";
        this.translateY = "120%";
      } else if (this.placement === "bottom") {
        this.translateX = -(this.width - this.popoverWidth) / 2 + "px";
        this.translateY = -(this.popoverHeight + 20) + "px";
      } else if (this.placement === "bottom-start") {
        this.translateX = 0 + "px";
        this.translateY = -(this.popoverHeight + 20) + "px";
      } else if (this.placement === "bottom-end") {
        this.translateX = -(this.width - this.popoverWidth) + "px";
        this.translateY = -(this.popoverHeight + 20) + "px";
      } else if (this.placement === "left") {
        this.translateX = this.popoverWidth + 20 + "px";
        this.translateY = (this.contentHeight - this.popoverHeight) / 2 + "px";
      } else if (this.placement === "left-start") {
        this.translateX = this.popoverWidth + 20 + "px";
        this.translateY = this.contentHeight - this.popoverHeight + "px";
      } else if (this.placement === "left-end") {
        this.translateX = this.popoverWidth + 20 + "px";
        this.translateY = "0px";
      } else if (this.placement === "right") {
        this.translateX = -this.width - 20 + "px";
        this.translateY = (this.contentHeight - this.popoverHeight) / 2 + "px";
      } else if (this.placement === "right-start") {
        this.translateX = -this.width - 20 + "px";
        this.translateY = this.contentHeight - this.popoverHeight + "px";
      } else if (this.placement === "right-end") {
        this.translateX = -this.width - 20 + "px";
        this.translateY = "0px";
      }
    },
    getWidthAndHeight() {
      this.popoverWidth = this.$refs.simPopover.offsetWidth;
      this.popoverHeight = this.$refs.simPopover.offsetHeight;
      this.contentHeight = this.$refs.simContent.offsetHeight;
      console.log(this.contentHeight);
    },
    mouseenter(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      if (this.type === "hover") {
        this.popoverState = true;
      }
    },
    mouseleave(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      if (this.type === "hover") {
        this.popoverState = false;
      }
    },
    click(event) {
      event.stopPropagation();
      event.cancelBubble = true;
      if (this.type === "click") {
        this.popoverState = !this.popoverState;
      }
    }
  },
  mounted() {
    this.getWidthAndHeight();
    this.getTranslate();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>