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

module.exports = router;