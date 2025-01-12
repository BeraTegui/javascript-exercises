const reverseString = function(word) {
        word = word.split('');
        let newStr = '';
        for(let i = (word.length - 1); i >= 0; i--){
        newStr += word[i];
        }
        return newStr;

        // Una solución más sencilla...
        // return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
