@Entry
@Component

struct Index{
  build() {
    Row(){
      Row(){
        Text("首页"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("首页")
        })
        Text("功能"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("功能")
        })
        Text("用户"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("用户")
        })
        Text("关于"){}
        .fontSize("20vp")
        .fontWeight("bold")
        .fontColor("#000000")
        .onClick(()=>{
          console.log("关于")
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
    }
    .width("100%")
    .height("100%")
    .padding({
      left: "20vp",
      right: "20vp"
    })
  }
}