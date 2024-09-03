(() => {
    var oldWidth = 1912
    var oldRem = 16
    var BL = oldRem / oldWidth
    var newRem = innerWidth * BL
    document.documentElement.style.fontSize = newRem + 'px'
    window.onresize = function () {
        var newRem = innerWidth * BL
        document.documentElement.style.fontSize = newRem + 'px'
    }
})()