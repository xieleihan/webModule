const express = require('express');
const db = require('../db/index.js'); // 引入数据库连接
const router = express.Router();

// POST 请求，查询购物车数据,这个地方可以缺省做全部查询,又可以指定查询
router.post('/get-cart', async (req, res) => {
    const { shopname, producttype } = req.body; // 根据前端传来的数据进行查询

    // 构建 SQL 查询语句
    let sql = 'SELECT * FROM cart WHERE 1=1';  // 初始查询语句，查询所有数据

    // 如果传递了 `shopname`，则添加条件
    if (shopname) {
        sql += ` AND shopname = '${shopname}'`;
    }

    // 如果传递了 `producttype`，则添加条件
    if (producttype) {
        sql += ` AND producttype = '${producttype}'`;
    }

    console.log("SQL语句:", sql);

    try {
        // 执行查询操作
        const result = await db.query(sql);
        res.status(200).json({
            message: '购物车数据查询成功',
            code: 200,
            data: result
        });
    } catch (err) {
        console.error("SQL Error:", err);
        res.status(500).json({
            message: '购物车数据查询失败',
            code: 500,
            error: err
        });
    }
});

module.exports = router;