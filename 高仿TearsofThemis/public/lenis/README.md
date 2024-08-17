# 介绍
> 该文件夹主要实现的是平滑滚动,该文档来源GitHub,感谢`darkroom.engineering`
```javascript
// 启动函数
const lenis = new Lenis();
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
requestAnimationFrame(raf);
```