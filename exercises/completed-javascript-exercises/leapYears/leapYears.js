const leapYears = function(num) {
    //create bool for whether or not
    //the year is a leap year
    //using this to avoid returns in the
    //logic
    let isLeapYear = false;

    //first check if it is divisble by 400
    if(num % 400 === 0){
        isLeapYear = true;
        console.log(isLeapYear);
    }

    //if not divisible by 400, check if
    //divisble by 4 but not divisible by 100
    else if(num % 4 === 0 && num % 100 != 0){
        isLeapYear = true;
        console.log(isLeapYear);   
    }

    //doesn't match, so not a leap year
    else{
        isLeapYear = false;
        console.log(isLeapYear);
    }

    return isLeapYear;
}

leapYears(700);
module.exports = leapYears
