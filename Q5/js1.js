function toCase(str) {
  
  const lowerCaseStr = str.toLowerCase();
  const upperCaseStr = str.toUpperCase();
  
  const result = lowerCaseStr + '-' + upperCaseStr;
  
  return result;
}

const result = toCase("mthatha");
console.log(result);  

