<template>
  <div class="nav flex j-s a-c">
    <div class="logo">SendJson</div>
    <el-menu
      router
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-submenu index="tool">
        <template slot="title">测试工具</template>
        <el-menu-item index="/tool/httptool">在线POST/GET测试工具</el-menu-item>
        <el-menu-item index="/tool/websocket"
          >在线WebSocket测试工具</el-menu-item
        >
        <!-- <el-menu-item index="/tool/api">API接口压力测试</el-menu-item> -->
      </el-submenu>
      <el-submenu index="/json/json_encode">
        <template slot="title">Json相关</template>
        <el-menu-item index="/json/json_encode">Json格式化与压缩</el-menu-item>
        <el-menu-item index="/json/url2json">Url转json</el-menu-item>
      </el-submenu>
      <el-submenu index="/encode/urlencode">
        <template slot="title">加密，解码，转换</template>
        <el-menu-item index="/encode/urlencode"
          >Urlencode与Urldecode转化</el-menu-item
        >
        <el-menu-item index="/encode/base64"
          >base64_encode与base64_decode</el-menu-item
        >
        <el-menu-item index="/encode/md5">md5加密</el-menu-item>
        <el-menu-item index="/encode/unicode"
          >unicode与中文相互转换</el-menu-item
        >
        <el-menu-item index="/encode/sha">sha1,sha256,sha512</el-menu-item>
      </el-submenu>
      <el-submenu index="/pdf/office2pdf">
        <template slot="title">PDF工具</template>
        <el-menu-item index="/pdf/pdf2office"
          >PDF转office（word,ppf,excel）</el-menu-item
        >
        <el-menu-item index="/pdf/office2pdf">Office转PDF</el-menu-item>
      </el-submenu>
      <!-- <el-submenu index="/network/dns">
        <template slot="title">网络</template>
        <el-menu-item index="/network/dns">常用DNS</el-menu-item>
        <el-menu-item index="/network/user-agent">User-Agent</el-menu-item>
      </el-submenu> -->
      <!-- <el-submenu index="/other/timestamp">
        <template slot="title">其他工具</template>
        <el-menu-item index="/other/timestamp">时间戳转化</el-menu-item> -->
      <!-- <el-menu-item index="/other/random">随机字符串或密码生成</el-menu-item> -->
      <!-- <el-menu-item index="/other/uuid">UUID生成</el-menu-item> -->
      <!-- <el-menu-item index="/other/markdown">markdown在线编辑</el-menu-item> -->
      <!-- </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex2 = keyPath;
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
