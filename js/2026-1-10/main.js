// Task  1:
const isPrime = (n) => {
    if (typeof n !== "number" || isNaN(n)) return "Invalid input.";
    if (n % 1 !== 0 || n <= 1) return false;

    let sqrt = n ** 0.5;

    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) return false;
    }
    return true;
};

console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log("-----------------------------");
// Advanced
const isPrimeAdvanced = (n) => {
    if (Array.isArray(n)) {
        let result = [];
        let index = 0;

        for (let j of n) {
            result[index] = isPrime(j);
            index++;
        }
        return result;
    }
    return isPrime(n);
};
console.log(isPrimeAdvanced([1, 2, 3, 4])); // [ false, true, true, false ]
console.log(isPrimeAdvanced(2)); // true
console.log(isPrimeAdvanced(3)); // true
console.log("-----------------------------");

// Task 2:
// Personal opinion: The loop runs fine with small numbers,
// but it takes a very long time to loop with very large numbers.
const isPerfectNumber = (n) => {
    if (typeof n !== "number" || isNaN(n)) return "Invalid input.";
    if (n % 1 !== 0 || n <= 1) return false;

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
            if (sum > n) return false;
        }
    }
    return sum === n;
};
console.log(isPerfectNumber(6)); // true
console.log(isPerfectNumber(10)); // false
console.log(isPerfectNumber(28)); // true
console.log("-----------------------------");

// After consulting a better method from chatgpt
const isPerfectNumberFast = (n) => {
    if (typeof n !== "number" || isNaN(n)) return "Invalid input.";
    if (n % 1 !== 0 || n <= 1) return false;

    let sum = 1;
    let sqrt = n ** 0.5;

    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            const pair = n / i;
            sum += i;
            if (pair !== i) sum += pair;
            if (sum > n) return false;
        }
    }

    return sum === n;
};

console.log(isPerfectNumberFast(1)); // false
console.log(isPerfectNumberFast(2)); // false
console.log(isPerfectNumberFast(6)); // true
