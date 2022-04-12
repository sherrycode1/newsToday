<template>
  <div class="nav">
    <el-menu
      :default-active="activeIndex"
      class="tab-control"
      mode="horizontal"
      @select="handleSelect"
      active-text-color="#F04142"
      text-color="#222222"
    >
      <el-menu-item index="1">关注</el-menu-item>

      <el-menu-item index="2">推荐</el-menu-item>

      <el-menu-item index="3">热点</el-menu-item>
      <el-submenu index="4">
        <template slot="title">北京</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template slot="title">选项4</template>
          <el-menu-item index="4-4-1">选项1</el-menu-item>
          <el-menu-item index="4-4-2">选项2</el-menu-item>
          <el-menu-item index="4-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="5">西瓜视频</el-menu-item>

      <el-menu-item index="6">财经</el-menu-item>

      <el-menu-item index="7">科技</el-menu-item>
      <el-menu-item index="8">娱乐</el-menu-item>
      <el-menu-item index="9">更多</el-menu-item>
    </el-menu>
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped >
.nav >>> .tab-control{
  width: 800px;
}
.tab-control .el-menu-item,.tab-control .el-submenu >>> .el-submenu__title{
  font-size: 20px;
}
</style>