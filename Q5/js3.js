function rotate(arr) {
  if (arr.length === 0) return arr; 
  return arr.slice(1).concat(arr[0]);
}

const result = rotate(['a', 'b', 'c']);
console.log(result);  
