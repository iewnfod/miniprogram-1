// components/show_as_box/show_as_box.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }, 
    aid: {
      type: String
    }, 
    subtitle: {
      type: String
    }, 
    viewtimes: {
      type: Number
    }, 
    picture: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(e) {
      console.log("direct to new page")
      console.log(e)
      var aid = e.currentTarget.dataset.aid
      //跳转
      wx.navigateTo({
        url: '/pages/show/show?aid='+aid,
      })
    }
  }
})
