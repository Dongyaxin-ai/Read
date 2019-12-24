//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
   
	
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  getbook: function() {
    let that = this;
    return new Promise((resolve,reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getbooks',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          that.globalData.bookarr = res.data;
          resolve(res.data)
          
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    })
  },
  getwriter: function() {
    let that = this;
    return new Promise((resolve,reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getwriters',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
          that.globalData.bookwriter = res.data;
          resolve(res.data);
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    })
  },
  getarr: function() {
    let that = this;
    return new Promise((resolve,reject) => {
      wx.request({
        url: 'https://wujunhui.xyz/getfenleilist',
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function(res){
          // success
            that.globalData.arr = res.data;
            resolve(res.data)
       
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    })
  },
  globalData: {
    userInfo: null,
    bookarr:[],
    bookwriter: [],
    arr:[],
    currentbook: ""
  }
})