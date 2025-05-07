import * as THREE from 'three';
console.log(THREE.REVISION);

const scene = new THREE.Scene(); // 创建场景
const camera = new THREE.PerspectiveCamera(
    45, // 视野角度,视角越大看到的范围越大
    window.innerWidth / window.innerHeight, // 视野宽高比
    0.1, // 近裁剪面,小于这个值的物体不会被渲染
    1000 // 远裁剪面,大于这个值的物体不会被渲染
)

// 创建渲染器
const renderer = new THREE.WebGLRenderer({
    antialias: true, // 抗锯齿
    alpha: true // 透明背景
})
renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器大小
renderer.setPixelRatio(window.devicePixelRatio); // 设置像素比
renderer.setClearColor(0x000000, 0); // 设置背景颜色和透明度

document.body.appendChild(renderer.domElement); // 将渲染器添加到页面中

// 创建一个立方体
const geometry = new THREE.BoxGeometry(1, 1, 1); // 创建几何体
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // 创建材质
const cube = new THREE.Mesh(geometry, material); // 创建网格对象
scene.add(cube); // 将立方体添加到场景中
// 设置相机位置
camera.position.z = 5; // 设置相机位置
// 设置相机朝向
camera.lookAt(cube.position); // 设置相机朝向立方体
// 渲染页面
renderer.render(scene, camera); // 渲染场景和相机
function animate() { 
    requestAnimationFrame(animate); // 请求动画帧
    cube.rotation.x += 0.01; // 旋转立方体
    cube.rotation.y += 0.01; // 旋转立方体
    renderer.render(scene, camera); // 渲染场景和相机
}
animate(); // 开始动画循环