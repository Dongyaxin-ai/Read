// pages/search/search.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		searcharr: [],
		seararr: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this
		app.getbook().then(res => {
			that.setData({
				searcharr: app.globalData.bookarr.slice(0, 3)
			})
			console.log(app.globalData.bookarr)
		})

	},
	// searchsubmit: function () {
	// 	console.log(123)
	// }.then(function getsearch(e) {
	// 	var a = e.detail.value;
	// 	this.setData({
	// 		seararr: a
	// 	})
	// }),
	getsearch: function(e) {
		var a = e.detail.value;
		console.log(a);
		
		if(a !== "") {
			this.setData({
				seararr: a
			})
		}
		e.detail.value = ""
		
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