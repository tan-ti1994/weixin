// pages/goods_list/index.js
import {
  request
} from "../../request/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tads: [{
        id: 0,
        value: "综合",
        isActive: true
      },
      {
        id: 1,
        value: "销量",
        isActive: false
      },
      {
        id: 2,
        value: "价格",
        isActive: false
      },
    ],
    goods: [] //搜所的商品列表
  },


  // 请求参数
  QueryPagesize: {
    pagenum: 1,
    pagesize: 10
  },
  totalPages: 0,
  // 处理tads传过来的参数
  handleTadsChange: function(e) {
    console.log(e)
    this.setData({
      tads: e.detail
    })
  },
  // 获取数据

  getgoodsList: async function() {
    const goods_list = await request({
      url: "/goods/search",
      data: this.QueryPagesize
    })
    // 总共有多少页

    this.totalPages = Math.ceil(goods_list.total / this.QueryPagesize.pagesize);
    this.setData({
      goods:[...this.data.goods,... goods_list.goods]
    })
    // 关闭下拉提示框
    wx.stopPullDownRefresh()

    // console.log(this.data.goods)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const {
      cid,
      query
    } = currentPage.options;
    if (cid) {
      this.QueryPagesize["cid"] = cid;
    }
    if (query) {
      this.QueryPagesize["query"] = query;
    }
    this.getgoodsList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
    // 1.清空原有的goods=[]
    this.setData({
      goods: []
    })
    // 2.把页面重置为1
    this.QueryPagesize.pagenum = 1;
    // 重新发起请求
    this.getgoodsList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    if (this.totalPages >= this.QueryPagesize.pagenum) {
      this.QueryPagesize.pagenum++;
      this.getgoodsList()

    }else{
      wx.showToast({
        title: '没有下一页了',
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})