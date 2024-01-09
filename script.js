var generateBtn = document.querySelector("#generate");
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Function to prompt user for password options
function getPasswordOptions() {
  let charactersLength = parseInt()
    prompt ("How many characters would you like to use between 8 and 128?")
    ;
    if (charactersLength > 7 && charactersLength < 129) {
  
      var specialCharacters = confirm ("Do you like to have special Characters?");
      var numericCharacters = confirm ("Do you like to have numberic?");
      var lowerCasedCharacters = confirm ("Do you like to have lowerCase?");
      var upperCasedCharacters = confirm ("Do you like to have uppercase?");
    
  // if (!specialCharacters && !numbericCharacters && !lowerCasedCharacters && !upperCasedCharacters){
  // alert("error")}

      var options = {
        length : charactersLength,
        specialCharactersconfirm : specialCharacters,
        numericCharactersconfirm: numericCharacters,
        lowerCasedCharactersconfirm : lowerCasedCharacters,
        upperCasedCharactersconfirm : upperCasedCharacters,
      };
       //Sends the user password options out to generatePassword()
      return options;

    } else {
      alert("Please enter a number between 8 and 128 again.");
    }  
}
// Function to generate password with user input
function generatePassword() {
    //calls in the user choices from passwordOptions()
    let userPasswordChoices = getPasswordOptions();
    let userChoice = "";
    let password = "";
    
    if (userPasswordChoices.upperCasedCharactersconfirm) {
      userChoice += upperCasedCharacters.join("");
    }
    if (userPasswordChoices.lowerCasedCharactersconfirm) {
      userChoice += lowerCasedCharacters.join("");
    }
    if (userPasswordChoices.numericCharactersconfirm) {
      userChoice += numericCharacters.join("");
    }
    if (userPasswordChoices.specialCharactersconfirm) {
      userChoice += specialCharacters.join("");
    }

    for (let i = 0; i < userPasswordChoices.strength; i++) {
      let random = Math.floor(Math.random() * userChoice.length);
      password += userChoice.charAt(random);
    }
  
    return password;
  }
    
//Function for getting a random element from an array
// function getRandom(arr) {
//     for (let i = 0; i < userPasswordChoices.strength; i++) {
//     let random = Math.floor(Math.random() * userChoice.length);
//     password += userChoice.charAt(random);
//   }

//   return password;
// }

//   var randomiser = Math.floor(Math.random() = arr.length);
//   arr(randomiser)

// return arr [randomiser];


//  var options = getPasswordOption();
//  var password = options.password{};
//  if (option.specialCharacterconfirm){
//   password.push (getRandom(specialCharacters));

// }

// // Get references to the #generate element
// var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var finalPassword = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
}
generateBtn.addEventListener("click", writePassword);

//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);