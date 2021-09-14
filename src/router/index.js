import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
      { 
        path: '/', 
        component:()=>import (/* webpackChunkName: "json" */'../views/json/json_encode'),
        meta: {
          title: 'json格式转化工具',
          content:{
            keywords:'json格式转化工具',
            description:'json格式转化工具',
          }
        }
      },
      { path: '/tool/api', 
        component: ()=>import(/* webpackChunkName: "tool" */'../views/tools/api'),
        meta: {
          title: 'api接口测试',
          content:{
            keywords:'api接口测试',
            description:'api接口测试',
          }
        } 
      },
      { path: '/tool/httptool', 
        component:()=>import(/* webpackChunkName: "tool" */'../views/tools/http_tool') ,
        meta: {
          title: 'http在线测试',
          content:{
            keywords:'http在线测试',
            description:'http在线测试',
          }
        } 
      },
      { path: '/tool/websocket', 
        component:()=>import(/* webpackChunkName: "tool" */'../views/tools/websocket'),
        meta: {
          title: 'websocket在线测试',
          content:{
            keywords:'websocket在线测试',
            description:'websocket在线测试',
          }
        } 
      },
      { path:'/json/json_encode',
        component:()=>import(/* webpackChunkName: "json" */'../views/json/json_encode'),
        meta: {
          title: 'json格式转化工具',
          content:{
            keywords:'json格式转化工具',
            description:'json格式转化工具',
          }
        } 

      },
      { path:'/json/url2json',
        component:()=>import(/* webpackChunkName: "json" */ '../views/json/url2json'),
        meta: {
          title: 'url参数转json',
          content:{
            keywords:'url参数转json',
            description:'url参数转json',
          }
        } 
      },
      { path:'/encode/:title',
        component:()=>import(/* webpackChunkName: "encode" */ '../views/encode/encode'),props:true,
        meta: {
          title: 'urlencode/base64/md5/sha1,sha256,sha512加解密，转换',
          content:{
            keywords:'urlencode/base64/md5/sha1,sha256,sha512加解密，转换',
            description:'urlencode/base64/md5/sha1,sha256,sha512加解密，转换',
          }
        } 
        },
      { path:'/pdf/pdf2office',
        component:()=>import(/* webpackChunkName: "pdf" */ '../views/pdf/pdf2office'),
        meta: {
          title: 'pdf转word，pdf转ppt，pdf转excel',
          content:{
            keywords:'pdf转word，pdf转ppt，pdf转excel',
            description:'pdf转word，pdf转ppt，pdf转excel',
          }
        } 
      },
      { path:'/pdf/office2pdf',
        component:()=>import(/* webpackChunkName: "pdf" */ '../views/pdf/office2pdf'),
        meta: {
          title: 'pdf转word，pdf转ppt，pdf转excel',
          content:{
            keywords:'pdf转word，pdf转ppt，pdf转excel',
            description:'pdf转word，pdf转ppt，pdf转excel',
          }
        } 
      }
    ]
  })