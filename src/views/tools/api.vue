<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <h2>API接口压力测试</h2>
      <el-form-item label="接口地址">
        <el-input
          type="textarea"
          v-model="form.url"
          placeholder="请输入url地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="post参数">
        <el-input
          type="textarea"
          v-model="form.parma"
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
        <el-input
          placeholder="请输入请求数"
          v-model="form.requests"
          class="request-input"
        >
          <template slot="prepend">请求数</template>
        </el-input>
        <el-input
          placeholder="请输入并发数"
          v-model="form.concurrent"
          class="request-input"
        >
          <template slot="prepend">并发数</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-select
          v-model="form.method"
          placeholder="提交方式"
          class="request-input"
        >
          <el-option label="POST" value="POST"></el-option>
          <el-option label="GET" value="GET"></el-option>
          <el-option label="PUT" value="PUT"></el-option>
          <el-option label="DELETE" value="DELETE"></el-option>
          <el-option label="OPTIONS" value="OPTIONS"></el-option>
        </el-select>
        <el-select
          v-model="form.showResult"
          placeholder="结果输出"
          class="request-input"
        >
          <el-option label="结果不输出" value="0"></el-option>
          <el-option label="结果输出" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="request-input"
          >开始压测</el-button
        >
        <el-button class="request-input">清空表单</el-button>
      </el-form-item>
      <pre>
压测结果！
      </pre>
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
        header: "Content-Type:application/x-www-form-urlencoded",
        method: "POST",
        format: "utf-8",
        showResult: "1",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        requests: 10,
        concurrent: 1,
      },
      show3: false,
      showMsg: "显示高级",
    };
  },
  methods: {
    onSubmit() {
      console.log(this.form.name);
      console.log(this.form.desc);
      console.log("submit");
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
.request-input {
  width: 49%;
}
</style>