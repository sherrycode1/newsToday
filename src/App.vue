<template>
  <div id="app">
    <tab-control></tab-control>
    <!-- <router-view></router-view> -->
    <hot-chart></hot-chart>
  </div>
</template>

<script>
import HotChart from './components/common/hotchart/hotChart.vue';
import TabControl from "./components/content/tabcontrol/tabControl.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TabControl,
    HotChart,
  },
};
</script>

<style>
</style>
