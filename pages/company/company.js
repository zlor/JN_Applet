// company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    unionBg: "https://img.gegejia.com/activity/saleWindow/22f507610bfff.jpg",
    //
    tabbars1: true,
    tabbars2: false,
    tabbars3: false,
    tabbars4: false
  },
  tabbars1Fn: function () {
    //更新数据
    this.setData({
      tabbars1: true,
      tabbars2: false,
      tabbars3: false,
      tabbars4: false
    })
  },
  tabbars2Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: true,
      tabbars3: false,
      tabbars4: false
    })
  },
  tabbars3Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: true,
      tabbars4: false
    })
  },
  tabbars4Fn: function () {
    //更新数据
    this.setData({
      tabbars1: false,
      tabbars2: false,
      tabbars3: false,
      tabbars4: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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