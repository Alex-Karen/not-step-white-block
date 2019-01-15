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
        wx.redirectTo({
            url: '../' + gameType + '/play'
        })
    },
    onLoad: function () {
        var that = this
        app.getUserInfo(function (userInfo) {
            that.setData({
                userInfo: userInfo
            })
        })
        app.getHeighestScore('endlessScore', function (heighestScore) {
            app.globalData.endlessScore = heighestScore || 0
            that.setData({
                heighestScore: heighestScore || 0
            })
        })
        app.getHeighestScore('timeScore', function (heighestScore) {
            app.globalData.timeScore = heighestScore || 0;
            that.setData({
                longestTime: heighestScore || 0
            })
        })
    }
})
