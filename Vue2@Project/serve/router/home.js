const router = require('express').Router();
const db = require('../db/index.js');

// 首页信息
router.get('/homeinfo', async (req, res) => {
    let sql = 'SELECT * FROM homeinfo';

    try {
        const result = await db.query(sql); // 查询数据库中的homeinfo数据
        let responseData = {};

        // 遍历结果并构造JSON格式
        result.forEach(item => {
            // 如果该 hometype 还未在 responseData 中，创建一个空数组
            if (!responseData[item.hometype]) {
                responseData[item.hometype] = [];
            }

            // 将每一条记录 push 进对应的 hometype 数组
            responseData[item.hometype].push({
                "id": item.id,
                "img": item.img,
                "title": item.title,
                "likenum": item.likenum,
                "avater": item.avater,  // base64格式的图像
                "avatertext": item.avatertext,
                "writedate": item.writedate,
                "descinfo": item.descinfo
            });
        });

        res.json(responseData); // 返回JSON格式的数据
    } catch (err) {
        res.status(500).json({
            message: '获取数据失败',
            error: err
        });
    }
});



module.exports = router;

