//index.js
//获取应用实例
const app = getApp()

Page({
	data: {
		arr: [],
		arrwriter: [],
		arrfabu: [],
		paihang:['2018排行榜','职场热门','都市言情','哈佛大学经济管理类','领导才能'],
		colors: ['#f54d82', '#59b080', '#ec575e', '#9060e8', '#ded658']
	},
	//事件处理函数
	gototal: function() {
		wx.navigateTo({
			url: '/pages/science/science',
			success: function(res){
				// success
			},
			fail: function() {
				// fail
			},
			complete: function() {
				// complete
			}
		})
	},
	onLoad: function () {
		var that = this;
		// wx.request({
		// 	url: 'https://wujunhui.xyz/getfenleilist',
		// 	data: {},
		// 	method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		// 	// header: {}, // 设置请求的 header
		// 	success: function (res) {
		// 		// success
		// 		that.setData({
		// 			arr: res.data
		// 		})
		// 	},
		// 	fail: function () {
		// 		// fail
		// 	},
		// 	complete: function () {
		// 		// complete
		// 	}
		// }),
		app.getarr().then(res => {
			that.setData({
				arr:app.globalData.arr
			})
		})
		app.getwriter().then(res => {
			that.setData({
				arrwriter:app.globalData.bookwriter
			})
		})
		app.getbook().then(res => {
			that.setData({
				arrfabu: app.globalData.bookarr.slice(0,6)
			})
			
		})
		
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
	
})
