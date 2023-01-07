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
  // return an error dictionary if canceled operation
  if (passLen === 0)
  {
    // inject error status code -1
    inputs['error'] = -1
    return inputs
  }

  inputs['length'] = passLen
  // prompt for character types (lowercase, uppercase, numeric, and/or special characters)
  inputs = (getCharTypes(inputs))

  // return the inputs
  return inputs;

}

// generate password with inputs
generatePassword = () =>
{
  // prompt user for inputs
  let inputs = getInputs()
  // failed to compile the inputs
  if (inputs['error'] === -1)
  {
    return -1;
  }

  // build password
  return buildPassword(inputs)
  

}

buildPassword = (inputs) => 
{
  let password = []
  // dictionary mapping the input values to global variables
  let characterType2Var = {'lowerCase':'lowerLetters', 'upperCase':'upperLetters', 'numeric':'numbers', 'specialChar':'specialChar'}
  // get keys from dictionary defined
  let keys = Object.keys(characterType2Var)
  // define loop for keys
  keys.forEach((key) =>
  {
    // check if the keys are true or false    
    if(inputs[key])
    {
      // indexes into appropriate global variable
      let randChar = window[characterType2Var[key]][Math.floor(Math.random()*window[characterType2Var[key]].length)]
      
      // appends the random char to the password array
      password.push(randChar)
    }
  })
  // append random chars until length has been reached
  while (password.length < inputs.length)
  {
    password.push(lowerLetters[Math.floor(Math.random()*lowerLetters.length)])
  }
  // reshuffle the password to make it more randomized
  shuffleArray(password)
  // return the shuffled password
  return password.join("")
}

// retrieved from stack overflow link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
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

// gets char types 
getCharTypes = (inputs) =>
{
  // promput userss
  const addLowerCase    = confirm("Do you want lower case characters?");
  const addUpperCase    = confirm("Do you want upper case characters?");
  const addNumeric      = confirm("Do you want to add numeric chars?");
  const addSpecialChar  = confirm("Do you want to add special characters?")

  // save into dictionary
  inputs["lowerCase"]   = addLowerCase
  inputs["upperCase"]   = addUpperCase
  inputs["numeric"]     = addNumeric
  inputs["specialChar"] = addSpecialChar

  // return dictionary
  return inputs
}


// Write password to the #password input
function writePassword() {
  // grab inputs
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password !== -1 )
  {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
