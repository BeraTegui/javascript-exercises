const removeFromArray = function(array, ...remove) {
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        let check = true;
        for(const rem of remove){
            if(array[i] === rem){
                check = false;
            }
        }
        if(check){
            newArr.push(array[i]);
        }
        
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
