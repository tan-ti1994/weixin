// pages/category/index.js
import {
  request
} from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [], //分类数据
    righconten: [], //右边的数据
    selectIndex: 0, //默认选中第一个
    scroll_top: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // wx.request({
    //   url: 'https://api.zbztb.cn/api/public/v1/categories',
    //   success:(res)=>{
    //     this.setData({
    //       commodity_list:res.data.message
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  // 点击事件
  handleiItemClick: function(e) {
    const index = e.currentTarget.dataset.index;
    // console.log(e.currentTarget.dataset)
    const scroll_top = 0;
    this.setData({
      righconten: this.data.categories[index].children,
      selectIndex: index,
      scroll_top: scroll_top
    })

  },
  // 获取数据
  getCategories: async function() {
    const categories = await request({
      url: "/categories"
    })
    // console.log(categories)
    const righconten = categories[0].children;
    const selectIndex = 0;
    //1每次拿到数据后, 把数据缓存在tStorage,同事设置一下时间,
    // 2.当下次进来时,如果在有效时间内我们就不发请求,
    // 如果时间过了.就再次发起请求
    wx: wx.setStorageSync("carts", {
      time: Date.now(),
      data: categories
    })
    this.setData({
      categories,
      righconten,
      selectIndex
    })
    // console.log(categories)
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let carts = wx.getStorageSync("carts");
    // 判断一下是否有缓存数据,没有就重新那数据
    if (!carts) {
      this.getCategories()
    } else {
      // 判断一下时间是否过期10S
      if (Date.now() - carts.time>1000*10) {
        this.getCategories()
      }else{
        // 不过期同时又请求过数据
        let categories = carts.data;
        const righconten = categories[0].children;
        const selectIndex=0;
        this.setData({
          categories, righconten, selectIndex
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})