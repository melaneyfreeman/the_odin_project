const palindromes = function(str) {
    processedStr = str.toLowerCase().replace(/[^A-Za-z]/g, "");
    return(
        processedStr.split("").reverse().join("") == processedStr
    );
};

palindromes("racecar");
module.exports = palindromes
