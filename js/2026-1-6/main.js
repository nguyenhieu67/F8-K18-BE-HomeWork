// Task 1:
function classifyTriangle(a, b, c) {
    if (
        typeof a !== "number" ||
        isNaN(a) ||
        typeof b !== "number" ||
        isNaN(b) ||
        typeof c !== "number" ||
        isNaN(c)
    )
        return "Please enter a valid number.";
    if (a <= 0 || b <= 0 || c <= 0) return "The sides must be greater than 0.";
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilateral triangle";
        }

        if (a === b || a === c || b === c) {
            return "Isosceles triangle";
        }

        let a2 = a ** 2;
        let b2 = b ** 2;
        let c2 = c ** 2;
        if (a2 === b2 + c2 || b2 === a2 + c2 || c2 === b2 + a2) {
            return "Right triangle";
        } else {
            return "General triangle";
        }
    } else {
        return "Not a triangle";
    }
}

console.log(classifyTriangle(2, 2, 2));
console.log(classifyTriangle(3, 3, 5));
console.log(classifyTriangle(3, 4, 5));
console.log(classifyTriangle(3, 4, 2));
console.log(classifyTriangle(2, 4, 2));

// Task 2:
// func check if it is an integer
function isInteger(n) {
    return n % 1 === 0;
}

function isPerfectSquares(a) {
    if (typeof a !== "number" || isNaN(a))
        return "Please enter a valid number.";
    if (a < 0) return `${a} is not prefect squares`;

    let squareRoot = a ** 0.5;

    if (!isInteger(squareRoot)) {
        return false;
    } else {
        return true;
    }
}

console.log(isPerfectSquares(1));
console.log(isPerfectSquares(2));
console.log(isPerfectSquares(4));
console.log(isPerfectSquares(5));
console.log(isPerfectSquares(9));
