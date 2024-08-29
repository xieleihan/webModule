var flag = true;
$(".center").on("click", function () {
    if (flag) {
        $(".btn").css("background", "url(./images/play.png) no-repeat");
        $(".box").css("animation-play-state", "running");
        
        flag = false;
        if ($('audio')[0].onerror) {
            window.alert('音乐没有版权，请刷新页面重试');
        } else {
            $('audio')[0].play();
            $(".box").css("animation", "move 10s linear infinite");
        }
    } else {
        flag = true;
        $(".btn").css("background", "url(./images/pause.png) no-repeat");
        $(".box").css("animation-play-state", "paused");
        $('audio')[0].pause();
    }
});

$('.toggleBtn').on('click', function () {
    flag = true;
    $(".btn").css("background", "url(./images/pause.png) no-repeat");
    $(".box").css("animation-play-state", "paused");
    $('audio')[0].pause();
    $(".box").css("animation", "none");

    $('box').css('animation', 'none');
    $.get('https://api.uomg.com/api/rand.music?sort=新歌榜&format=json', function (data) {
        console.log(data);
        // console.log(data.data.name); // 歌曲名
        console.log(data.data.url); // 歌曲链接
        // console.log(data.data.picurl); // 歌曲封面
        $('.songName').text(data.data.name);
        $('audio source').attr('src', data.data.url);
        $('audio')[0].load();
        if(data.data.picurl != '' && $.get(data.data.picurl).status == 200) {
            $('.content').css("background-image", "url(" + data.data.picurl + ")");
        } else {
            $('.content').css("background-image", "url(./images/bg_center.png)");
        }
        
    })
});

