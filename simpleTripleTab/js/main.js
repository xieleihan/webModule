var provinceBox = document.querySelector("#province-select");
var cityBox = document.querySelector("#city-select");
var schoolBox = document.querySelector("#school-select");
// console.log(province);
// console.log(city);
// console.log(school);

for (var i = 0; i < province.length; i++){
    var option = document.createElement('option');
    option.innerHTML = province[i][1];
    option.value = province[i][0];
    provinceBox.appendChild(option);
}

// console.log(provinceOption);
var selectedProvince = "00";
updateCityOptions(selectedProvince);
provinceBox.addEventListener('change', function () {
    
    selectedProvince = provinceBox.value;
    updateCityOptions(selectedProvince);
    getData()
});


function updateCityOptions(provinceValue) {
    console.log("provinceValue:", provinceValue);
    // 清空城市选项
    schoolBox.innerHTML = "";
    // 清空学校选项
    cityBox.innerHTML = "";
    // 找到对应省份的城市
    var cities = city[provinceValue] || [];

    // 填充城市选项
    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = cities[i][1];
        option.value = cities[i][0];
        cityBox.appendChild(option);
    }

    selectedCity = city[selectedProvince][0][0];

    console.log("selectedCity:", selectedCity);
    updateSchoolsOptions(selectedCity);
}

var selectedCity = city[selectedProvince][0][0];
// updateSchoolsOptions(selectedCity);
cityBox.addEventListener('change', function () {

    selectedCity = cityBox.value;
    console.log("selectedCity:", selectedCity);
    updateSchoolsOptions(selectedCity);
    getData()
});


function updateSchoolsOptions(cityValue) {
    // 找到对应城市的学校
    var schoolsOp = allschool[cityValue] || [];
    schoolBox.innerHTML = "";
    for (var i = 0; i < schoolsOp.length; i++) {
        var option = document.createElement('option');
        option.innerHTML = schoolsOp[i][2];
        option.value = schoolsOp[i][0];
        schoolBox.appendChild(option);
    }
    selectSchools = schoolBox.options[schoolBox.selectedIndex].text;
    console.log("selectSchools:", selectSchools);
}
var selectSchools;
selectSchools = schoolBox.options[schoolBox.selectedIndex].text;
// console.log("selectSchools:", selectSchools);
schoolBox.addEventListener('change', function () {
    selectSchools = schoolBox.options[schoolBox.selectedIndex].text;
    console.log("schoolBox:", selectSchools);
    getData()
});

var output = document.querySelector(".output");
var str = "";
getData()
function getData() {
    str = "";
    str += provinceBox.options[provinceBox.selectedIndex].text + "-";
    str += cityBox.options[cityBox.selectedIndex].text + "-";
    str += selectSchools;
    output.innerHTML = str;
}