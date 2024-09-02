/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let candySet = new Set(candyType);
    let maxCandies = candyType.length / 2;
    return Math.min(candySet.size, maxCandies);
};