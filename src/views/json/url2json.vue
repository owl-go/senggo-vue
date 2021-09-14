<template>
  <div>
    <h2>URL参数转JSON</h2>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="input_data"
      maxlength="1000"
      :autosize="{ minRows: 12, maxRows: 15 }"
      show-word-limit
    >
    </el-input>
    <el-button-group>
      <el-button type="success" v-on:click="url2json">转换</el-button>
      <el-button plain v-on:click="clearAll">清空</el-button>
    </el-button-group>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="convert"
      maxlength="1000"
      :autosize="{ minRows: 5, maxRows: 10 }"
      show-word-limit
    >
    </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_data: "",
      convert: "",
    };
  },

  mounted() {},

  methods: {
    url2json: function () {
      let params = new URLSearchParams(this.input_data);
      if (params == null) {
        this.$message({
          message: "不是正确的url参数",
          center: true,
          type: "error",
        });
        return;
      }
      const entries = params.entries();
      let obj = {};
      for (let entry of entries) {
        const [key, value] = entry;
        obj[key] = value;
      }
      let jsonStr = JSON.stringify(obj, null, 0);
      this.convert = jsonStr;
    },
    clearAll: function () {
      this.convert = "";
    },
  },
};
</script>

<style>
</style>