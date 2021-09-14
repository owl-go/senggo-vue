import axios from "axios";
import Vue  from "vue";

Vue.mixin({
    methods:{
        async $Get(url,params){
            let res=await axios.get(url,{params})
            return res
        },
        async $Post(url,params,config){
            let res=await axios.post(url,params,config)
            return res
        },
        async $Put(url,params,config){
            let res=await axios.put(url,params,config)
            return res
        },
        async $Options(url,params,config){
            let res=await axios.options(url,params,config)
            return res
        },
        async $Delete(url,params,config){
            let res=await axios.delete(url,params,config)
            return res
        }

    }
});