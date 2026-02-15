// Task 1:
function getStudentLevel(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log("Please enter a valid number.");
    if (num < 0 || num >= 11)
        return console.log("Please enter a number between 0 and 10.");

    if (num >= 9 && num <= 10) {
        console.log("Excellent");
    } else if (num >= 8 && num < 9) {
        console.log("Very Good");
    } else if (num >= 6.5 && num < 8) {
        console.log("Good");
    } else if (num >= 5 && num < 6.5) {
        console.log("Average");
    } else {
        console.log("Weak");
    }
}

getStudentLevel("9");
getStudentLevel(NaN);
getStudentLevel(-1);
getStudentLevel(9);
getStudentLevel(6.4);

// Task 2:
function getDaysInMonth(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log(`Please ${num} a valid number.`);

    switch (num) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Have 31 days");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Have 30 days");
            break;
        case 2:
            console.log("Have 28 days");
            break;
        default: {
            console.log(`Invalid month`);
        }
    }
}

getDaysInMonth(1);
getDaysInMonth(2);
getDaysInMonth(3);
getDaysInMonth(4);

// Task 3:
function isEvenNumber(n) {
    if (typeof n !== "number" || isNaN(n))
        return console.log("Please enter a valid number.");
    return n % 2 === 0 ? console.log("Even") : console.log("Odd");
}

isEvenNumber(10);
isEvenNumber(31);

// Task 4:
function movieTicketPrice(age) {
    if (typeof age !== "number" || isNaN(age))
        return console.log("Please enter a valid number.");

    let ticketPrice = 100;
    ticketPrice = age < 13 ? ticketPrice / 2 : ticketPrice;
    return console.log(`Ticket price is ${ticketPrice} `);
}

movieTicketPrice(13);
movieTicketPrice(12);

// Task 5:
function toFahrenheit(temp) {
    if (typeof temp !== "number" || isNaN(temp))
        return console.log("Please enter a valid number.");
    temp = temp * 1.8 + 32;
    return console.log(`Fahrenheit is ${temp}`);
}

toFahrenheit(6);

// Task 6:
function getElectricityBill(num) {
    if (typeof num !== "number" || isNaN(num))
        return console.log("Please enter a valid number.");

    if (num <= 0) return console.log("Please enter a number greater than 0.");

    let total = 0;
    let tier1 = 50 * 1.678;
    let tier2 = 50 * 1.734;

    if (num <= 50) {
        total = num * 1.678;
    } else if (num <= 100) {
        total = tier1 + (num - 50) * 1.734;
    } else if (num <= 200) {
        total = tier1 + tier2 + (num - 100) * 2.014;
    } else {
        total = tier1 + tier2 + 100 * 2.014 + (num - 200) * 2.536;
    }

    return console.log(`Amount to pay ${Math.round(total)}VND`);
}

getElectricityBill(0);
getElectricityBill(49);
getElectricityBill(80);
getElectricityBill(140);
getElectricityBill(500);
