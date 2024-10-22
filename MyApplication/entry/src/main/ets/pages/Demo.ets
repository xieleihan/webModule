@Entry
@Component
struct Demo{
  // 定义尺寸


  build(){
    Column(){
      Row(){
        Text(){}
        .width(100)
        .height(100)
        .backgroundColor(Color.Orange)
        .position({
          y:-50,
          x:0
        })
        .borderRadius('50%')

        Text(){}
        .width(100)
        .height(100)
        .backgroundColor(Color.Green)
        .position({
          y:0,
          x:-50
        })
        .borderRadius('50%')
      }
      .width(100)
      .height(100)
      .backgroundColor(Color.Red)
      .margin({
        top: 100,
        left: 100
      })
      .rotate({
        angle: 45
      })

      // 图片组件
      // 图片资源两种情况: 1.网络图片,2.本地图片
      Row(){
        Image('https://avatars.githubusercontent.com/u/57227318?v=4&size=64')
          .width(100)
          .height(100)
        Image($r('app.media.startIcon'))
          .width(100)
          .height(100)
      }
    }
  }
}