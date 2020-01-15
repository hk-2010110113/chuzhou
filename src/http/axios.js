import axios from "axios";

axios.interceptors.response.use(
  res => {
    return res.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default {
  // post: function (url = "", data = {}, config) {
  //   return axios.post(url, data, config);
  // },

  postbyquery: function (url = "", querydata = {}, data = {}, config) {
    // if (JSON.stringify(querydata) == "{}") { //空对象
    //   return axios.post(url, data, config);
    // } else {
    //   let query = ''
    //   for (let i in querydata) {
    //     query += '&' + i + '=' + querydata[i]
    //   }
    //   let params = query.substr(1);
    //   return axios.post(url + '?' + params, data, config);
    // }
    let query = ''
    for (let i in querydata) {
      query += '&' + i + '=' + querydata[i]
    }
    let params = query.substr(1);
    return axios.post(url + '?' + params, data, config);
  },

  put: function (url = "", data = {}, config) {
    return axios.put(url, data, config);
  },

  get: function (url, params = {}, config) {
    // Object.assign用于合并对象
    let OPTIONS = Object.assign({ params }, config);
    return axios.get(url, OPTIONS);
  },

  delete: function (url = "", params = {}, config) {
    let OPTIONS = Object.assign({ params }, config);
    return axios.delete(url, OPTIONS);
  }
};
