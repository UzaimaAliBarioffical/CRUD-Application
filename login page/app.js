let userName = document.getElementById("user-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let rollNumber = document.getElementById("Roll-number");
let button = document.getElementById("button");
// console.log(userName,email,password,rollNumber,button);
let userNamepattern = /^[a-zA-Z\-]+$/;
let emailPattern = /([A-Za-z0-9._-]+@[A-Za-z0-9]+\.[A-za-z0-9])\w+/;
let passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
let rollNumberPattern = /[1-4]/g;

button.addEventListener("click", () => {
  let userval = userName.value;
  let result = userval.match(userNamepattern);
  let result1 = userNamepattern.test(userval);

  console.log(result, result1);

  let emailVal = email.value;
  let emailResult = emailVal.match(emailPattern);
  let emailResult1 = emailPattern.test(emailVal);
  console.log(emailResult, emailResult1);
  let pasVal = password.value;
  let pasResult = pasVal.match(passwordPattern);
  let pasResult1 = passwordPattern.test(pasVal);

  console.log(pasResult, pasResult1);

  if (userval === "") {
    alert("Please Enter Your Name");
  }
  if (emailVal === "") {
    alert("Please Enter Your Email");
  }
  if (pasVal === "") {
    alert("Please Enter Your password");
  }

});
