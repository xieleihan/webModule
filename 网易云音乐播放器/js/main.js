// 定义网络请求
const getRequest = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            beforeSend() {
                console.log("请求之前");
                $(".alact").html("正在请求中~~");
                $(".alact").show();
                $(".lists").hide();
            },
            success(content) {
                resolve(content);
            },
            error(err) {
                console.log("请求失败", err)
                reject(content);
                $(".alact").show();
                $(".alact").html("请求失败了嘞~~");
                $(".lists").hide();
            },
            complete() {
                console.log("请求完成")
                $(".alact").hide();
                $(".lists").show();
            }
        })
    })
}

// 搜索接口
const search = (keywords) => {
    return getRequest(`https://apis.netstart.cn/music/search`, { keywords })
}

// 渲染列表
const template = (arr) => {
    $('lists').html('');
    arr.forEach(item => {
        const { name, id, artists } = item;

        // console.log(artists[0].img1v1Url)

        var img1v1Url = artists[0].img1v1Url;

        const html = `
            <li>
                    <div class="info">
                        <img src="${img1v1Url}" alt="">
                        <span>${item.name}</span>
                    </div>
                    <button data-id="${item.id}">播放</button>
                </li>
        `
        $('.lists').append(html);
    })
}

// 初始化
$(function () {
    $(".search").on("click", function () {
        const inputMusicName = $(".inputMusicName").val();
        search(inputMusicName).then(res => {
            console.log("搜索结果", res);
            const { result } = res;
            const { songs } = result;
            // const [album] = songs;
            // const { name } = album;
            // const { id } = album;
            // var [artists] = songs;
            // var { artists } = artists;
            // var [artists] = artists;
            // console.log(artists)
            // const { img1v1Url } = artists;

            // console.log("歌曲名", name, "歌曲id", id, "图片", img1v1Url);
            template(songs);
        })

    })
})