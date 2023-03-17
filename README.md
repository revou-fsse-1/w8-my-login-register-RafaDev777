# Login and Register Assignment

This website was made to complete the w8 assignment. To add more challange to the assignment i decide to make the login page and register as one page.

Preview : [rav-login-register.netlify.app](rav-login-register.netlify.app)

## Pseudocode of the website

to make this website i try to made the pseudo code first to create better understanding of how the process going to works

### Login and register page

```javascript
load the page;
load login form;
hide register form;

const userData = [{
    id:1, email:"admin@gmail.com", password: "Admin123"
},];
const getData = localStorage.getItem("userData");


function signIn {
    email !isExist? "email doesnt exist":
    password !isRight? "you may enter wrong password or email":
    windows.location "homepage.html";
};

function checkEmail {
    email !isEmpty? "please fill in your email":
    email !isExist? "email has already been registered":
    return (true)

}

function checkPassword{
    password !isEmpty? "please fill in your password":
    password !checkLength? "minimum 8 characters":
    password !checkUpperCase? "must have at least 1 upper case letter":
    password !checkLowerCase? "must have at least 1 lower case letter":
    return(true)
}


function signUp {
    !(checkEmail === checkPassword) ? "please check your Email or password" : signUpSuccess
}

function signUpSuccess {
    data.push;
    alert("account succesfully created");
    document.getElementById("signInForm").classList.add("hidden");
    document.getElementbyId("signUpForm").classList.remove("hidden");
}

let signUpEmailInput = document.getElementById("nameInput") ;
let signUpPasswordInput = document.getElementById("nameInput") ;
signUpEmailInput.addEventListener("input",
 registerInputHandler);
signUpPasswordInput.addEventListener("input",
 registerInputHandler);

function registerInputHandler {
    let styleFalse = style.("glowing red")
    let styleTrue = style.("glowing green")
   checkEmail ? signUpEmailInput.styleTrue: signUpPasswordInput.styleFalse;
   checkPassword ? signUpPasswordInput.styleTrue : signUpPasswordInput.styleFalse;
}
```

### home page

```javascript
check localStorage
if localStorage = null {
    window.location "index.html?access=denied"
} else {
    document.querySelector(".userEmailDisplay").innerHTLML = `Hello ${userEmail}`;
}

create dataArray;
 consist of [{name,age,email}]
create table;
for each data {
    create 1 row for name;
    create 1 row for age;
    create 1 row for email;
}

showData ()

let name = document.querySelector("#nameInput").value;
let email = document.querySelector("#emailInput").value;
let age =  document.querySelector("#ageInput").value;

function addData {
    data.push ({name,age,email});
    showData
}
function deleteData {
    data.splice;
    showData()
}

```
