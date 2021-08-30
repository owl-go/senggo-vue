import Vue from 'vue'

//导入elment主键库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import './assets/css/common.css'
import router from "./router"


Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router: router,
  // router:routes,
}).$mount('#app')
