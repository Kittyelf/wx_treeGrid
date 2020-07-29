//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    theadData: ["设备名称","设备类型","通讯地址","资产编号","在线状态"],
    tbodyData: {
      index: 1,
      flag: 1,
      deviceName: '520000001',
      deviceType: '变压器',
      deviceAddress: '520000001',
      deviceToken: '520000001',
      isOnline: '1',
      nodes: [
        {
          index: 2,
          flag: 1,
          deviceName: '520000002',
          deviceType: '显示终端',
          deviceAddress: '520000002',
          deviceToken: '520000002',
          isOnline: '1',
          nodes:[{
            index: 3,
            flag: 0,
            deviceName: '520000004',
            deviceType: '显示终端',
            deviceAddress: '520000004',
            deviceToken: '520000004',
            isOnline: '1',
            nodes:[]
          }]
        },
        {
          index: 2,
          flag: 0,
          deviceName: '520000003',
          deviceType: '显示终端',
          deviceAddress: '520000003',
          deviceToken: '520000003',
          isOnline: '1',
          nodes:[]
        }
      ]
    }
  },
  //事件处理函数
  onLoad: function () {
   
  }
})
