// 定义函数 代表搜索组件

// 导出搜索模块
export const search = function(){
    let div = document.createElement("div");
    div.innerHTML = `<h3>搜索组件</h3>`;
    document.body.appendChild(div);
}
// 导出模块1
export const comp1 = function(){
    let div = document.createElement("div");
    div.innerHTML = `<h3>组件1</h3>`;
    document.body.appendChild(div);
}
// 导出模块2
export const comp2 = function(){
    let div = document.createElement("div");
    div.innerHTML = `<h3>组件2</h3>`;
    document.body.appendChild(div);
}