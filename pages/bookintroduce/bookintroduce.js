// pages/bookintroduce/bookintroduce.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isshow: false,
		disp: false,
		fenxian:false,
		introducearr: [],
		shelf: [],
		xing: '',
		sharestyle:['../../images/icon/xinlang.jpg','../../images/icon/pengyouquan.jpg','../../images/icon/qq.jpg','../../images/icon/kongjian.jpg'],
		operpicarr: ['../../images/icon/xinactive.png', '../../images/icon/shehzi.png', '../../images/icon/bookshelf.png'],
		opercollarr: ['收藏', '分享', '放入书架']
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		var that = this;
		app.getbook().then(res => {
			that.setData({
				introducearr: app.globalData.bookarr.slice(0, 1)
			})

		})
		app.getbook().then(res => {
			that.setData({
				// let aa = parseInt(app.globalData.bookarr.slice(0,1)[0].star)
				xing: parseInt(app.globalData.bookarr.slice(0, 1)[0].star)
			})
		})
		app.getbook().then(res => {
			that.setData({
				shelf: app.globalData.bookarr.slice(0, 1)
			})
		})

	},
	shoucang: function (e) {
		var that = this
		console.log(e);
		if (e.currentTarget.dataset.num == 0) {
			if (that.data.isshow == false) {
				that.setData({
					isshow: true
				})
			} else {
				that.setData({
					isshow: false
				})
			}
		}
		if (e.currentTarget.dataset.num == 2) {
			if (that.data.disp == false) {
				that.setData({
					disp: true
				})
			} else {
				that.setData({
					disp: false
				})
			}
		}
		if (e.currentTarget.dataset.num == 1) {
			if (that.data.disp == false) {
				that.setData({
					fenxian: true
				})
			} else {
				that.setData({
					fenxian: false
				})
			}
		}

	},
	yincang: function() {
		this.setData({
			disp:false
		})
	},
	cancel: function() {
		this.setData({
			fenxian:false
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