import axios from "axios";
import Vue from 'vue';

//TODO: move to config
let ACCESS_TOKEN = "BQCUcqTizoGuNV5KfVEwWmwZ-dQMteGZS_GX6tGzTmcWuEji3wT3_Mn9tkofAgd4t0BVwueBlDqx_kFNx31YHl2wv8U6tUqrVQHdmljkKwvER3aNGmW59X8PLkA2KDzSn0rL0SeoS4ZRSV7n-pabP3fk";
let URL_BASE = "https://api.spotify.com/v1/browse/";


export default {
    //TODO: add headers parameter
    get(url) {
        return axios.get(URL_BASE + url, {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
              }
        } );
        //TODO: fix .env.local not working 
        /*return axios.get(process.env.VUE_APP_API_URL_BASE + url, {
            headers: {
                'Authorization': `Bearer ${process.env.VUE_APP_ACCESS_TOKEN}`
              }
        } );*/
    }

}


axios.interceptors.response.use(
    //TODO: use this.$bvToast.toast
    (response) => {
        //TODO add time of request
        const vm = new Vue()
        vm.$bvToast.toast(`Api Call ${response.config.url}`, {
          title: 'Success',
          variant: 'success',
        })
        console.info(`[Status ${response.status}] Api Call ${response.config.url}`);
        return response;
      },
    (error) => {
        // all 4xx/5xx responses will end here
        const vm = new Vue()
        vm.$bvToast.toast(`Server call returned error: ${error.message}`, {
          title: `Api fail (${error.response.status})`,
          variant: 'danger',
        })
        console.log(error)
        return Promise.reject(error);
     }
);