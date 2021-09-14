<template>
  <div>
    <el-form ref="form" :model="form">
      <el-form-item>
        <el-col :span="16">
          <el-input v-model="form.url" placeholder="输入url地址"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button-group>
            <el-button plain v-on:click="connect">连接</el-button>
            <el-button plain v-on:click="disconnect">断开</el-button>
            <el-button plain v-on:click="clear">清空</el-button>
            <el-button plain v-on:click="demo">示例</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
      <pre>
本工具主要是为了测试服务端websocket功能是否完善可用而开发，主要是利用html5 的websocket去连接服务端的websocket,因此，无论你是内网还是外网都可使用!服务端只是实现了接受和发送，这里只是测试而已！
      </pre>
      <div
        id="output"
        style="border: 1px solid #ccc; height: 365px; overflow: auto"
      >
        <div
          class="newmessage"
          v-for="(content, index) in msgList"
          :key="index"
        >
          <span :style="{ color: content.color }">
            {{ content.spanMsg }}
          </span>
          <template v-if="content.type == 'response'">
            <br />
            <span class="bubble">
              {{ content.contentMsg }}
            </span>
          </template>
          <template v-else-if="content.type == 'send'">
            <br />
            {{ content.contentMsg }}
          </template>
        </div>
      </div>
      <el-form-item>
        <el-col :span="16">
          <el-input v-model="form.msg" placeholder="待发消息"></el-input>
        </el-col>
        <el-col :span="8">
          <el-button-group>
            <el-button plain v-on:click="sendMsg">发送</el-button>
          </el-button-group>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { formatDate } from "../../utils/date"; //转换日期格式

export default {
  created() {},
  data() {
    return {
      form: {
        url: "",
        msg: "",
      },
      socket: null,
      msgList: [],
    };
  },
  methods: {
    connect: function () {
      if (this.form.url == "") {
        this.$message({
          message: "url地址不能为空",
          center: true,
          type: "error",
        });
        return;
      }
      this.socket = new WebSocket(this.form.url);
      this.socket.onopen = this.open;
      this.socket.onclose = this.close;
      this.socket.onerror = this.error;
      this.socket.onmessage = this.getMessage;
    },
    open: function () {
      this.appendMessage("connect", "连接成功，现在你可以发送信息啦！！！");
    },
    close: function () {
      this.appendMessage("close", "连接关闭，请重新连接");
    },
    error: function (err) {
      this.appendMessage("error", "连接发生错误");
    },
    getMessage: function (msg) {
      this.appendMessage("response", msg.data);
    },

    demo: function () {
      this.form.url = "ws://39.108.87.16:8446/ws?peer=123";
    },
    clear: function () {
      this.msgList = [];
    },
    disconnect: function () {
      this.socket.close();
    },
    sendMsg: function () {
      let message = this.form.msg;
      if (message == "") {
        this.$message({
          message: "发送消息不能为空",
          center: true,
          type: "error",
        });
        return;
      }
      this.socket.send(message);
      this.appendMessage("send", message);
    },
    appendMessage: function (type, message) {
      var date = new Date();

      let color = "";
      let curTime = formatDate(date, "yyyy-MM-dd hh:mm:ss");
      let spanMsg = "";

      let contentMsg = "";
      switch (type) {
        case "connect":
        case "error":
        case "close":
          color = "red";
          spanMsg = message;
          break;
        case "response":
          color = "blue";
          spanMsg = "服务端回应 " + curTime;
          contentMsg = message;
          break;
        case "send":
          color = "green";
          spanMsg = "你发送的消息 " + curTime;
          contentMsg = message;
          break;
        default:
          break;
      }
      let msg = {
        color: color,
        spanMsg: spanMsg,
        contentMsg: contentMsg,
        type: type,
      };
      this.msgList.push(msg);
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
pre {
  display: block;
  padding: 9.5px;
  margin: 0 0 10px;
  font-size: 13px;
  line-height: 1.42857143;
  color: #333;
  word-break: break-all;
  word-wrap: break-word;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.newmessage {
  width: 100%;
}
.bubble {
  background-color: lightgreen;
  position: relative;
  max-width: 240px;
  word-wrap: break-word;
  text-align: left;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 9px;
}
.bubble:after {
  position: absolute;
  border: 4.8px solid transparent;
  content: " ";
  top: 20px;
}
</style>