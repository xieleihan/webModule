# https://movie.douban.com/
import requests
import json
import urllib.parse

url = 'https://movie.douban.com/'
headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'}
res = requests.get(url,headers=headers, proxies=None)

# 测试
print(res, type(res))
# 页面响应判断
if res.status_code == 200:
    print('请求成功')
    html = res.text
    with open('douban.html', 'w',encoding='utf-8') as f:
        f.write(html)