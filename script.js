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
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let charactersLength = prompt ("How many characters would you like to use between 8 and 128?");
    if (charactersLength >7 && charactersLength <129) {
  
      var specialCharacters = confirm (`Do you like to have special Charaters`);
      var numericCharacters = confirm (`Do you like to have numberic`);
      var lowerCasedCharacters = confirm (`Do you like to have lowerCase`);
      var upperCasedCharacters = confirm (`Do you like to have uppdercase`);
    
  // if (!specialCharacters && !numbericCharacters && !lowerCasedCharacters && !upperCasedCharacters){
  // alert("error")}

      var options = {
        strength : charactersLength,
        specialCharacterconfirm : specialCharacters,
        numbericCharactersconfirm : numericCharacters,
        lowerCasedCharactersconfirm : lowerCasedCharacters,
        upperCasedCharactersconfirm : pperCasedCharacters,
      };
      return options;
    } else {
      alert("Please enter a number between 8 and 128");
    }  

  }




// Function for getting a random element from an array
function getRandom(arr) {
  var randomiser = Math.floor(Math.random() = arr.length);
  arr(randomiser)
}
return arr [randomiser];

// Function to generate password with user input
function generatePassword() {
 var options = getPasswordOption();
 var password = options.password{};
 if (option.specialCharacterconfirm){
  password.push (getRandom(specialCharacters));

 }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);