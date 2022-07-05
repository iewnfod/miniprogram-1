// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const db = wx.cloud.database()
    db.collection("main_info").get({
      success: res => {
        for (var i = 0; i < res.data.length; i ++) {
          var stri = (i+1).toString()
          var data = {}
          var thisdata = res.data[i]
          console.log(thisdata)
          //添加标题
          var title = "title" + stri
          data[title] = thisdata.title
          //添加id
          var id = "id" + stri
          data[id] = thisdata._id
          //添加封面
          var picture = "picture" + stri
          data[picture] = thisdata.frontpage
          //添加副标题
          var subtitle = "subtitle" + stri
          data[subtitle] = thisdata.subtitle
          //添加浏览次数
          var viewtimes = "viewtimes" + stri
          data[viewtimes] = thisdata.viewtimes
          console.log(data)
          this.setData(data)
        }
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

  }, 

  //点击一个view跳转到对应页面
  // e表示传输数据的event，数据储存在e.currentTarget.dataset中，加上.和变量名读取
  // 在wxml文件中通过在view中添加 data-变量名="..." 添加需要传输的变量，以及其数据
  toDetail(e) {
    console.log("direct to new page")
    console.log(e)
    var aid = e.currentTarget.dataset.aid
    console.log(aid)

    //跳转
    wx.navigateTo({
      url: '/pages/show/show?aid='+aid,
    })
  }
})
