const checkEmptyString = (input) => {
  return input.length > 0;
};

const checkStringLength = (input) => {
  return input.length > 8;
};

const checkEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
};

const checkUpperCase = (input) => {
  return /[A-Z]/.test(input);
};

const checkLowerCase = (input) => {
  return /[a-z]/.test(input);
};

const checkNumber = (input) => {
  return /[0-9]/.test(input);
};

const getData = localStorage.getItem("userData");
const userData = JSON.parse(localStorage.getItem("userData")) || [
  { email: "admin@gmail.com", password: "Adm123123" },
];
localStorage.setItem("userData", JSON.stringify(userData));

const signIn = () => {
  let email = document.querySelector("#emailLogin").value;
  let pw = document.querySelector("#pwLogin").value;

  const checkCredential = userData.find(
    (a) => a.email === email && a.password === pw
  );
  console.log(userData);
  console.log(checkCredential);

  switch (false) {
    case checkEmptyString(email):
      console.log("Please fill in your email!");
      break;
    case checkEmail(email):
      console.log("Please enter a valid email!");
      break;
    case checkEmptyString(pw):
      console.log("Please fill in your password!");
      break;
    // case checkStringLength(pw):
    //   console.log("Your password must contain at least 8 characters!");
    //   break;
    // case checkUpperCase(pw):
    //   console.log("Your password must contain at least 1 uppercase!");
    //   break;
    // case checkLowerCase(pw):
    //   console.log("Your password must contain at least 1 lowercase!");
    //   break;
    // case checkNumber(pw):
    //   console.log("Your password must contain at least 1 number!");
    // break;
    case checkCredential !== undefined:
      console.log("Please check your password!");
      break;
    case checkCredential === undefined:
      console.log("success");
      window.location.href = "./pages/home/";
      break;
  }
};
