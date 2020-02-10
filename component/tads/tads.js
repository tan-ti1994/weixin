// component/tads/tsbs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tads: {
      type: Array,
      value: []
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
    handleTadsChlick: function(e) {
      console.log(e)
      const id = e.currentTarget.dataset.id
      let {
        tads
      } = this.data;
      tads.forEach(v => v.id === id ? v.isActive = true : v.isActive = false);
      this.setData({
        tads
      })
      this.triggerEvent("tadsChange", tads)
    }
  }
})