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
}

// generate password with inputs
generatePassword = () =>
{
  // prompt user for inputs
  let inputs = getInputs()
  // failed to compile the inputs
  return buildPassword(inputs)
  

}

buildPassword = (inputs) => 
{

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
