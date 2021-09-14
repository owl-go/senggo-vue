<template>
  <div>
    <H2>pdf转化为office文件</H2>
    <el-upload
      class="upload-demo"
      drag
      ref="upload"
      action=""
      accept=".pdf,.PDF"
      :auto-upload="false"
      :file-list="fileList"
      :on-change="handleChange"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传pdf文档，大小不能超过100M
      </div>
    </el-upload>
    <el-select v-model="doc_type" placeholder="要转化的文件类型">
      <el-option label="doc" value="doc"></el-option>
      <el-option label="docx" value="docx"></el-option>
      <el-option label="xls" value="xls"></el-option>
      <el-option label="xlsx" value="xlsx"></el-option>
      <el-option label="ppt" value="ppt"></el-option>
      <el-option label="pptx" value="pptx"></el-option>
    </el-select>
    <el-button style="margin-left: 10px" type="success" @click="submitUpload"
      >开始转换</el-button
    >
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: red"
          >转化成功的文件(如果浏览器没有下载请复制链接到浏览器中)</span
        >
      </div>
      <div v-for="(item, index) in downloadList" :key="index" class="text item">
        <span>{{ item.url }}</span>
        <el-link
          v-bind:href="item.url"
          v-bind:download="item.name"
          target="_blank"
          icon="el-icon-download"
        ></el-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      doc_type: "docx",
      file: null,
      to: "office",
      transfer_url: "https://senggo.com/api/transfer",
      get_doc_url: "https://senggo.com/api/getdoc",
      downloadList: [],
      loading: null,
      token: "",
    };
  },

  mounted() {},

  methods: {
    async submitUpload() {
      let param = new FormData();
      param.append("file", this.file.raw);
      param.append("to", this.to);
      param.append("fileType", this.doc_type);
      let config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      let res = await this.$Post(this.transfer_url, param, config);
      if (res.data.code !== 0) {
        this.$message({
          message: res.data.message,
          center: true,
          type: "error",
        });
        return;
      }
      this.loading = this.$loading({
        lock: true,
        text: "文件转换中...",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });

      this.token = res.data.token;

      var intId = setInterval(async () => {
        let data = await this.getDoc(this.token);
        if (data.result.status == "Failed") {
          clearInterval(intId);
          this.$message({
            message: "文件转化失败",
            center: true,
            type: "error",
          });
          this.loading.close();
        } else if (data.result.status == "Done") {
          this.$message({
            message: "文件转化成功",
            center: true,
            type: "success",
          });
          clearInterval(intId);
          this.loading.close();
          let url = data.result.url;
          let index = url.lastIndexOf("/");
          let name = url.substr(index + 1, url.length);
          this.downloadList.push({ url: url, name: name });
          this.fileList = [];
          // window.location.href = data.result.url; //下载文件
        }
      }, 5000);
    },
    handleChange(file) {
      this.file = file;
    },

    async getDoc(token) {
      let config = {
        headers: { "Content-Type": "application/json" },
      };
      let res = await this.$Post(
        this.get_doc_url,
        {
          to: this.to,
          token: token,
        },
        config
      );
      return res.data;
    },
  },
};
</script>

<style>
.el-upload__tip {
  color: red;
}
</style>