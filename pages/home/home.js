const checkEmptyString = (input) => {
  return input.length > 0;
};

const checkStringLength = (input) => {
  return input.length >= 8;
};

const checkString = (input) => {
  return /[a-z]/gi.test(input);
};

const checkEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(input);
};

const checkUpperCase = (input) => {
  return /[A-Z]/g.test(input);
};

const checkLowerCase = (input) => {
  return /[a-z]/g.test(input);
};

const checkNumber = (input) => {
  return /[0-9]/g.test(input);
};

const getUserData = localStorage.getItem("email");
const emailDisp = document.getElementById("email-display");

const isDenied = () => {
  alert("ACCESS DENIED - Please Login to access!");
  window.location.href = "../../index.html";
};

getUserData === null
  ? isDenied()
  : (emailDisp.innerHTML = `Hello ${getUserData}!`);

let dummyData = [
  { name: "Jimmy", age: 12, email: "jimmy@jimmy.com" },
  { name: "Bill", age: 15, email: "bill@bill.com" },
  { name: "Bob", age: 18, email: "bob@bob.com" },
];

const showData = () => {
  let tableBody = document.querySelector("#table-body");
  tableBody.innerHTML = "";
  for (let i = 0; i < dummyData.length; i++) {
    let row = "<tr>";
    row += "<td>" + dummyData[i].name + "</td>";
    row += "<td>" + dummyData[i].age + "</td>";
    row += "<td>" + dummyData[i].email + "</td>";
    row +=
      "<td><button class='edit' type='button' onclick='editData(" +
      i +
      ")'>Edit</button>";
    row +=
      "<td><button class='delete' type='button' onclick='delData(" +
      i +
      ")'>Delete</button>";
    row += "</tr>";
    tableBody.innerHTML += row;
  }
};

const addData = () => {
  let name = document.querySelector("#input-name").value;
  let age = document.getElementById("input-age").value;
  let email = document.querySelector("#input-email").value;

  switch (false) {
    case !checkNumber(name):
      console.log("Name cannot consist of number");
      break;
    case checkEmptyString(name):
      console.log("Name must be filled");
      break;
    case checkEmptyString(age):
      console.log("Age must be filled");
      break;
    case !checkString(age):
      console.log("Age must be number");
      break;
    case checkEmptyString(email):
      console.log("Please fill in the email!");
      break;
    case checkEmail(email):
      console.log("Please enter a valid email!");
      break;
    case !checkEmail(email):
      dummyData.push({ name: name, age: age, email: email });
      showData();
      break;
  }
};

const delData = (index) => {
  dummyData.splice(index, 1);
  showData();
};

const editData = (index) => {
  let newName = prompt("New Name:", dummyData[index].name);
  let newAge = prompt("New Age:", dummyData[index].age);
  let newEmail = prompt("New Name:", dummyData[index].email);
  dummyData[index] = { name: newName, age: newAge, email: newEmail };
  showData();
};

window.onload = () => {
  showData();
};
