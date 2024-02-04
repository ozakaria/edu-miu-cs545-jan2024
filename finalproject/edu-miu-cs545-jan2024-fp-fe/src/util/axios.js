import axios from 'axios'

const instance = axios.create()

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("token");
    if(token) {
        config.headers.Authorization = "Bearer "+ token;
    }
     
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // if(error.response.status) {
    //   window.location = "http://localhost:3000/login"
    // }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance;