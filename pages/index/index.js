//index.js
import { request } from '../../request/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navr: [
      { id: 1, name: '项目' },
      { id: 2, name: '文件' },
      { id: 3, name: '编辑' },
      { id: 4, name: '工具' }
    ],
    // 轮播图
    swiper_list: [],
    // 导航数据
    dh_list: [],
    // 楼层数据
    louc_list: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperList(),
    this.getiten(),
      this.louCen()
    // wx.request({
    //   url: 'https://www.linweiqin.cn/api/public/v1/home/swiperdata',
    //   success: (res) => {
    //     this.setData({
    //       swiper_list: res.data.message
    //     })
    //   }
    // }),
    // 导航数据
    // wx.request({
    //   url: 'https://www.linweiqin.cn/api/public/v1/home/catitems',
    //   success: (res) => {
    //     console.log(res);
    //     this.setData({
    //       dh_list: res.data.message
    //     })
    //   }
    // }),
    //   // 楼层数据
    //   wx.request({
    //     url: 'https://www.linweiqin.cn/api/public/v1/home/floordata',
    //     success: (res) => {
    //       this.setData({
    //         louc_list: res.data.message
    //       })
    //     }
    //   })

  },

  getSwiperList:async function(e){
    const swiper_list=await request({
      url:"/home/swiperdata"
    });
    this.setData({
      swiper_list
    })
  },

  // 导航数据
getiten:async function(e){
  const dh_list=await request({
    url:"/home/catitems"
  })
  this.setData({
    dh_list
  })
},

// 获取楼层数据
louCen:async function(e){
  const louc_list=await request({
    url:"/home/floordata"
  })
  this.setData({
    louc_list
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