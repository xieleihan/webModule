// map.js
const { returnLng, returnLat, getIPLocation } = require('./ipConfig');

let lng;
let lat;

async function initializeMap() {
    // 调用获取IP的函数
    await getIPLocation();

    lng = returnLng() || 116.404; // 如果没有获取到经纬度，则使用默认值
    lat = returnLat() || 39.915;
    
    var map = new BMapGL.Map("allmap");    // 创建Map实例
    
    map.centerAndZoom(new BMapGL.Point(lng, lat), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);       // 开启鼠标滚轮缩放
    map.setMapType();  // 地图类型(BMAP_SATELLITE_MAP)卫星图,缺省就是普通的
    

    map.clearOverlays();
    var new_point = new BMapGL.Point(lng, lat);
    var marker = new BMapGL.Marker(new_point);  // 创建标注
    map.addOverlay(marker);              // 将标注添加到地图中
    map.panTo(new_point);
}



export default initializeMap;
