// pages/science/science.js
const app = getApp();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		arrscience:[]
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this;
		app.getbook().then(res => {
			that.setData({
				arrscience:app.globalData.bookarr
			})
		})
		// wx.request({
		// 	url: 'https://wujunhui.xyz/getbooks',
		// 	data: {},
		// 	method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
		// 	// header: {}, // 设置请求的 header
		// 	success: function(res){
		// 		// success
		// 		that.setData({
		// 			arrscience: res.data
		// 		})

		// 	},
		// 	fail: function() {
		// 		// fail
		// 	},
		// 	complete: function() {
		// 		// complete
		// 	}
		// })
	},
	goscidetail: function() {
		wx.navigateTo({
			url: '/pages/scidetail/scidetail',
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
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})