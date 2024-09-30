// require() 导入/加载
// 导包
const express = require('express')
// 创建程序
const app = express()

// 测试一下
// req: 请求对象 request
// res: 响应对象 response
app.get('/', (req, res) => {
    // 发送响应数据
    res.send('Hello World!')
})
app.get('/test', (req, res) => {
    let arr = [
        { id: 1, name: 'Tom' },
        { id: 2, name: 'Jerry' },
        { id: 3, name: 'Spike' }
    ]
    res.send({
        code: 200,
        message: '数据获取成功',
        data: arr
    })
})

// 设置端口
const port = 9008
app.listen(port, () => {
    console.log('Server is running');
    console.log('http://loaclhost:' + port);
})