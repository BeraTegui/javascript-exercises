const removeFromArray = function(array, remove) {
    let arr = array;
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(array[i] === remove){
            continue
        } else{
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
