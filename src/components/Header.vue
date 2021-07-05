<template>
  <div class="nav flex j-s a-c">
      <div>舜禹后台管理系统</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">消息中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">工作中心</template>
        <el-menu-item index="2-1">我的信息</el-menu-item>
        <el-menu-item index="2-2">修改密码</el-menu-item>
        <el-menu-item index="2-3">退出系统</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.nav{
    padding: 0 20px;
    background: #545c64;
}
</style>