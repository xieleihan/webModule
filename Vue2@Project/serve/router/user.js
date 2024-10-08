const router = require('express').Router();
const db = require('../db/index.js');
const bcrypt = require('bcrypt');

// 定义盐的轮次，用于加密
const saltRounds = 10;

router.post('/register', async (req, res) => {
    let { username, email, password } = req.body;

    // 对密码进行加密处理
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        let sql = `insert into user (username,email,password) values ('${username}','${email}','${hashedPassword}')`;

        db.query(sql).then(result => {
            res.send({
                code: 200,
                message: '注册成功',
                data: result
            });
        }).catch(err => {
            res.send({
                code: 500,
                message: '注册失败',
                data: err
            });
        });
    } catch (error) {
        res.send({
            code: 500,
            message: '密码加密失败',
            data: error
        });
    }
});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    let sql = `SELECT * FROM user WHERE email = '${email}'`;

    db.query(sql).then(async (result) => {
        if (result.length > 0) {
            const user = result[0];

            // 验证密码
            const match = await bcrypt.compare(password, user.password);

            if (match) {
                res.send({
                    code: 200,
                    message: '登录成功',
                    data: user
                });
            } else {
                res.send({
                    code: 400,
                    message: '密码错误'
                });
            }
        } else {
            res.send({
                code: 404,
                message: '用户不存在'
            });
        }
    }).catch(err => {
        res.send({
            code: 500,
            message: '登录失败',
            data: err
        });
    });
});

router.post('/get-user-faceimg', async (req, res) => {
    const { username } = req.body;  // 从请求体中获取用户名

    // 构建 SQL 查询语句
    const sql = `SELECT user.username, user.email, faceimg.faceImg FROM user LEFT JOIN faceimg ON user.username = faceimg.username WHERE user.username = '${username}'`;


    try {
        // 执行 SQL 查询
        const result = await db.query(sql);

        // 检查是否查询到结果
        if (result.length > 0) {
            res.status(200).json({
                message: '查询成功',
                code:200,
                data: result[0]  // 返回查询结果的第一条数据
            });
        } else {
            res.status(404).json({
                message: '用户未找到',
                code:404,
                data: null
            });
        }
    } catch (err) {
        console.error("SQL Error:", err);
        res.status(500).json({
            message: '查询失败',
            code:500,
            error: err
        });
    }
});

router.post('/set-user-faceimg', async (req, res) => {
    const { username, faceImg } = req.body;

    // 检查是否提供了用户名和头像数据
    if (!username || !faceImg) {
        return res.status(400).send({
            message: '用户名或头像数据不能为空',
            code: 400
        });
    }

    // 直接使用字符串拼接方式构建 SQL 语句（不推荐）
    const sql = `INSERT INTO faceimg (username, faceImg) VALUES ('${username}', '${faceImg}') ON DUPLICATE KEY UPDATE faceImg = '${faceImg}';`;

    // 执行 SQL 查询
    db.query(sql)
        .then(result => {
            res.send({
                message: '头像设置成功',
                code: 200,
                data: result
            });
        })
        .catch(err => {
            res.status(500).send({
                message: '头像设置失败',
                code: 500,
                error: err
            });
        });
});

module.exports = router;