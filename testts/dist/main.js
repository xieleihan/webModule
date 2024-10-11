var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var sex = true || false;
var arr = [{ x: 50, y: 50, color: 'red' }];
var canvas = document.querySelector('canvas');
var Car = (function () {
    function Car(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.show = function () {
        console.log(this.brand, this.price);
    };
    return Car;
}());
var aodi = (function (_super) {
    __extends(aodi, _super);
    function aodi(brand, price) {
        return _super.call(this, brand, price) || this;
    }
    return aodi;
}(Car));
var aodi1 = new aodi('奥迪', 1000000);
aodi1.show();
//# sourceMappingURL=main.js.map