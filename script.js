const empty = "";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()-_"

const passwordLength = document.getElementById("p-length");
const passwordUpperCase = document.getElementById("p-uppercase");
const passwordLowerCase = document.getElementById("p-lowercase");
const passwordNumber = document.getElementById("p-numbers");
const passwordSymbol = document.getElementById("p-symbols");
const submitButton = document.getElementById("submit");
const password = document.getElementById("password");

submitButton.addEventListener("click", () => {
  let initialPassword = empty;
  (passwordUpperCase.checked) ? initialPassword += upperCase : "";
  (passwordLowerCase.checked) ? initialPassword += lowerCase : "";
  (passwordNumber.checked) ? initialPassword += numbers : "";
  (passwordSymbol.checked) ? initialPassword += symbols : "";

  password.value = generatePassword(passwordLength.value, initialPassword)

  // additionaly
  if(password.value == ""){
    alert("Please select at least one option!")
  } else {
    password.select();
    document.execCommand("copy");
    alert("Password has been copied to clipboard!")
  }
})

function generatePassword(l, initialPassword){
  let pass = "";
  for(let i =0; i < l; i++){
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  return pass;
}