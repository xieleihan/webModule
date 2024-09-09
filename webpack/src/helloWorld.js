// 导入css文件
// import './css/reset.css';
// import './css/style.css';
// import './css/index.less';
import './css/index.scss';

// 导入图片资源
import s1 from './images/WiFi6.png'// 小图标
import s2 from './images/2eb60e64791c9dd50c24426a94c0464ba66009d2.jpg' // 大图

console.log("Hello World!");
const getRandomeNumber = () => Math.random();
console.log(getRandomeNumber());

// 创建一个img元素
const createImg = (src) => {
    const img = new Image();
    img.src = src;
    img.style.width = '100px';
    img.style.height = '100px';
    document.body.appendChild(img);
}
createImg(s1);
createImg(s2);