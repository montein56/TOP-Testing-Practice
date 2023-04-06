// A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
  if (!str) Throw('str cannot be empty');
  if (typeof str == 'number') Throw('input cannot be numeric');
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// A reverseString function that takes a string and returns it reversed.

function reverseString(str){
  if (!str) Throw('str cannot be empty');
  if (typeof str == 'number') Throw('input cannot be numeric');
  return str.split("").reverse().join("");
}

// A calculator object that contains functions for the basic operations: 
// add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.

const calc = {
  add: (a, b) => (a + b),
  subtract:(a, b) => a -b,
  divide: (a,b) => a/b,
  multiply: (a,b) => a*b
};
  
// A caesarCipher function that takes a string and a shift factor
//  and returns it with each character “shifted”.

const convert =(str, shift, charNum=[], charLtrs=(''))=>{
  for(let i = 0; i<str.length; i++){

    if((str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)){
      charNum.push((str.charCodeAt(i) - 97 + shift)%26)
      charLtrs = charLtrs.concat(String.fromCharCode(charNum[i]+97))
  }
   else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
    charNum.push((str.charCodeAt(i) - 65 + shift)%26)
    charLtrs = charLtrs.concat(String.fromCharCode(charNum[i]+65))
  }

  else if (str.charCodeAt(i) >= 32 && str.charCodeAt(i) <= 47){
    charNum.push((str.charCodeAt(i) - 32))
    charLtrs = charLtrs.concat(String.fromCharCode(charNum[i]+32))
  }
  else if (str.charCodeAt(i) >= 58 && str.charCodeAt(i) <= 64){
    charNum.push((str.charCodeAt(i) - 58))
    charLtrs = charLtrs.concat(String.fromCharCode(charNum[i]+58))
  }
}
  return charLtrs
}

function caesarCipher(str, shift){
  const charLtrs = convert(str,shift)
  return charLtrs
}

//An analyzeArray function that takes an array of numbers and 
//returns an object with average, min, max, and length.

const analyzeArray = {
  check: (arr) => Array.isArray(arr),
  checkIfNum: (arr) => arr.every((item) => !isNaN(item)),
  length: (arr) => (arr.length),
  max: (arr) => (Math.max(...arr)),
  min: (arr) => (Math.min(...arr)),
  average: (arr) => arr.reduce((prev, current) => prev + current) / arr.length
}

export { capitalize, reverseString, calc, caesarCipher, analyzeArray};
