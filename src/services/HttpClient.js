import axios from "axios";
import vm from '@/main.js';

const httpClient = axios.create({ baseURL: process.env.VUE_APP_API_URL_BASE })

export default {
    get(url) {
        return httpClient.get(url);
    }

}

axios.interceptors.request.use(
  (config) => {
    if (process.env.VUE_APP_ACCESS_TOKEN) {
      config.headers['Authorization'] = `Bearer ${ process.env.VUE_APP_ACCESS_TOKEN }`;
    }
    return config;
  }, 
  (error) => {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
    (response) => {
        //TODO add time of request
        vm.$bvToast.toast(`Api Call ${response.config.url}`, {
          title: 'Success',
          variant: 'success',
        })
        console.info(`[Status ${response.status}] Api Call ${response.config.url}`);
        return response;
      },
    (error) => {
        // all 4xx/5xx responses will end here
        vm.$bvToast.toast(`Server call returned error: ${error.message}`, {
          title: `Api fail (${error.response.status})`,
          variant: 'danger',
        })
        console.error(`[Status ${error.response.status}] ${error}`);
        return Promise.reject(error);
     }
);