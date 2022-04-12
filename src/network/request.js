import axios from 'axios'

export function request(config) {

  const instance = axios.create({
    baseURL: "http://",
    timeout: 5000
  })
  // 1.request interceptors rules
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  //  2.response interceptors rules
  instance.interceptors.response.use(
    res => {
      return res.data
    }, err => {
      console.log(err);
    })
  return instance(config)
}