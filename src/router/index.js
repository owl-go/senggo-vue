import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from "../views/Page1"
import Page2 from "../views/Page2"
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
      { path: '/', component: Page1 },
      { path: '/chart', component: Page2 },
    ]
  })