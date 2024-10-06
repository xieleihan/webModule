# 接口文档

## 使用`Node.js`部署的后端服务

## 使用前须知

> 请在下面的测试中,提前查看下目录下的`db/database`文件下的这一部分
>
> ```javascript
> module.exports = {
>     mysql: {
>         host: '127.0.0.1',// 地址 默认是localhost或者127.0.0.1
>         user: 'root',// 用户名 默认是root
>         password: '123456',// 密码
>         database: 'vue2project',// 数据库名
>         port: '3306'// 端口 // 默认是3306
>     }
> }
> ```
>
> 这上面的是我自己的MySQL设置,如果你本地的服务设置跟我的不一致,请修改这个部分

## 使用文档

### 登录与注册

> > 可以使用`postman`进行调试,SQL文件在根目录下,用SQL文件在本地创建即可
>
> 下面的方式已经包含对密码的加密
>
> - [x] 对明文密码的加密
>
> - [ ] SQL 注入的风险
>
> **注册**
>
> - 接口地址:`http://localhost:9008/api/register`
>
> - 传递参数:`username`,`email`,`password`(三个参数均为**必须**)
>
> - 方法:**`POST`**
>
> **登录**
>
> - 接口地址:`http://localhost:9008/api/login`
>
> - 传递参数:`email`,`password`(两个参数均为**必须**)
>
> - 方法:**`POST`**

### 首页信息

> - 接口地址:`http://localhost:9008/api/homeinfo`
> - 传递参数: `无`
> - 方法:**`GET`**
>
> >  目前数据库提供的数据是测试数据,后续请修改数据为比较正常的假文数据
>
> 接口字段解析
>
> ```sql
> -- 以下没注明的声明的类型均为VARCHAR
> 
> id -- 主键 也作为唯一ID,请勿修改,该处为auto
> hometype  -- 类别,可做分类的详情块,目前只做一个类别,后续请添加一些内容
> img -- 文章图片,用随机图片生成就行,然后是用text方式存储,前端使用需要注意
> title -- 文章标题
> likenum -- 点赞人数 int存储
> avater longblob -- 作者头像,使用base64存储,MySQL数据类型是longblob
> avatertext -- 作者名
> writedate -- 日期,使用MySQL的datetime声明的数据类型格式必须严格为YYYY-MM-DD HH:MM:SS
> descinfo -- 文章具体内容
> ```
>
> 发现的部分可以做个随机从表里生成,减少请求数
>
> - [ ] 可以扩展其他内容在一次请求中完成,必须地址信息之类的

#### 写入首页的内容信息

> - 接口地址:`http://localhost/api/add`
>
> - 传递参数:*仅供参考,必须参数为下面的键*
>
> 	```json
> 	{
> 	    "id":10,
> 	    "hometype": "推荐",
> 	    "img": "https://picsum.photos/300/300?1",
> 	    "title": "这是写入测试",
> 	    "likenum": 100,
> 	    "avater": "base64编码数据",
> 	    "avatertext": "我是作者",
> 	    "writedate": "2024-10-05 00:00:08",
> 	    "descinfo": "这是描述内容"
> 	}
> 	```
>
> 	
>
> - 方法:**`POST`**
>
> - [ ] SQL 注入的风险
