// 网络请求
// 基于Promise基础进行封装
const request = (url,data={}) => {
    // 返回Promise实例
    return new Promise((resolve,reject)=>{
        // ajax编程
        $.ajax({
            url: url,
            type:'get',
            data: data,
            beforeSend(){
                console.log("请求之前");
                $(".loading").show();
            },
            success(content){
                // console.log("请求成功",content)
                // 符合条件
                resolve(content);
            },
            error(err){
                console.log("请求失败",err)
                // 不符合条件
                reject(content);
            },
            complete(){
                console.log("请求完成")
                $(".loading").hide();
            }
        })
    })
}

// 接口一：搜索
const search = (keywords)=> {
    return request(`https://apis.netstart.cn/music/search`,{keywords})
}

// 接口二：其他接口
// const 其他接口 = (其他参数)=> {
//     return request(`https://apis.netstart.cn/music/其他接口`,{其他参数})
// }

