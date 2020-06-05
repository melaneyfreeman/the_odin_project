const reverseString = function(str) {
    str = str.split("").reverse().join("");
    console.log(str);
    return str;
}

reverseString('123! abc!');

module.exports = reverseString
