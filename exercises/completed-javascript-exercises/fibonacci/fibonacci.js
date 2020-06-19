const fibonacci = function(num) {
    num = parseInt(num, 10);
    let arr = [0,1];
    if(num < 1){
        console.log("oops");
        return "OOPS";
    }

    for(let i = 2; i < num + 1; i++){
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    console.log(arr[num]);
    return arr[num];

}

fibonacci("8");
module.exports = fibonacci
