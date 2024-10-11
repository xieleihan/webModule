/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let candySet = new Set(candyType);
    let maxCandies = candyType.length / 2;
    return Math.min(candySet.size, maxCandies);
};

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    let wordCount = {};
    let words = paragraph.toLowerCase().split(/\W+/);
    for (let word of words) {
        if (!banned.includes(word)) {
            wordCount[word] = (wordCount[word] || 0) + 1;
        }
    }
    let maxCount = 0;
    let mostCommonWord = '';
    for (let word in wordCount) {
        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            mostCommonWord = word;
        }
    }
    return mostCommonWord;
};

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let cIndexes = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            cIndexes.push(i);
        }
    }
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let minDistance = s.length;
        for (let index of cIndexes) {
            minDistance = Math.min(minDistance, Math.abs(i - index));
        }
        result.push(minDistance);
    }
    return result;
};