// Assignment code here
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperLetters = lowerLetters.map(element => {
  return element.toUpperCase();
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

getInputs = () =>
{
  // dictionary for prompts
  let inputs = {};
  // prompt for password length
  let passLen = getPasswordLen()

}

// generate password with inputs
generatePassword = () =>
{
  // prompt user for inputs
  let inputs = getInputs()
  // build password
  return buildPassword(inputs)
  

}

buildPassword = (inputs) => 
{


}
// ********************************************************
// GETTER FUNCTIONS
// ********************************************************

// password length getter function
getPasswordLen = () =>
{
  var passwordLen = 0
  while (!((passwordLen >= 8 && passwordLen <= 128)))
  {
    // prompt password length
    passwordLen = prompt("Enter length of desired password from 8 to 128:");
    // check if cancel was hit
    if (passwordLen === null)
    {
      // exit from while loop and return 0
      passwordLen = 0
      break
    }
  }
  // check for validity of value 
  return passwordLen;
}


// Write password to the #password input
function writePassword() {
  // grab inputs
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
