const password = "Arithmetic12"
let passwordCounter = [0, 0, 0, 0, 0]

passwordArray = password.split('')
passwordSpaceCheck = password.split(' ')

if (passwordArray.length >= 10 && password.length <= 20){  //here i have added less than 20 as an additional constraint using the passwordCounter array
    for (i = 0; i < passwordArray.length; i++){
        if (passwordArray[i] * 0 === 0){                   //here im checking that there is a number using the passwordCounter array
            passwordCounter[0] += 1
        }
        if (passwordArray[i] * 0 !== 0){                   //here im checking that there is a letter using the passwordCounter array
            passwordCounter[1] += 1
            if (passwordArray[i] == passwordArray[i].toUpperCase()){
                passwordCounter[2] += 1                    

            } else{
                passwordCounter[3] += 1                    //here i'm checking that there is an upper case and lower case letter using the passwordCounter array
            }  
        }
        if (passwordSpaceCheck.length === 1){               //here im checking that there is a complete absence of spaces as an additional constraint using the passwordSpaceCheck array along with passwordCounter array.
            passwordCounter[4] += 1   
        }
        
    }
    if (passwordCounter[0] * passwordCounter[1] * passwordCounter[2] * passwordCounter[3] * passwordCounter[4] === 0){
        console.log("Password must consist of a capital and lowercase letter, a number and it must also have no spaces in it.")
    } else {
        console.log("Your password fit the criteria, please confirm password by entering it a second time.")
    }
    
} else {
    console.log("Password must be no less than 10 and no more than 20 characters in length.")
}

// if (passwordCounter[0] * passwordCounter[1] * passwordCounter[2] === 0){
//     console.log("Password must consist of a letter, a number and must have no spaces in it.")
// } else {
//     console.log("Your password fit the criteria, please confirm password by entering it a second time.")
// }              

//^^{{ this block of code was moved inside the if statement so it would not run if the password was too long or short}}