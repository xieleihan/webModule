@Entry
@Component
struct User{
  build(){
    Column(){
      Text("组件1"){

      }.width(100).height(100).backgroundColor(Color.Blue)
      // .opacity(0) // 设置透明度
      // .visibility(Visibility.Hidden) // 设置可见性
      .visibility(Visibility.None)
      Text("组件2"){

      }.width(100).height(100).backgroundColor(Color.Green)
      .position({
        y:50,
        x:50
      })
      .border(
        {
          width:5,
          color:Color.Red,
          style:BorderStyle.Solid
        }
      )
    }
  }
}