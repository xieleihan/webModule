@Entry
@Component

struct LoginpagesView{
  @State username: string = ""
  @State password: string = ""
  @State checked: boolean = false

  build() {
    Row() {
      Column() {
        Image($r('app.media.peacock_flat'))
          .width(150)
          .height(150)
          .position({
            top:".5%",
            right:"6%"
          })
        Text("登录"){

        }
        .fontSize('30vp')
        .fontWeight('bold')
        .width('100%')
        .textAlign(TextAlign.Start)
        .margin({
          top:"80vp",
          bottom:"20vp"
        })
        .letterSpacing(5)
        Text("欢迎使用千帆大模型"){

        }
        .fontSize("14vp")
        .fontColor("#ccc")
        .textAlign(TextAlign.Start)
        .width('100%')
        .letterSpacing(5)
        .margin({
          bottom:"20vp"
        })
        Column(){
        TextInput({
          placeholder: "请输入用户名",
          text: this.username,
        })
          .onChange((value: string) => {
            this.username = value
          })
          .margin({
            bottom:"15vp"
          })
          .height("50vp")

          TextInput({
            placeholder: "请输入密码",
            text: this.password,
          })
            .type(InputType.Password)
            .onChange((value: string) => {
              this.password = value
            })
            .margin({
              bottom:"15vp"
            })
            .height("50vp")

          Row(){
            Checkbox({ })
              .onChange((isChecked: boolean) => {
                this.checked = isChecked;
                console.log(this.checked.toString())
              })
            Text("我已阅读并同意《用户协议》和《隐私政策》"){}
            .fontSize("14vp")
          }
          .width("100%")
          .height("50vp")
          .margin({
            bottom:"15vp"
          })

          Button(){
            Text("登录"){}
            .fontSize("20vp")
            .fontWeight("bold")
            .fontColor("#fff")
            .onClick(()=>{
              console.log(this.username);
              console.log(this.password);
            })
          }
          .width("100%")
          .height("50vp")
          .margin({
            bottom:"20vp"
          })

          Button(){
            Text("返回"){}
            .fontSize("20vp")
            .fontWeight("bold")
            .fontColor("#007dfe")
            .onClick(()=>{
              console.log("返回")
            })
          }
          .width("100%")
          .height("50vp")
          .backgroundColor("#fff")
          .border({
            width: 1,
            color: "#007dfe"
          })
        }
          .position({
            top:"50%",
            left:"50%"
          })
          .translate({
            x: "-50%",
            y: "-50%"
          })
      }
      .width("100%")
      .height("100%")
      // .backgroundImage($r(this.arrBglist[Math.floor(Math.random() * this.arrBglist.length)]))
      // .backgroundImageSize(ImageSize.Cover)

      Text("Copyright © 2024 千帆大模型"){
      }
      .fontColor("#b3b3b3")
      .fontSize("13vp")
      .position({
        bottom:"1vp",
        left:"50%"
      })
      .translate({
        x: "-50%"
      })
    }
    .width("100%")
    .height("100%")
    .padding({
      left: "20vp",
      right: "20vp"
    })
    .backgroundImage($r("app.media.banner_background"))
    .backgroundImageSize(ImageSize.Cover)

  }
}