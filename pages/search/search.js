// pages/search/search.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		searcharr: [],
		inputval: '',
		seararr: ["nihao1"]
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
		this.openHistorySearch()
		
	},
	openHistorySearch: function () {
		this.setData({
			//同步
			seararr:wx.getStorageSync('seararr') || [],
		})
	},
	historydel: function() {
		wx.clearStorageSync('seararr')
		this.setData({
			seararr:[]
		})
	},
	getsearch: function (e) {
		var inputval = e.detail.value;
		var seararr = this.data.seararr;
		if (inputval == "") {
			//输入为空的时候的处理
			wx.showToast({
				title:"搜索内为空",
				icon:"none"
			})
		}
		else {
			if (seararr.length < 5) {
				seararr.unshift({
					value: inputval,
					id: seararr.length
				})
			}
			else {
				seararr.pop()
				seararr.unshift(
					{
						value: inputval,
						id: seararr.length
					}
				)
			}
			wx.setStorageSync('seararr', seararr)

		}
		console.log(seararr);


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