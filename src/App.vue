<template>
  <div id="app">
    <div class="header">
      <Header></Header>
    </div>
    <div class="content flex">
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
// import Left from "./components/Left.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Left,
  },
};
</script>

<style>
#app {
  width: 100vw;
  /* height: 100vh; */
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
  width: 100vw;
  background: white;
}
.footer {
  height: 50px;
}
</style>