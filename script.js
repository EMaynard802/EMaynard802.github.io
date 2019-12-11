/* The user will be prompted to choose from the following criteria:

    * Length (must be between 8 and 128 characters)

    * Character type:
        * Special characters 
        * Numeric characters
        * Lowercase characters
        * Uppercase characters 
        
*/

const specialSet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const numericSet = "0123456789";

const lowerSet = "abcdefghijklmnopqrstuvwxyz";

const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";



function generate() {

  let userInput = prompt("Enter a number between 8 - 128 for length of password");

  let userSize = parseInt(userInput);

  let specialOption = confirm("Would you like your password to contain special characters?");

  let numericOption = confirm("Would you like your password to contain numbers?");

  let lowerOption = confirm("Would you like your password to contain lower case letters?");

  let upperOption = confirm("Would you like your password to contain Upper case letters?");



  let passwordResult = "";

  let charsConfirmed = "";



  if (userSize < 8 || userSize > 128 || isNaN(userSize)) {

    alert("You must enter a valid number");

    return;



  }

   if (specialOption) {

    charsConfirmed += specialSet;

  }



  if (numericOption) {

    charsConfirmed += numericSet;

  }

  if (lowerOption) {

    charsConfirmed += lowerSet;

  }



  if (upperOption) {

    charsConfirmed += upperSet;

  }

  else {

    if(charsConfirmed < 1){

     alert("You must choose at least one option of character");

    }

  }

  passLength = charsConfirmed.length;



  function randomize(length) {

    for (let i = 0; i <= length; i++) {

      passwordResult += charsConfirmed.charAt(

        Math.floor(Math.random() * passLength)

      );

    }

    return passwordResult;

  }

  document.getElementById("password").innerHTML = randomize(userSize - 1);

}



/*Copy password function */



function myFunction() {

  var copyText = document.getElementById("password");

  copyText.select();

  copyText.setSelectionRange(0, 99999)

  document.execCommand("copy");

  alert("Copied the text: " + copyText.value);

}


