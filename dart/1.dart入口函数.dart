// 首先是没有带void的main主函数,这是有返回值的
// main() {
//   print("Hello World");
//   return 0;
// }
void main() {
  print("Hello World");
  // return 0; 可以看到void没有返回值,所以这里报错

  // 1.变量类型
  // dart有两种类型的变量声明,一种是var,一种是static
  // 比如
  var a = 1;
  print(a);
  int b = 1;
  print(b);
  String c = "Hello World";
  print(c);
  // c = a + b;// 因为我们给c声明的时候,是一个String类型,所以会报错
  // var c = a + b;// 这是是重复的声明,所以会报错
  var d = a + b;
  print(d);

  // dart大小写敏感,区分大小写
  var e = 1;
  var E = 2;
  
  // 声明最终变量
  // 两个count 和 final 推荐使用final count的特点是只能赋值一次,且一开始就得声明
  // final 特点是只能赋值一次,但是可以在声明的时候不赋值 属于延迟赋值
}
