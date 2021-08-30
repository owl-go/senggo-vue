<template>
  <div>
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Page2",
  data() {
    return {
      myChart: null,
      list: [
        {
          name: "衬衫",
          xl: 5,
        },
        {
          name: "羊毛衫",
          xl: 20,
        },
        {
          name: "雪纺衫",
          xl: 36,
        },
        {
          name: "裤子",
          xl: 10,
        },
        {
          name: "高跟鞋",
          xl: 50,
        },
        {
          name: "袜子",
          xl: 20,
        },
      ],
    };
  },

  mounted() {
    this.myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    this.myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: this.list.map((r) => r.name),
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: this.list.map((r) => r.xl),
        },
      ],
    });
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>