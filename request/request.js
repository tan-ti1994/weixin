 /* 1加蔗罩
  2.配置通用的URl
  3使用promise进行改造
  */
 import {
   BASE_URL
 } from "urls.js"
 export const request = (params) => {

   wx.showLoading({
     title: '正在加载中',
     mask: true
   })

   return new Promise(function (resolve, reject) {
     wx.request({
       ...params,
       url: BASE_URL + params.url,
       // 成功回调
       success: (res) => {
         resolve(res.data.message);
       },
       // 失败的回调
       fail: (err) => {
         reject(err);
       },
       complete: () => {
         wx.hideLoading();
       }
     })
   })
 }
 