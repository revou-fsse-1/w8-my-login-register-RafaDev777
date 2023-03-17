import "../lib/validationLib"
import { checkEmail, checkEmptyString, checkStringLength, checkUpperCase } from "../lib/validationLib";

const signIn = () =>{
    let email = document.querySelector("#emailLogin").value;
    let pw = document.querySelector("#pwLogin").value;

    const checkCredential = userData.find((a)=>(a.email = email) && (a.password = pw));
    const checkExist = userData.find((a)=>a.email = email);

    switch (false) {
        case (checkEmptyString(email)) :
            console.log("Please fill in your email!");
            break;
        case (checkEmail(email)) :
            console.log("Please enter a valid email!");
            break;
        case (checkEmptyString(pw)) :
            console.log("Please fill in your password");
            break;
        case (checkStringLength(pw)):
            console.log ("Your password must contain at least 8 characters");
            break;
        case (checkUpperCase(pw)) :
            console.log("Your password must contain at least 1 uppercase");
            break;
        case (checkLowerCase(pw)) :
            console.log("Your password must contain at least 1 lowercase");
            break;
        case (checkNumber(pw)) :
            console.log("Your password must contain at least 1 number");
            break;
        case (checkExist === true) :
            console.log("Your email doesn't exist, please be sure you've already registered")
            break;
        case (checkCredential === true) : 
            console.log("Please check your password");
            break;
        case (checkCredential === false) : 
            window.location.href = "./home/index.html"
    };
}

