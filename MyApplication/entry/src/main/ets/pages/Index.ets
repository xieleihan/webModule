@Entry
@Component
struct Index {
  @State message: string = 'Hello World';
  @State isShow: boolean = true;
  build() {
    RelativeContainer() {
      Text(this.message)
        .id('HelloWorld')
        .fontSize(50)
        .fontWeight(FontWeight.Bold)
        .alignRules({
          center: { anchor: '__container__', align: VerticalAlign.Center },
          middle: { anchor: '__container__', align: HorizontalAlign.Center }
        })
    }
    .height('100%')
    .width('100%')
    .backgroundColor(this.isShow === true ? Color.Red:Color.Green)
    .onClick(()=>{
      if(this.isShow){
        this.isShow = false;
      }else{
        this.isShow = true;
      }
    })
  }
}