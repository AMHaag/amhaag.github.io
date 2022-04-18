// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

//Password Length Entry and check

var passwordLength = window.prompt("How many characters? Enter a number between 8 and 128");

while (passwordLength <8 || passwordLength >128){
  var passwordLength = window.prompt("Please try again. Enter a number between 8 and 128");
}
var characters = "";

//Lowercase selection, check and implementation
var passwordCharsLower = window.prompt("Would you like to include lowercase characters? Enter YES or NO");
if (passwordCharsLower == "YES"){
  characters += "abcdefghijklmnopqrstuvwxyz"
}
else if (passwordCharsLower == "NO"){
  console.log("no lowercase")
}
else {
  window.alert("You must write YES or NO");
  var passwordCharsLower = window.prompt("Would you like to include lowercase characters? Enter YES or NO");
}

//Uppercase selection, check and implementation
var passwordCharsUpper = window.prompt("Would you like to include uppercase characters? Enter YES or NO");
if (passwordCharsUpper == "YES"){
  // characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  characters += /A-Z/;
}
else if (passwordCharsUpper == "NO"){
  console.log("no Uppercase")
}
else {
  window.alert("You must write YES or NO");
  var passwordCharsUpper = window.prompt("Would you like to include uppercase characters? Enter YES or NO");
}


//Numeral selection, check and implementation
var passwordCharsNumeral = window.prompt("Would you like to include numbers? Enter YES or NO");
if (passwordCharsNumeral == "YES"){
  //characters += "0123456789"
  characters += /0-9/;
}
else if (passwordCharsNumeral == "NO"){
  console.log("no numbers")
}
else {
  window.alert("You must write YES or NO");
  var passwordCharsNumeral = window.prompt("Would you like to include numbers? Enter YES or NO");
}


//Special selection, check and implementation
var passwordCharsSpecial = window.prompt("Would you like to include special characters? Enter YES or NO");
if (passwordCharsSpecial == "YES"){
  characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
}
else if (passwordCharsSpecial == "NO"){
  console.log("no special characters")
}
else {
  window.alert("You must write YES or NO");
  var passwordCharsSpecial = window.prompt("Would you like to include special characters? Enter YES or NO");
}



//Generate a password using the user's selections
var password = "placeholder";
function generatePassword(length) {
  var result           = '';
  // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;

}

var password = generatePassword(passwordLength);



  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);