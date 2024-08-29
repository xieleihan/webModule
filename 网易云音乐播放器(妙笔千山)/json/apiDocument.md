https://api.uomg.com/doc-rand.music.html

接口地址：https://api.uomg.com/api/rand.music
返回格式：json/mp3
请求方式：get/post
请求示例：https://api.uomg.com/api/rand.music?sort=热歌榜&format=json



请求参数说明：

|      | 名称   | 必填 | 类型   | 说明                                                         |
| :--- | :----- | :--- | :----- | :----------------------------------------------------------- |
|      | sort   | 否   | string | 选择输出分类[热歌榜\|新歌榜\|飙升榜\|抖音榜\|电音榜]，为空输出热歌榜 |
|      | mid    | 否   | int    | 网易云歌单ID                                                 |
|      | format | 否   | string | 选择输出格式[json\|mp3]                                      |

返回参数说明：

|      | 名称 | 类型   | 说明               |
| :--- | :--- | :----- | :----------------- |
|      | code | string | 返回的状态码       |
|      | data | string | 返回歌曲数据       |
|      | msg  | string | 返回错误提示信息！ |

返回示例：

```
{
 "code": 1,
 "data": {
  "name": "隔壁泰山",
  "url": "http:\/\/music.163.com\/song\/media\/outer\/url?id=862101001.mp3",
  "picurl": "http:\/\/p1.music.126.net\/pbT0ag5PXJwYzFJ7YklMCA==\/109951163386629013.jpg"
 }
}
```





**搜索LRC歌词API接口，示例：**

> https://tools.rangotec.com/api/anon/lrc?title=可能&artist=程响

**入参：**

> title：歌名，必填项。[ ](https://rangotec.com/archives/956) 会过滤掉所有特殊字符，请提前处理好。
>
> artist：歌手，选填。辅助筛选，会过滤掉所有特殊字符，请提前处理好。

**出参：**

json格式的LRC列表，最多50条。200成功，其他均为错误。
