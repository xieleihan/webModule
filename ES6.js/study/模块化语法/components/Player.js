// 定义对象
const obj = {
    render(){
        let div = document.createElement("div");
        div.innerHTML = `<h3>播放器组件</h3>`;
        document.body.appendChild(div);
    }
}

// 导出组件时，修改组件的名称
export { obj as audioPlayer };