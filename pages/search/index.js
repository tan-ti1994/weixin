// pages/search/index.js
import {request} from '../../request/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
iputeVal:"",
    goods_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  handlenputChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      iputeVal: e.detail.value
    })
  },

  // 点击处理事件
  handleSaerch:async function(e){
    const { iputeVal}=this.data
    console.log(iputeVal)
    // 判断不能为空
    if (!iputeVal){
wx.showToast({
  title: '不能为空',
  icon:'none'
})
return false;

    }

  // 那数据
  const goods_list=await request({
    url:"/goods/qsearch",
    data:{
      query: iputeVal
    }
  })
  this.setData({
    goods_list
  })
    console.log(goods_list)
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