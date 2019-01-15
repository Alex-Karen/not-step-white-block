//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            wx.login({
                success: function () {
                    wx.getUserInfo({
                        success: function (result) {
                            that.globalData.userInfo = result.userInfo
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            })
        }
    },
    getHeighestScore: function (scoreName, cb) {
        this.globalData[scoreName] = wx.getStorageSync(scoreName)
        typeof cb == "function" && cb(this.globalData[scoreName])
    },
    globalData: {
        userInfo: null,
        currentScore: 0,
        endlessScore: null,
        timeScore: null,
        speedScroe: null
    }
})