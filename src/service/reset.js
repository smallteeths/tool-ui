import http from './http.js'

export default {
  post(url, data, config) {
    return http.post(`${process.env.VUE_APP_BASE_API}${url}`, data, config)
  },

  get(url, params, config) {
    const getConfig = {}
    if (params) {
      Object.assign(getConfig, {
        params
      })
    }
    if (config) Object.assign(getConfig, config)

    return http.get(`${process.env.VUE_APP_BASE_API}${url}`, getConfig)
  },

  put(url, data, config) {
    return http.put(`${process.env.VUE_APP_BASE_API}${url}`, data, config)
  },

  delete(url, params, config) {
    const delConfig = {}
    if (params) {
      Object.assign(delConfig, {
        params
      })
    }
    if (config) Object.assign(delConfig, config)

    return http.delete(`${process.env.VUE_APP_BASE_API}${url}`, delConfig)
  }
}