<template>
  <div class="nav flex j-s a-c">
    <div class="logo">PostSocket</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">测试工具</template>
        <el-menu-item index="2-1">在线POST/GET测试工具</el-menu-item>
        <el-menu-item index="2-2">在线WebSocket测试工具</el-menu-item>
        <el-menu-item index="2-3">API接口压力测试</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">Json相关</template>
        <el-menu-item index="3-1">Json格式化与压缩</el-menu-item>
        <el-menu-item index="3-2">Json转Url参数</el-menu-item>
        <el-menu-item index="3-3">URL参数转Json</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">加密，解码，转换</template>
        <el-menu-item index="4-1">Urlencode与Urldecode转化</el-menu-item>
        <el-menu-item index="4-2">base64_encode与base64_decode</el-menu-item>
        <el-menu-item index="4-3">md5加密</el-menu-item>
        <el-menu-item index="4-4">unicode与中文相互转换</el-menu-item>
        <el-menu-item index="4-5">sha1,sha256,sha512</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">网络</template>
        <el-menu-item index="5-1">常用DNS</el-menu-item>
        <el-menu-item index="5-2">User-Agent</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">其他工具</template>
        <el-menu-item index="6-1">时间戳转化</el-menu-item>
        <el-menu-item index="6-2">随机字符串或密码生成</el-menu-item>
        <el-menu-item index="6-3">UUID生成</el-menu-item>
        <el-menu-item index="6-4">markdown在线编辑</el-menu-item>
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
.nav {
  padding: 0 20px;
  background: #545c64;
}
.logo {
  font-size: 20px;
  color: azure;
}
</style>
