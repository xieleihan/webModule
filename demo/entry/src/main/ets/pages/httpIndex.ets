import http from '@ohos.net.http';
import util from '@ohos.util';
import fs from '@ohos.file.fs';
import picker from '@ohos.file.picker';
import systemDateTime from '@ohos.systemDateTime';
import buffer from '@ohos.buffer';

@Entry
@Component
struct httpIndex {
  //连接、通讯历史记录
  @State msgHistory: string = ''
  //上传地址
  @State uploadUrl: string = "http://192.168.1.21:10089/upload-image"
  //上传后的文件名
  @State uploadFileName: string = ""
  //要上传的文件
  @State uploadFilePath: string = ""
  //是否允许上传
  @State canUpload: boolean = false
  scroller: Scroller = new Scroller()

  build() {
    Row() {
      Column() {
        Text("模拟上传示例")
          .fontSize(14)
          .fontWeight(FontWeight.Bold)
          .width('100%')
          .textAlign(TextAlign.Center)
          .padding(10)

        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {
          Text("上传的文件：")
            .fontSize(14)
            .width(100)
            .flexGrow(0)

          TextInput({ text: this.uploadFilePath })
            .enabled(false)
            .width(100)
            .fontSize(11)
            .flexGrow(1)

        }

        Flex({ justifyContent: FlexAlign.End, alignItems: ItemAlign.Center }) {
          Button("图库选择")
            .onClick(() => {
              this.selectImgFile()
            })
            .width(100)
            .fontSize(14)

          Button("其他文件")
            .onClick(() => {
              this.selectDocFile()
            })
            .width(100)
            .fontSize(14)
        }
        .width('100%')
        .padding(10)

        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {
          Text("上传地址：")
            .fontSize(14)
            .width(80)
            .flexGrow(0)

          TextInput({ text: this.uploadUrl })
            .onChange((value) => {
              this.uploadUrl = value
            })
            .width(110)
            .fontSize(11)
            .flexGrow(1)
        }
        .width('100%')
        .padding(10)

        Flex({ justifyContent: FlexAlign.Start, alignItems: ItemAlign.Center }) {
          Text("上传后文件名：")
            .fontSize(14)
            .width(100)
            .flexGrow(0)

          TextInput({ text: this.uploadFileName })
            .onChange((value) => {
              this.uploadFileName = value
            })
            .width(110)
            .fontSize(11)
            .flexGrow(1)

          Button("上传")
            .onClick(() => {
              this.uploadFile()
            })
            .enabled(this.canUpload)
            .width(70)
            .fontSize(14)
            .flexGrow(0)
        }
        .width('100%')
        .padding(10)

        Scroll(this.scroller) {
          Text(this.msgHistory)
            .textAlign(TextAlign.Start)
            .padding(10)
            .width('100%')
            .backgroundColor(0xeeeeee)
        }
        .align(Alignment.Top)
        .backgroundColor(0xeeeeee)
        .height(300)
        .flexGrow(1)
        .scrollable(ScrollDirection.Vertical)
        .scrollBar(BarState.On)
        .scrollBarWidth(20)
      }
      .width('100%')
      .justifyContent(FlexAlign.Start)
      .height('100%')
    }
    .height('100%')
  }

  //构造上传文件的body内容
  buildBodyContent(boundary: string, fileName: string, content: Uint8Array, contentType: string = "application/octet-stream") {
    let textEncoder = new util.TextEncoder();

    //构造文件内容前的部分
    let preFileContent = `--${boundary}\r\n`
    preFileContent = preFileContent + `Content-Disposition: form-data; name="image"; filename="${fileName}"\r\n`
    preFileContent = preFileContent + `Content-Type: ${contentType}\r\n`
    preFileContent = preFileContent + '\r\n'
    let preArray = textEncoder.encodeInto(preFileContent)

    //构造文件内容后的部分
    let aftFileContent = '\r\n'
    aftFileContent = aftFileContent + `--${boundary}`
    aftFileContent = aftFileContent + '--\r\n'
    let aftArray = textEncoder.encodeInto(aftFileContent)

    //文件前后内容和文件内容组合
    let bodyBuf = buffer.concat([preArray, content, aftArray])
    return bodyBuf.buffer
  }

  async copy2Sandbox(srcUri: string, fileName: string): Promise<string> {
    let context = getContext(this)
    //计划复制到的目标路径
    let realUri = context.cacheDir + "/" + fileName

    //复制选择的文件到沙箱cache文件夹
    try {
      let file = await fs.open(srcUri);
      fs.copyFileSync(file.fd, realUri)
      fs.close(file)
    } catch (err) {
      this.msgHistory += 'err.code : ' + err.code + ', err.message : ' + err.message;
    }

    return realUri
  }

  //上传文件
  async uploadFile() {
    //上传文件使用的分隔符
    let boundary: string = '----ShandongCaoxianNB666MyBabyBoundary' + (await systemDateTime.getCurrentTime(true)).toString()

    let sandFile = await this.copy2Sandbox(this.uploadFilePath, this.uploadFileName)

    //选择要上传的文件的内容
    let fileContent: Uint8Array = new Uint8Array(this.readContentFromFile(sandFile))

    //上传请求的body内容
    let bodyContent = this.buildBodyContent(boundary, this.uploadFileName, fileContent)

    //http请求对象
    let httpRequest = http.createHttp();
    let opt: http.HttpRequestOptions = {
      method: http.RequestMethod.POST,
      header: { 'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': bodyContent.byteLength.toString()
      },
      extraData: bodyContent
    }

    //发送上传请求
    httpRequest.request(this.uploadUrl, opt)
      .then((resp) => {
        this.msgHistory += "响应码：" + resp.responseCode + "\r\n"
        this.msgHistory += "上传成功\r\n"
      })
      .catch((e:Error) => {
        this.msgHistory += "请求失败：" + e.message + "\r\n"
      })
  }

  //选择图库文件
  selectImgFile() {
    let imgPicker = new picker.PhotoViewPicker();
    imgPicker.select().then((result) => {
      if (result.photoUris.length > 0) {
        this.uploadFilePath = result.photoUris[0]
        this.msgHistory += "select file: " + this.uploadFilePath + "\r\n";
        this.canUpload = true
        let segments = this.uploadFilePath.split('/')
        //文件名称
        this.uploadFileName = segments[segments.length-1]
      }
    }).catch((e:Error) => {
      this.msgHistory += 'PhotoViewPicker.select failed ' + e.message + "\r\n";
    });
  }

  //选择文件
  selectDocFile() {
    let documentPicker = new picker.DocumentViewPicker();
    documentPicker.select().then((result) => {
      if (result.length > 0) {
        this.uploadFilePath = result[0]
        this.msgHistory += "select file: " + this.uploadFilePath + "\r\n";
        this.canUpload = true
        let segments = this.uploadFilePath.split('/')
        //文件名称
        this.uploadFileName = segments[segments.length-1]
      }
    }).catch((e:Error) => {
      this.msgHistory += 'DocumentViewPicker.select failed ' + e.message + "\r\n";
    });
  }

  //从文件读取内容
  readContentFromFile(fileUri: string): ArrayBuffer {
    let file = fs.openSync(fileUri, fs.OpenMode.READ_ONLY);
    let fsStat = fs.lstatSync(fileUri);
    let buf = new ArrayBuffer(fsStat.size);
    fs.readSync(file.fd, buf);
    fs.fsyncSync(file.fd)
    fs.closeSync(file);
    return buf
  }
}