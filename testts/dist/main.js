var count = 0;
var sum = 20;
function findway(countSum, lastNum, lastArray) {
    if (countSum === sum && lastArray.length > 1) {
        count++;
        console.log("".concat(count, ": ").concat(lastArray.join('->')));
        return;
    }
    for (var i = lastNum + 1; i <= sum - countSum && i > 0; i++) {
        findway(countSum + i, i, lastArray.concat(i));
    }
}
function main() {
    findway(0, 0, []);
    console.log("".concat(count, "\u79CD\u65B9\u6CD5"));
}
main();
//# sourceMappingURL=main.js.map