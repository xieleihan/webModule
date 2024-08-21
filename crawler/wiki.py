import requests
import json
import urllib.parse

# 定义url
url = 'https://zh.wikipedia.org/'

# 发送get请求，获取页面
res = requests.get(url)

# 测试
print(res, type(res))
# 页面响应判断
if res.status_code == 200:
    print('请求成功')
    html = res.text
    with open('wiki.html', 'w',encoding='utf-8') as f:
        f.write(html)