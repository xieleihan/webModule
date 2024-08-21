# 导入模块
import urllib.request
# 定义一个url
response = urllib.request.urlopen('https://baidu.com/')
# 读取网页内容
html = response.read()
# 打印内容
print(html)