const removeFromArray = function(arr, ...args) {
    //create empty array to stick all of the ...args into
    let argsArr = [];

    //combine ...args into one array
    //for each ...args 
    //start at i = 1 to skip the given array (arr)
    for(var i = 1; i < arguments.length; i++){
            argsArr[i] = arguments[i]; 
    }

    //sort array to make filtering easier
    argsArr.sort(function(a,b){return a-b});

    //remove extra array index that gets added on at the end
    argsArr.splice(argsArr.length-1, 1);

    //for each k in given arr && for each j in argsArr
    for(var k = 0; k < arr.length; k++){
        for(var j = 0; j < argsArr.length; j++){
            //check if there is a match
             if(arr[k] === argsArr[j]){
                //remove the match from the given array
                arr.splice(k, 1);
            }
        }
    }

    console.log("argument array: " + argsArr);
    console.log("filtered array: " + arr);
    return arr;

}

removeFromArray([1, 2, 3], "1", 3);
module.exports = removeFromArray
