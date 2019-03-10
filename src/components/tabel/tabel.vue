<template>
  <div class="sim-table sim-table-box-position"
       :style="{width:width,paddingTop:typeof height!=='undefined'?'44px':''}">
    <slot></slot>
    <table class="sim-table-head"
           :class="typeof height!=='undefined'?'sim-table-head-fixed':''"
           ref="simTabHead">
      <tr :class="typeof border!=='undefined'?'sim-table-head-tr-border':'sim-table-head-tr'">
        <td class="sim-table-head-td"
            :class="typeof border!=='undefined'?'sim-table-head-td-border':''"
            v-for="(label,index) in labelColumn"
            :key="index"
            :style="{width:widthColumn[index]?widthColumn[index]+'px':''}">
          <div>{{label}}</div>
        </td>
      </tr>
    </table>
    <div class="sim-table-box"
         :style="{height:height}"
         :class="typeof border!=='undefined'?'sim-table-box-border':''">
      <table class="sim-table-content"
             :style="{}">
        <tr v-for="(item,index) in data"
            class="sim-table-content-tr"
            :class="[typeof stripe!=='undefined'&&index%2===0?'sim-table-content-tr-stripe':'']"
            :key="index">
          <td v-for="(prop,index) in propColumn"
              class="sim-table-content-td"
              :class="typeof border!=='undefined'?'sim-table-td-border':''"
              :key="index"
              :style="{width:widthColumn[index]?widthColumn[index]+'px':''}">
            <div>{{item[prop]}}</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "sim-table",
  props: {
    data: {
      type: Array
    },
    width: {
      type: String,
      default: "100%"
    },
    border: {},
    stripe: {},
    height: {
      type: String
    }
  },
  data() {
    return {
      // 列的属性
      propColumn: [],
      // 列的名称
      labelColumn: [],
      // 列的宽度
      widthColumn: [],
      // 头部高度
      simTableHeight: null
    };
  },
  methods: {
    updateTableColumn(prop, label, width) {
      this.propColumn.push(prop);
      this.labelColumn.push(label);
      this.widthColumn.push(width);
    },
    getSimTableHeight() {
      this.simTableHeight = this.$refs.simTabHead.clientHeight;
      console.log(this.simTableHeight);
    }
  },
  mounted() {
    this.getSimTableHeight();
  }
};
</script>

<style lang='less' scoped type='text/css'>
</style>