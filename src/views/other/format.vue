<template>
  <div>
    <h2>{{ title }}格式化</h2>
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
      <el-button type="success" v-on:click="xmlformat">XML美化</el-button>
      <el-button plain v-on:click="xmlDemo"
        >XML示例</el-button
      > </el-button-group
    >&nbsp;
    <el-button-group>
      <el-button type="success" v-on:click="sqlformat">sql美化</el-button>
      <el-button plain v-on:click="demo">sql示例</el-button> </el-button-group
    >&nbsp;

    <el-button-group>
      <el-button type="primary" v-on:click="copy">复制</el-button>
      <el-button plain v-on:click="clearAll">清空</el-button>
    </el-button-group>
  </div>
</template>

<script>
import { format as sqlFormat } from "sql-formatter";
import format from "xml-formatter";
export default {
  props: ["title"],
  data() {
    return {
      convert: "",
    };
  },

  mounted() {},

  methods: {
    sqlformat: function (event) {
      let result = sqlFormat(this.convert);
      this.convert = result;
    },
    xmlformat: function (event) {
      let result = format(this.convert);
      this.convert = result;
    },
    clearAll: function () {
      this.convert = "";
    },
    xmlDemo: function () {
      this.convert =
        '<?xml version="1.0"?><site><domain>senggo.com</domain><name>senggo</name><nation>china</nation><found>1</found></site> ';
    },
    demo: function () {
      this.convert =
        'SELECT * FROM `USER` WHERE `name`="zhangsan" and `age`=18;';
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