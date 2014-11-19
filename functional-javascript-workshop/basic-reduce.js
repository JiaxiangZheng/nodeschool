// Array.reduce accept a **function** (say `f`) and an **optional initial value**
// (say `intial`)
// f will accept four parameter (prev, cur, index, array), we can store the
// return value in prev
function countWords(inputWords) {
    return inputWords.reduce(function (prev, word) {
        if (prev[word]) {
            prev[word]++
        } else {
            prev[word] = 1
        }
        return prev;
    }, {});
}

module.exports = countWords
