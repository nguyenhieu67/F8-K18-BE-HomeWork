// Task 1:
interface PartTime {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}

const partTime: PartTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40,
};

const updatedPartTime: PartTime = {
    ...partTime,
    hoursWorked: 45,
};

console.log("Old data:", partTime);
console.log("New data:", updatedPartTime);

// Task 2:
interface Employee {
    id: number;
    name: string;
    salary: number;
    getSalary(): number;
}

class FullTimeEmployee implements Employee {
    id!: number;
    name!: string;
    salary!: number;
    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee implements Employee {
    id!: number;
    name!: string;
    salary!: number;
    hoursWorked!: number;
    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

function calculateTotalSalary(employees: Employee[]): number {
    let totalSalary = 0;
    employees.forEach((employee) => (totalSalary += employee.getSalary()));
    return totalSalary;
}

// Case 1:
const fullTime1 = new FullTimeEmployee();
fullTime1.id = 1;
fullTime1.name = "Full-time 1";
fullTime1.salary = 5000;

const partTime1 = new PartTimeEmployee();
partTime1.id = 1;
partTime1.name = "Part-time 1";
partTime1.salary = 100;
partTime1.hoursWorked = 40;

console.log(fullTime1);
//FullTimeEmployee { id: 1, name: 'Full-time 1', salary: 5000 }
console.log(partTime1);
//PartTimeEmployee {id: 1, name: 'Part-time 1', salary: 100, hoursWorked: 40}
console.log(
    "Total salary of all employees",
    calculateTotalSalary([fullTime1, partTime1]),
);
//Total salary of all employees 9000
console.log("--------------------");

// Case 2:
const fullTime2 = new FullTimeEmployee();
fullTime2.id = 2;
fullTime2.name = "Full-time 2";
fullTime2.salary = 9000;

const listPartTimeEmployees: Employee[] = [];
const partTime2 = new PartTimeEmployee();
partTime2.id = 2;
partTime2.name = "Part-time 2";
partTime2.salary = 150;
partTime2.hoursWorked = 40;
listPartTimeEmployees.push(partTime2);

const partTime3 = new PartTimeEmployee();
partTime3.id = 3;
partTime3.name = "Part-time 3";
partTime3.salary = 150;
partTime3.hoursWorked = 70;
listPartTimeEmployees.push(partTime3);

console.log(fullTime2);
//FullTimeEmployee { id: 2, name: 'Full-time 2', salary: 9000 }
console.log(listPartTimeEmployees);
//PartTimeEmployee {id: 2, name: 'Part-time 2', salary: 150, hoursWorked: 40}
//PartTimeEmployee {id: 3, name: 'Part-time 3', salary: 150, hoursWorked: 70}
console.log(
    "Total salary of all employees",
    calculateTotalSalary([fullTime2, ...listPartTimeEmployees]),
);
//Total salary of all employees 25500
