<template>
  <div class='sim-pagination'
       :class="typeof small ==='undefined'?'':'sim-pagination-small'">
    <span class="sim-pagination-prev"
          :class="activePage==1?'sim-pagination-disabled':''"
          @click="pageDown"><span class="sim-pagination-arrow-text">&lt;</span> </span>
    <div class="sim-page-box">
      <span v-for="(item,index) in showAccount"
            class="sim-page-span"
            :key="item"
            @click="jump(pageShowText(item,index),index)">
        <span class="sim-page-span-text"
              :class="[pageShowText(item,index)===activePage?typeof background!=='undefined'?'sim-page-active-background':'sim-page-active':'',typeof background!=='undefined'?'sim-page-span-background':'']"
              v-text="pageShowText(item,index)"></span>
      </span>
    </div>
    <span class="sim-pagination-next "
          :class="activePage==total?'sim-pagination-disabled':''"
          @click="pageUp"><span class="sim-pagination-arrow-text">&gt;</span> </span>
  </div>
</template>

<script>
export default {
  name: "sim-pagination",
  props: {
    pageCount: {
      type: String | Number,
      default: 9
    },
    background: {},
    small: {},
    total: {
      type: String | Number
    }
  },
  data() {
    return {
      activePage: 1,
      showAccount: 0,
      baseAccount: 0,
      diff: 0,
      oldActiveIndex: -1
    };
  },
  computed: {},
  methods: {
    pageShowText(page, index) {
      if (
        this.activePage >= this.diff &&
        this.activePage <= this.total - this.diff
      ) {
        if (index == 0) {
          return 1;
        }
        if (index == 1 || index == this.showAccount - 2) {
          return "...";
        } else if (index == this.showAccount - 1) {
          return this.total;
        } else {
          return this.baseAccount + page;
        }
      } else {
        if (this.activePage < this.diff) {
          if (index == 0) {
            return 1;
          }
          if (index == this.showAccount - 2) {
            return "...";
          }
          if (index == this.showAccount - 1) {
            return this.total;
          }
          return this.baseAccount + page;
        } else if (this.activePage > this.total - this.diff) {
          if (index == 1) {
            return "...";
          }
          if (index == 0) {
            return 1;
          }
          if (index == this.showAccount - 1) {
            return this.total;
          }
          return this.total + page - this.showAccount;
        }
      }
    },
    jump(activeIndex) {
      if (activeIndex >= this.diff) {
        this.baseAccount = activeIndex - this.diff;
      } else {
        this.baseAccount = 0;
      }
      this.activePage = activeIndex;
    },
    pageDown() {
      if (this.activePage > 1) {
        this.activePage--;
        if (this.activePage >= this.diff) {
          this.baseAccount--;
        }
      }
    },
    pageUp() {
      if (this.activePage < this.total) {
        if (this.activePage >= this.diff) {
          this.baseAccount++;
        }
        this.activePage++;
      }
    }
  },
  mounted() {
    this.showAccount = this.pageCount;
    if (this.pageCount % 2 == 0) {
      this.diff = this.pageCount / 2;
    } else {
      this.diff = (this.pageCount + 1) / 2;
    }
  }
};
</script>

<style lang='less' scoped>
</style>
