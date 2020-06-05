var charA = "a".charCodeAt(0);
var charZ = "z".charCodeAt(0);
var charAA = "A".charCodeAt(0);
var charZZ = "Z".charCodeAt(0);

function caesar(str, shift) {
    //create new array
    var newArr = [];

    //check for each letter in str
    for(let i = 0; i < str.length; i++){
      var char = str.charCodeAt(i);
   
    //checks for large shift factors that are greater than the size of the alphabet
    if(shift > 26){
        //finds the remainder and sets shift to the proper amount to move
        shift = shift%26;
    }

    //if str(i) is lowercase
        if(char >= charA && char <= charZ){
            //create var for the char value plus the shift value
            //for comparison purposes
            let charCheck = Math.abs(char + shift);

            //if shifted char (charCheck) is less then 97/a (out of range)
            if(charCheck < charA){
                //find difference to know how much to shift 
                //back at the end of the alphabet
                let difference = Math.abs(charCheck - charA);
                //create the new moved char (newChar) and convert to a letter
                //+1 to make up for charZ itself
                let newChar = String.fromCharCode(charZ - difference + 1);
                //add to array
                newArr.push(newChar);
            }

            //if shifted char (charCheck) is greater than 122/z (out of range)
            else if(charCheck > charZ){
                //find difference to know how much to shift
                //back at the beginning of the alphabet
                let difference = Math.abs(charCheck - charZ);
                //create thew new moved char (newChar) and conver to a letter
                //-1 to make up for charA itself
                let newChar = String.fromCharCode(charA + difference - 1);
                //add to array
                newArr.push(newChar);
            }

            //if doesn't fall out of range after shift
            else if(charCheck >= charA && charCheck <= charZ) {
                //simply add shift to original char since its not out of range
                let newChar = String.fromCharCode(char + shift);
                newArr.push(newChar);
            }   
        }

        //if str(i) is uppercase
        else if(char >= charAA && char <= charZZ){
            let charCheck = Math.abs(char + shift);
            
            //if shifted char is less then 65/A
            if(charCheck < charAA){
                let difference = Math.abs(charCheck - charAA);
                let newChar = String.fromCharCode(charZZ - difference + 1);
                newArr.push(newChar);
            }

            //if shifted char is greater than 90/Z
            else if(charCheck > charZZ){
                let difference = Math.abs(charCheck - charZZ);
                let newChar = String.fromCharCode(charAA + difference - 1);
                newArr.push(newChar);
            }

            //if doesn't fall out of range after shift
            else if(charCheck >= charAA && charCheck <= charZZ) {
                let newChar = String.fromCharCode(char + shift);
                newArr.push(newChar);
            }   
        }

        //if str(i) is a special character, ignore and add to newArr
        else{
            newArr.push(str[i]);
        }
    }

    console.log(newArr.join(""));
    return newArr.join("");
}

caesar('Hello, World!', 75);
module.exports = caesar
