const repeatString = function(string, num) {
    let newString = "";
    if(num < 0){
        return 'ERROR';
    } else{
        for(;num > 0; num--){
            newString += string;
        }
        return newString;
    }
};

// Do not edit below this line
module.exports = repeatString;
