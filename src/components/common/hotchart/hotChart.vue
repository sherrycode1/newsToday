<template>
  <div>
    <hot-chart-nav title="头条热榜"></hot-chart-nav>
    <hot-chart-item></hot-chart-item>
  </div>
</template>

<script>
import HotChartItem from './hotChartItem.vue'
import hotChartNav from './hotChartNav.vue'

export default {
  components: { hotChartNav, HotChartItem },
  name: '',
  data () {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>