function generateEvenNumbers (number) {
    let evenNumbers = []; 
    for (let i = 0; i <= number; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
            evenNumbers.splice(i, 1);
        }
    }
    return evenNumbers;
}

console.log(generateEvenNumbers(10));
console.log(generateEvenNumbers(15));