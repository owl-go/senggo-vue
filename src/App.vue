<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content flex">
      <div class="left">
        <Left></Left>
      </div>
      <div class="right">
        <router-link to="/">首页</router-link>&nbsp;
        <router-link to="/chart">图标</router-link>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Left from "./components/Left.vue";
export default {
  name: "App",
  components: {
    Header,
    Left,
  },
};
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header {
  height: 60px;
}
.content {
  flex: 1;
}
.left {
  width: 200px;
}
.right {
  flex: 1;
  padding: 10px;
  background: white;
}
</style>