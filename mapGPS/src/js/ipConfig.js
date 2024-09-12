// ip.js
let lng, lat;

async function getIPLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        console.log("你好,你当前的IP地址是: " + data.ip + " 来自于: " + data.city + " " + data.country + " " + data.org + " 你当前的经纬度是: " + data.latitude + " " + data.longitude + "\n请注意你的行为,不要违法喵~");

        lng = data.longitude;
        lat = data.latitude;

        console.log(lng, lat);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 函数返回经纬度
function returnLng() {
    return lng;
}

function returnLat() {
    return lat;
}

// 导出函数
module.exports = { getIPLocation, returnLng, returnLat };
