<template>
  <div>
    <h2>{{ title }}</h2>
    <el-input
      type="textarea"
      placeholder="请输入要转化的内容"
      v-model="source"
      maxlength="1000"
      :autosize="{ minRows: 12, maxRows: 15 }"
      show-word-limit
    >
    </el-input>
    <div class="button-group">
      <el-button-group>
        <el-button type="primary" v-on:click="urlEncode">URLEncode</el-button>
        <el-button type="primary" v-on:click="urlDecode">URLDecode</el-button>
      </el-button-group>
      <el-button-group style="margin-left: 10px">
        <el-button type="info" v-on:click="base64Encode"
          >base64_encode</el-button
        >
        <el-button type="info" v-on:click="base64Decode"
          >base64_decode</el-button
        >
      </el-button-group>
      <el-button-group style="margin-left: 10px">
        <el-button type="primary" v-on:click="MD5">MD5</el-button>
      </el-button-group>
      <el-button-group style="margin-left: 10px">
        <el-button plain v-on:click="unicodeEscape">中文Unicode</el-button>
        <el-button plain v-on:click="unicodeUnescape">Unicode转中文</el-button>
      </el-button-group>

      <el-button-group style="margin-left: 10px">
        <el-button type="primary" v-on:click="SHA1">SHA1</el-button>
        <el-button type="primary" v-on:click="SHA256">SHA256</el-button>
        <el-button type="primary" v-on:click="SHA512">SHA512</el-button>
      </el-button-group>
      <el-button-group style="margin-left: 10px">
        <el-button plain v-on:click="clearAll">清空</el-button>
      </el-button-group>
    </div>

    <el-input
      type="textarea"
      readonly
      v-model="convert"
      :autosize="{ minRows: 5, maxRows: 10 }"
    >
    </el-input>
  </div>
</template>

<script>
import { urlencode } from "../../utils/urlencode";
import { urldecode } from "../../utils/urldecode";
import { base64_encode } from "../../utils/base64_encode";
import { base64_decode } from "../../utils/base64_decode";
import md5 from "js-md5";
import CryptoJS from "crypto-js";

export default {
  props: ["title"],
  data() {
    return {
      source: "",
      convert: "",
    };
  },
  methods: {
    urlEncode: function () {
      this.convert = urlencode(this.source);
    },
    urlDecode: function () {
      this.convert = urldecode(this.source);
    },
    base64Encode: function () {
      this.convert = base64_encode(this.source);
    },
    base64Decode: function () {
      this.convert = base64_decode(this.source);
    },
    MD5: function () {
      this.convert = md5(this.source);
    },
    SHA1: function () {
      // console.log(SHA1);
      this.convert = CryptoJS.SHA1(this.source);
    },
    SHA256: function () {
      this.convert = CryptoJS.SHA256(this.source);
    },
    SHA512: function () {
      this.convert = CryptoJS.SHA512(this.source);
    },
    clearAll: function () {
      this.source = "";
      this.convert = "";
    },
    unicodeEscape: function () {
      let replaceAfter = escape(this.source);
      replaceAfter = replaceAfter.replace(/%u/g, "\\u");
      this.convert = replaceAfter;
    },
    unicodeUnescape: function () {
      let replaceAfter = this.source.replace(/\\u/g, "%u");
      replaceAfter = unescape(replaceAfter);
      this.convert = replaceAfter;
    },
  },
};
</script>

<style>
.button-group {
  margin: 10px 0;
}
</style>