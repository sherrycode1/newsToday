<template>
  <div class="nav">
    <div class="title">
      <img src="./svg/hot.png" alt="" />
      {{ title }}
    </div>
    <div class="right-change">
      <img src="./svg/change.png" alt="" />
      换一换
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    title: {
      type: String,
      default() {
        return "热榜";
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.nav {
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav .title {
  font-size: 20px;
  display: flex;
  align-items: center;
}

.title img {
  width: 24px;
  height: 22px;
}
.right-change {
  display: flex;
  align-items: center;
}
.right-change img {
  width: 16px;
  height: 16px;
}
</style>