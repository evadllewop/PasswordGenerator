
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate Password
function generatePassword() {

  var length = prompt("How many characters would you like for your password to contain?");

  // Verifying password length
  while (length <= 7 || length >= 129) {
    alert("Password length must be between 8 and 128 characters");
    var length = (prompt("How many characters would you like your password to contain?"));
  }
  // Promt user for character types
  var confirmSpecial = confirm("Click OK to confirm including special characters.");
  var confirmNumeric = confirm("Click OK to confirm including numeric characters.");
  var confirmLower = confirm("Click OK to confirm including lowercase characters.");
  var confirmUpper = confirm("Click OK to confirm including uppercase characters.");

  // Setting character arrays using 'split'
  var charSet = [];
  var charSpecial = "!@#$%^&*()_+~`|}{[];?><,./-='";
  var charSpecialArr = charSpecial.split("");
  var charNumeric = "012345678910";
  var charNumericArr = charNumeric.split("");
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charLowerArr = charLower.split("");
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charUpperArr = charUpper.split("");

  // Add character types based on user choices
  if (confirmSpecial) {
    Array.prototype.push.apply(charSet, charSpecialArr);
  }

  if (confirmNumeric) {
    Array.prototype.push.apply(charSet, charNumericArr);
  }

  if (confirmLower) {
    Array.prototype.push.apply(charSet, charLowerArr);
  }

  if (confirmUpper) {
    Array.prototype.push.apply(charSet, charUpperArr);
  }

  // Concantenating all characters for randomization
  var allChar = charSet.concat(charSpecial, charNumeric, charLower, charUpper)

  // Determine random password with loop
  var myPassword = "";

  for (var i = 0; i < length; i++) {
    myPassword = myPassword + allChar[Math.floor(Math.random() * charSet.length)];
  }

  return myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);