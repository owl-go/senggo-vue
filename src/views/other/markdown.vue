<template>
  <div>
    <h2>markdown在线编辑</h2>
    <div class="content flex">
      <div class="convert js">
        <el-input
          type="textarea"
          id="content"
          placeholder="请输入内容"
          v-model="convert"
          maxlength="10000"
          @input="markdown"
          :autosize="{ minRows: 25, maxRows: 50 }"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="transfer js" v-html="transfer"></div>
    </div>
    <el-button-group>
      <el-button type="primary" v-on:click="copy">复制</el-button>
      <el-button plain v-on:click="clearAll">清空</el-button>
    </el-button-group>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
export default {
  data() {
    return {
      convert: "",
      transfer: "",
    };
  },

  mounted() {},

  methods: {
    markdown: function () {
      let md = new MarkdownIt();
      let result = md.render(this.convert);
      this.transfer = result;
      //   this.convert = result;
    },
    clearAll: function () {
      this.convert = "";
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
.content {
  width: 100%;
}
.content > .convert,
.content > .transfer {
  width: 49%;
  max-height: 600px;
  overflow: scroll;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}
.content > .transfer {
  margin-left: 5px;
  background-color: #dcdfe6;
  padding: 10px;
}
</style>