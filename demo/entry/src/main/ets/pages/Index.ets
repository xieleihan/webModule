
import picker from '@ohos.file.picker';
import fs from '@ohos.file.fs';
import request from '@ohos.request';
import http from '@ohos.net.http';

import { common } from '@kit.AbilityKit';

// 定义类型
interface UploadResponse {
  body: string
}

export interface Response {
  /**
   * 业务状态码
   */
  code: number;

  /**
   * 响应数据
   */
  data: Data;

  /**
   * 响应消息
   */
  message: string;
}

/**
 * 响应数据
 */
export interface Data {
  /**
   * 上传成功的图片-在线地址
   */
  url: string;
}


// 实例化 选项对象
const photoSelectOptions = new picker.PhotoSelectOptions();
// 过滤选择媒体文件类型为IMAGE
photoSelectOptions.MIMEType = picker.PhotoViewMIMETypes.IMAGE_TYPE;
// 选择媒体文件的最大数目
photoSelectOptions.maxSelectNumber = 1;

@Entry
@Component
struct Page03_uploadImg {

  @State img :string =''

  private context = getContext(this) as common.UIAbilityContext;
  @State cachePath: string = '';

  build() {
    Navigation() {

      Column() {

        Image(this.img)

        Button('选择并上传图片')
          .onClick(() => {
            console.log("这是点击了上传图片的按钮")
            // 创建 图片选择对象
            const photoViewPicker = new picker.PhotoViewPicker();
            console.log("这是创建了图片选择对象",photoViewPicker)
            // 调用 select 方法，传入选项对象
            photoViewPicker.select(photoSelectOptions)
              .then(res => {
                const uri = res.photoUris[0]
                console.log(uri)
                // 因为只选了一张
                // AlertDialog.show({ message: '图片路径为:' + uri })

                // 三、拷贝文件到缓存目录
                // 将文件保存到缓存目录(只能上传在缓存目录中的文件)
                const context = getContext(this)
                console.log(context+"zheshicontext")
                const fileType = 'png'
                // 生成一个新的文件名
                const fileName = Date.now() + '.' + fileType
                console.log(fileName)
                // 通过缓存路径+文件名 拼接出完整的路径
                const copyFilePath = context.cacheDir + '/' + fileName
                console.log(copyFilePath)

                // 将文件 拷贝到 临时目录
                try {
                  const file = fs.openSync(uri, fs.OpenMode.READ_ONLY);
                  fs.copyFileSync(file.fd, copyFilePath);
                } catch (error) {
                  console.error("File operation error:", error);
                }

                // 四、上传图片
                // 上传文件
                let files: Array<request.File> = [
                // internal://cache/ 固定的
                // name 和接口文档的要求对上
                  { filename: fileName, type: fileType, name: 'image', uri: `internal://cache/${fileName}` }
                ]
                console.log("上传文件要求对上",files)

                console.log("源文件路径:", uri);
                console.log("目标文件路径:", copyFilePath);
                console.log(context.cacheDir)

                const applicationContext = this.context.getApplicationContext();
                const cacheDir = applicationContext.cacheDir;
                console.log("这是缓存目录",cacheDir+"/"+fileName) // 这是正确的
                const cacheFilePath = cacheDir + '/' + fileName


                request.uploadFile(context, {

                  url: 'http://127.0.0.1:10089/upload-image', // url 地址

                  method: http.RequestMethod.POST, // 请求方法
                  header: {
                    // 和接口文档的要求的格式对象
                    contentType: 'multipart/form-data',
                  },
                  files, // 文件信息
                  data: [] // 额外提交的数据，不能省略
                })
                  .then((res => {
                    // 获取响应的内容
                    console.log("进来了res这里")
                    res.on('headerReceive', (value) => {
                      const uploadRes = (value as UploadResponse)
                      console.log("这是上传图片的响应",uploadRes)
                      const response = JSON.parse(uploadRes.body) as Response
                      console.log("这是上传图片的响应",response)
                      AlertDialog.show({
                        message: response.data.url
                      })
                      this.img = response.data.url
                    })
                  }))
                  .catch((error: Error) => {
                    console.error(error.message)
                    AlertDialog.show({
                      message: '上传失败'
                    })
                  })
              })
          })
      }
    }
    .titleMode(NavigationTitleMode.Mini)
    .title('上传图片')
  }
}