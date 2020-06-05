const repeatString = function(str, num) {
    //create empty array to store repeated strs
    let strArr = [];

    //make sure number is 0 or greater
    if(num >= 0){
    //pushes repeated str to newArr num many times
    for(let i = 0; i < num; i++){
        strArr.push(str);
    }
    
    //array to str, join with no spaces
    str = strArr.join('');
    return str;

    }

    //if num is less than 0 return an error
    else{
        return "ERROR"
    }

}

repeatString('hey', 3);
module.exports = repeatString
