
// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  //跳转到页面时运行的函数
  onLoad(options) {
    var aid = options.aid
    const db = wx.cloud.database()
    db.collection("main_info").doc(aid).get({
      success: res => {
        console.log(res.data.viewtimes)
        res.data.viewtimes = res.data.viewtimes + 1
        console.log(res.data.viewtimes)
        this.setData({"title": res.data.title})
        this.setData({"article_url": res.data.url})
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
