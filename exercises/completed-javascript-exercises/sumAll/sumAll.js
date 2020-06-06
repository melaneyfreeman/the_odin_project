const sumAll = function(num1, num2) {
    //var for total
    let total = 0;

    //create two vars to check which given num is larger
    //so you know which one to count up to and start with
    let largerNum;
    let smallerNum;

    //comparing
    if(num1 < num2){
        largerNum = num2;
        smallerNum = num1;
    }
    else{
        largerNum = num1;
        smallerNum = num2;
    }

    //checking that the nums are positive and are in fact integers
    if(largerNum > 0 && smallerNum > 0 && Number.isInteger(largerNum) === true && Number.isInteger(smallerNum) === true){
        for(let i = smallerNum; i <= largerNum; i++){
            total = total + i;
        }
        console.log(total);

        return total;
    }

    //if not positive or int return error
    else{
        return "ERROR"
    }
}

sumAll(-10, 4);
module.exports = sumAll
