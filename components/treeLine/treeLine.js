// components/treeLine/treeLine.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    model: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    open: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle: function(e){
      this.setData({
        open: !this.data.open
      })
    }
  }
})
