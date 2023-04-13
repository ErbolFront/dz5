function calculateAverage(...numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  return sum / numbers.length;
}

console.log(calculateAverage(1, 2, 4, 6, 14, 412, 3, 3)); 
console.log(calculateAverage(5, 10, 15, 20)); 
console.log(calculateAverage()); 