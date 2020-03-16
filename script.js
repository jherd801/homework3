//DOM Elements
const passwordEl = document.getElementById('password')
const generateEl = document.getElementById('generate')

const randomFunc = { 
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  speChar: randomSpecChar
};

// Allowable password characters
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJHKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Password length and character selection prompts
var pWordLength = prompt("Please enter your desired password length (between 8 - 128 characters)?");
var includeLowercase = confirm("Would you like to include lower case letters?");
var includeUppercase = confirm("Would you like to include upper case letters?");
var includeNumbers = confirm("Would you like to include numbers?");
var includeSpecChar = confirm("Would you like to include special characters?");


generateEl.addEventListener("click", () => {
  var length = +pWordLength.value;
  var incLower = includeLowercase;
  var incUpper = includeUppercase;
  var incNumbers = includeNumbers;
  var incSpecChar = includeSpecChar;

  passwordEl.innerText = generatePassword(incLower, incUpper, incNumbers, incSpecChar, length);
})

function generatePassword(lower, upper, number, specChar, length) {
  var generatedPassword = "";
  typesCount = lower + upper + number + specChar;

  console.log("typesCount: ", typesCount);

  const typesArr = [{lower}, {upper}, {number}, {specChar}].filter(item => Object.values(item)[0]);

  console.log("typesArr: ", typesArr);

  for (var i = 0; i < length; i += typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      
      console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    })
  }

}


// How to establish length requirement of 8 - 128 characters??? Is pWordLength > 8, if / then


// Generating random characters
function randomLower () {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function randomUpper () {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber () {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function randomSpecChar () {
  return specChar[Math.floor(Math.random() * specChar.length)];
}



console.log(includeLowercase);
console.log(includeUppercase);
console.log(includeNumbers);
console.log(includeSpecChar);
console.log(randomLower());
console.log(randomUpper());
console.log(randomNumber());
console.log(randomSpecChar());
console.log(randomFunc);
console.log(typeof length);

