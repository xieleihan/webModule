import '../css/style.less';
import $ from 'jquery'; // 导入jquery

class Page{
    constructor() {
        this.inputVal = $(".textInput")[0];
        this.addbtn = $(".add")[0];
        this.countSum = $(".countSum")[0];
        this.countWc = $(".countWc")[0];
        this.countWwc = $(".countWwc")[0];
        this.areo = $(".areo")[0];
        this.count = $(".areo li").length;
        this.newCount = 0;
        
        this.init();
    };
    getValue() {
        
        this.addbtn.onclick = () => {
            // console.log(this.inputVal.value);
            let liElement = document.createElement("li");
            let divLeft = document.createElement("div");
            divLeft.className = "left";
            let inputCheck = document.createElement("input");
            inputCheck.type = "checkbox";
            let span = document.createElement("span");
            span.innerText = this.inputVal.value;
            let divRight = document.createElement("button");
            divRight.className = "right";
            divRight.innerText = "X";
            liElement.appendChild(divLeft);
            divLeft.appendChild(inputCheck);
            divLeft.appendChild(span);
            liElement.appendChild(divRight);
            this.areo.appendChild(liElement);
            this.count = $(".areo li").length;
            this.countSum.innerText = this.count;
            this.countWwc.innerText = this.count;
            this.inputVal.value = "";
        }
    }
    updateLi() {
        // 事件委托
        this.areo.onclick = (e) => {
            let target = e.target;
            // console.log(target.parentNode.childNodes[0].childNodes[0].checked);
            if (target.checked === true) {
                this.newCount++;
                this.countWc.innerText = this.newCount;
                this.countWwc.innerText = this.count - this.newCount;
            }
            if (target.checked === false) {
                this.newCount--;
                this.countWc.innerText = this.newCount;
                this.countWwc.innerText = this.count - this.newCount;
            }
            if (target.nodeName === 'BUTTON' && target.parentNode.childNodes[0].childNodes[0].checked === false) {
                // console.log("1111");
                target.parentNode.remove();
                this.count = $(".areo li").length;
                this.countSum.innerText = this.count;
                this.countWc.innerText = this.newCount;
                this.countWwc.innerText = this.count;
            }
            if (target.nodeName === 'BUTTON' && target.parentNode.childNodes[0].childNodes[0].checked === true) {
                target.parentNode.remove();
                this.newCount--;
                this.count = $(".areo li").length;
                this.countSum.innerText = this.count;
                this.countWc.innerText = this.newCount;
                this.countWwc.innerText = this.count - this.newCount;
            }
        }
    }
    init() {
        this.countSum.innerText = 0;
        this.countWc.innerText = 0;
        this.countWwc.innerText = 0;
        this.getValue();
        this.updateLi();
    }
}
var page = new Page();
page.init();
// console.log($);