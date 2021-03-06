var app = getApp();
// Member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    memberNumber:0,
    accountBalance:0,
    availableIntegral:0,
    showInfo:false,
    userInfo:{
      userName:'',
      MemerID:'',
      registerTime:''
    }
  },
  navigaToUrl:function(event){
    var url = event.currentTarget.dataset.url;
    app.getUserInfo(function(data){
      wx.navigateTo({
        url: url,
      })
    });
  },
  logOut:function(){
    var _this = this;
    wx.removeStorage({
      key: 'userInfo',
      success: function (res) {
        wx.showToast({
          title: '退出成功！'
        })
        _this.setData({
          showInfo: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userInfo = wx.getStorageSync('userInfo');
    if(userInfo == ""){
      this.setData({
        showInfo: false,
      })
    }else{
      this.setData({
        showInfo: true,
        userInfo: {
          userName: userInfo[0].UserName,
          MemerID: userInfo[0].MemerID,
          registerTime: '11-11-11'
        }
      })
    }
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
    var userInfo = wx.getStorageSync('userInfo');
    if (userInfo == "") {
      this.setData({
        showInfo: false
      })
    } else {
      this.setData({
        showInfo: true,
        userInfo: {
          userName: userInfo[0].UserName,
          MemerID: userInfo[0].MemerID,
          registerTime: '11-11-11'
        }
      })
    }
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/loginRegister/login/login',
      imageUrl:"https://www.baidu.com/img/bd_logo1.png",
      success: function (res) {
        // 转发成功
        // wx.showToast({
        //   title: '成功',
        //   icon: 'success',
        //   duration: 2000
        // })
      },
      fail: function (res) {
        // 转发失败
        // wx.showToast({
        //   title: '失败',
        //   icon: 'warn',
        //   duration: 2000
        // })
      }
    }
  }
})