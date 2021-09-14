<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="url">
        <el-input
          type="textarea"
          v-model="form.url"
          placeholder="输入url地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="post参数">
        <el-input
          type="textarea"
          v-model="form.parmas"
          placeholder="输入post参数"
        ></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button size="mini" plain type="success" @click="changeShow">{{
          showMsg
        }}</el-button>
      </el-form-item>
      <div>
        <el-collapse-transition>
          <div v-show="show3">
            <el-form-item label="cookie">
              <el-input
                type="textarea"
                v-model="form.cookie"
                placeholder="输入cookie"
              ></el-input>
            </el-form-item>
            <el-form-item label="header">
              <el-input
                type="textarea"
                v-model="form.header"
                placeholder="输入header"
              ></el-input>
            </el-form-item>
          </div>
        </el-collapse-transition>
      </div>

      <el-form-item>
        <el-select v-model="form.method" placeholder="提交方式">
          <el-option label="POST" value="POST"></el-option>
          <el-option label="GET" value="GET"></el-option>
          <el-option label="PUT" value="PUT"></el-option>
          <el-option label="DELETE" value="DELETE"></el-option>
          <el-option label="OPTIONS" value="OPTIONS"></el-option> </el-select
        >&nbsp;
        <el-select v-model="form.format" placeholder="编码格式">
          <el-option label="utf-8" value="utf-8"></el-option>
          <el-option label="gbk" value="gbk"></el-option> </el-select
        >&nbsp;
        <el-select v-model="form.gzip" placeholder="请选择活动区域">
          <el-option label="gzip(自动解压)" value="1"></el-option>
          <el-option label="不解压" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="Response" name="first">{{ response }}</el-tab-pane>
        <el-tab-pane label="Headers" name="second">
          <div v-for="(value, index) in headers" :key="index">
            <strong>{{ index }}:</strong>{{ value }}
            <br />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      form: {
        url: "",
        parmas: "",
        header: "Content-Type:application/x-www-form-urlencoded",
        method: "POST",
        format: "utf-8",
        gzip: "1",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      show3: false,
      showMsg: "显示高级",
      response: "",
      headers: {},
      activeName: "first",
    };
  },
  methods: {
    async onSubmit() {
      let res = null;
      let headerObj = {};
      if (this.form.header != "") {
        let headers = this.form.header.split(";");
        for (let i = 0; i < headers.length; i++) {
          let item = headers[i].split(":");
          if (item.length > 1) headerObj[item[0]] = item[1];
        }
      }

      switch (this.form.method) {
        case "GET":
          res = await this.$Get(this.form.url, this.form.parmas);
          break;
        case "POST":
          res = await this.$Post(this.form.url, this.form.parmas, {
            headers: headerObj,
          });
          break;
        case "PUT":
          res = await this.$Put(this.form.url, this.form.parmas, {
            headers: headerObj,
          });
          break;
        case "DELETE":
          res = await this.$Delete(this.form.url, this.form.parmas, {
            headers: headerObj,
          });
          break;
        case "OPTIONS":
          res = await this.$Options(this.form.url, this.form.parmas, {
            headers: headerObj,
          });
          break;
        default:
          break;
      }
      this.response = res.data;
      this.headers = res.headers;
    },
    changeShow() {
      this.show3 = !this.show3;
      if (this.show3) {
        this.showMsg = "隐藏高级";
      } else {
        this.showMsg = "显示高级";
      }
    },
  },
};
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>