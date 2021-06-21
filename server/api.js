import { host } from '@/env.js'

function request(url, method, data) {
  uni.showLoading({
    title: '加载中',
  })
  let apihost = host + url
  return new Promise((resolve, reject) => {
    uni.request({
      url: apihost, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
      },
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          uni.showToast({
            title: '接口异常',
            icon: 'none',
            duration: 1500,
          })
        }
      },
      fail: function (error) {
        uni.hideLoading()
        reject(false)
      },
      complete: function () {
        uni.hideLoading()
      },
    })
  })
}

export function post(url, data) {
  return request(url, 'POST', data)
}

export function get(url, data) {
  return request(url, 'GET', data)
}
