// 自适应
!(() => {
    win_resize()
    window.addEventListener('resize', win_resize)
    function win_resize() {
        $('.main .nav >*').show()
        if (innerWidth > 1400) {
            document.documentElement.style.setProperty('--bg1_img_fontsize', '10px')
        }
        else if (innerWidth > 1200) {
            document.documentElement.style.setProperty('--bg1_img_fontsize', '8px')

        }
        else if (innerWidth > 960) {
            document.documentElement.style.setProperty('--bg1_img_fontsize', '6px')
        }
        else {
            $('.main .nav >*').hide()
        }
    }
})()