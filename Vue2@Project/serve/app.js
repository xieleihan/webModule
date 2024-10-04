// require() 导入/加载
// 导包
const express = require('express')
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
// 创建程序
const app = express()

const db = require('./db/index.js')

// 使用中间件
// app.use(cors())
app.use(cors({
    origin: '*', // 只允许来自这个域名的请求
    methods: 'GET,POST,PUT,DELETE', // 允许的HTTP方法
    allowedHeaders: 'Content-Type,Authorization', // 允许的自定义头
    expressHeaders: 'Content-Type,Authorization', // 允许的自定义头
}))

app.use(bodyParser.urlencoded({ extended: false }))

// 测试一下
// req: 请求对象 request
// res: 响应对象 response
app.get('/', (req, res) => {
    // 发送响应数据
    res.send('Hello World!')
})

// // 测试一下
// app.get('/test', (req, res) => {
//     let arr = [
//         { id: 1, name: 'Tom' },
//         { id: 2, name: 'Jerry' },
//         { id: 3, name: 'Spike' }
//     ]
//     res.send({
//         code: 200,
//         message: '数据获取成功',
//         data: arr
//     })
// })

// // 测试用,请勿生产环境使用
// app.get('/api/getData',async (req, res) => {
//     let sql = 'select * from user'
//     db.query(sql).then(result => {
//         res.send({
//             code: 200,
//             message: '数据获取成功',
//             data: result
//         })
//     }).catch(err => {
//         res.send({
//             code: 500,
//             message: '数据获取失败',
//             data: err
//         })
//     })
// })
const userRouter = require('./router/user');
app.use(express.json());
app.use('/api', userRouter)

// 设置端口
const port = 9008
app.listen(port, () => {
    console.log('Server is running');
    console.log('http://loaclhost:' + port);
})