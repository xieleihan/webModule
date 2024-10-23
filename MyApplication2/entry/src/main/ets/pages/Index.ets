@Entry
@Component

struct Index{
  @State countIndex: number = 0

  build() {
    Row(){
      Row(){
        Text("千帆大模型"){

        }
        .fontSize("24vp")
        .fontColor(Color.White)

        Image($r('app.media.peacock_flat'))
          .width(30)
          .height(30)
      }
      .width("100%")
      .backgroundColor("#007dfe")
      .height("50vp")
      .position({
        top:0
      })
      .justifyContent(FlexAlign.SpaceBetween)
      .padding({
        left: "20vp",
        right: "20vp",
      })


      Row(){

        Scroll(){
          Column(){
            Text("111")
          }
          .width("100%")
          .height("100%")
          // .backgroundColor(Color.Red)
        }
        .width("100%")
        .height("100%")

        Row(){
          TextInput({placeholder: "请输入对话内容"})
          .width("100%")
          .height("50vp")

          Button(){
            Image($r('app.media.send'))
              .width(30)
              .height(30)
          }
          .width("50vp")
          .height("50vp")
          .position({
            right: 0,
            top: "50%"
          })
          .translate({
            y: "-50%"
          })
          .onClick(()=>{
            console.log("发送")
          })
        }
        .width("100%")
        .height("50vp")
        .position({
          bottom: 0,
          left: 0,
        })
      }
      .width("100%")
      .padding({
        left: "20vp",
        right: "20vp",
        bottom: "50vp",
        top: "50vp",
      })

      .height("100%")
      // .backgroundColor(Color.Red)


      Row(){
        Text("首页"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("首页")
          this.countIndex = 0
        })
        Text("功能"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("功能")
          this.countIndex = 1
        })
        Text("用户"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("用户")
          this.countIndex = 2
        })
        Text("关于"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("关于")
          this.countIndex = 3
        })
      }
      .position({
        bottom: 0,
        left: 0,
      })
      .width("100%")
      .height("50vp")
      .alignItems(VerticalAlign.Center)
      .justifyContent(FlexAlign.SpaceBetween)
      .padding({
        left: "20vp",
        right: "20vp",
      })
    }
    .width("100%")
    .height("100%")

  }
}