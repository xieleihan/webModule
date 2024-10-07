const express = require('express');
const db = require('../db/index.js');
const router = express.Router();

// 查询短信记录的POST接口(该处无法做防止SQL注入)
router.post('/query-sms', async (req, res) => {
    const { username, smsdate, smstype } = req.body;

    console.log("参数:", { username, smsdate, smstype });

    // 构建 SQL 查询语句
    let sql = 'SELECT * FROM sms WHERE 1=1';

    if (username) {
        sql += ` AND username = '${username}'`;
    }

    if (smsdate) {
        const dateOnly = smsdate.split(' ')[0]; // 仅获取 YYYY-MM-DD 部分
        sql += ` AND smsdate LIKE '${dateOnly}%'`;
    }

    if (smstype) {
        sql += ` AND smstype = '${smstype}'`;
    }

    console.log("SQL语句:", sql);

    try {
        const result = await db.query(sql);
        res.status(200).json({
            message: '查询成功',
            code:200,
            data: result
        });
    } catch (err) {
        console.error("SQL Error:", err);
        res.status(500).json({
            message: '查询失败',
            code:404,
            error: err
        });
    }
});

router.post('/add-sms', async (req, res) => {
    const { username, smsdate, container, smstype, avater, avatername } = req.body;

    // 构建 SQL 插入语句
    const sql = `
        INSERT INTO sms (username, smsdate, container, smstype, avater, avatername) 
        VALUES ('${username}', '${smsdate}', '${container}', '${smstype}', '${avater}', '${avatername}')
    `;

    console.log("Constructed SQL for insert:", sql);

    try {
        // 执行插入操作
        const result = await db.query(sql);
        res.status(200).json({
            message: '信息插入成功',
            code:200,
            data: result
        });
    } catch (err) {
        console.error("SQL Error:", err);
        res.status(500).json({
            message: '信息插入失败',
            code:500,
            error: err
        });
    }
});

module.exports = router;

