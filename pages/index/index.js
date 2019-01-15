//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        userInfo: {},
        heighestScore: 0,
        longestTime: 0
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    goGame: function (e) {
        var gameType = e.target.id;
        console.log(gameType)
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        })

    }
})
