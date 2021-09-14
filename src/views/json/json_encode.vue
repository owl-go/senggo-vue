<template>
  <div>
    <h2>Json格式化与压缩</h2>
    <el-input
      type="textarea"
      id="content"
      placeholder="请输入内容"
      v-model="convert"
      maxlength="1000"
      :autosize="{ minRows: 20, maxRows: 40 }"
      show-word-limit
    >
    </el-input>
    <el-button-group>
      <el-button type="success" v-on:click="jsonFormat"
        >Json格式化校验</el-button
      >
      <el-button plain v-on:click="jsonCompress">压缩</el-button>
      <el-button plain v-on:click="escape">转义</el-button>
      <el-button plain v-on:click="unEscape">去除转义</el-button>
      <el-button type="primary" v-on:click="unicodeEscape"
        >中文Unicode</el-button
      >
      <el-button plain v-on:click="unicodeUnescape">Unicode转中文</el-button>
      <el-button type="primary" v-on:click="copy">复制</el-button>
      <el-button plain v-on:click="clearAll">清空</el-button>
      <el-button plain v-on:click="format2Url">转Get参数</el-button>
      <el-button plain v-on:click="demo">示例</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      convert: "",
    };
  },

  mounted() {},

  methods: {
    jsonFormat: function (event) {
      try {
        let jsonObj = JSON.parse(this.convert);
        let jsonStr = JSON.stringify(jsonObj, null, 2);
        this.convert = jsonStr;
      } catch (error) {
        this.$message({
          message: "错误的json",
          center: true,
          type: "error",
        });
        this.convert = "";
      }
    },
    jsonCompress: function () {
      try {
        let jsonObj = JSON.parse(this.convert);
        let jsonStr = JSON.stringify(jsonObj, null, 0);
        this.convert = jsonStr;
      } catch (error) {
        this.$message({
          message: "错误的json",
          center: true,
          type: "error",
        });
        this.convert = "";
      }
    },
    unEscape: function () {
      let reg = /\\/g;
      let replaceAfter = this.convert.replace(reg, "");
      this.convert = replaceAfter;
    },
    escape: function () {
      let replaceAfter = this.convert.replace(/\\/g, "\\\\");
      replaceAfter = replaceAfter.replace(/"/g, '\\"');
      this.convert = replaceAfter;
    },
    unicodeEscape: function () {
      let replaceAfter = escape(this.convert);
      replaceAfter = replaceAfter.replace(/%u/g, "\\u");
      this.convert = replaceAfter;
    },
    unicodeUnescape: function () {
      let replaceAfter = this.convert.replace(/\\u/g, "%u");
      replaceAfter = unescape(replaceAfter);
      this.convert = replaceAfter;
    },
    clearAll: function () {
      this.convert = "";
    },
    demo: function () {
      this.convert = '{"data":{"name":"张三","age":15},"message":"success"}';
    },
    format2Url: function () {
      try {
        let jsonObj = JSON.parse(this.convert);
        let formatStr = "";
        let i = 0;
        for (let key in jsonObj) {
          if (typeof jsonObj[key] == "object") {
            formatStr =
              formatStr +
              (i > 0 ? "&" : "") +
              key +
              "=" +
              JSON.stringify(jsonObj[key]);
          } else {
            formatStr =
              formatStr + (i > 0 ? "&" : "") + key + "=" + jsonObj[key];
          }
          i++;
        }
        this.convert = formatStr;
      } catch (error) {
        this.$message({
          message: "错误的json",
          center: true,
          type: "error",
        });
        this.convert = "";
      }
    },
    copy: function () {
      let transfer = document.getElementById("content");
      transfer.focus();
      transfer.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
      }
      transfer.blur();
      this.$message({
        message: "复制成功！",
        center: true,
        type: "success",
      });
    },
  },
};
</script>

<style>
</style>