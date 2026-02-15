// Create interface
interface EmployeeI {
    getId: () => number;
    getName: () => string;
    setName: (name: string) => void;
    getSalary: () => number;
    setSalary: (salary: number) => void;
    calculateSalary: () => number;
}

// Create abstract class
abstract class Employee implements EmployeeI {
    private id: number;
    private name: string;
    private salary: number;

    constructor(id: number, name: string, salary: number) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        return (this.name = name);
    }

    public getSalary() {
        return this.salary;
    }

    public setSalary(salary: number) {
        if (salary < 0) return console.error("Salary must greater than 0");
        this.salary = salary;
    }

    abstract calculateSalary(): number;
}

// Create Developer extend Employee class
class Developer extends Employee {
    private overtimeHours: number;

    constructor(
        id: number,
        name: string,
        salary: number,
        overtimeHours: number,
    ) {
        super(id, name, salary);
        this.overtimeHours = overtimeHours;
    }

    public getOvertimeHours() {
        return this.overtimeHours;
    }

    public setOvertimeHours(hours: number) {
        if (hours < 0) {
            console.error("Overtime Hours must greater than 0");
        }

        this.overtimeHours = hours;
    }

    public calculateSalary(): number {
        return this.getSalary() + this.overtimeHours * 50000;
    }
}

// Create Manager extend Employee class
class Manager extends Employee {
    private timeSize: number;

    constructor(id: number, name: string, salary: number, timeSize: number) {
        super(id, name, salary);
        this.timeSize = timeSize;
    }

    public gettimeSize() {
        return this.timeSize;
    }

    public settimeSize(hours: number) {
        if (hours < 0) {
            console.error("TimeSize must greater than 0");
        }

        this.timeSize = hours;
    }

    public calculateSalary(): number {
        return this.getSalary() + this.timeSize * 200000;
    }
}

// Case 1:
// Test create developer
const developer = new Developer(1, "Nguyen Van A", 30000, 80);
console.log("Developer");
console.log("Id: ", developer.getId());
console.log("Name: ", developer.getName());
console.log("Salary: ", developer.getSalary());
console.log("OvertimeHours: ", developer.getOvertimeHours());
console.log("Total Salary: ", developer.calculateSalary());
console.log("------------------------");

// Test create manager
const manager = new Manager(1, "Tran Van A", 60000, 100);
console.log("Manager");
console.log("Id: ", manager.getId());
console.log("Name: ", manager.getName());
console.log("Salary: ", manager.getSalary());
console.log("TimeSize: ", manager.gettimeSize());
console.log("Total Salary: ", manager.calculateSalary());
console.log("------------------------");

// Case 2
// Test update developer and manager
developer.setName("Nguyen Van B");
console.log("New name: ", developer);
manager.setSalary(80000);
console.log("------------------------");
console.log("New salary", manager);
console.log("------------------------");

// Case 3
// Calculate total employee salaries
const calculateTotalSalary = (employees: Employee[]) => {
    if (!Array.isArray(employees))
        console.error("It's not an array, please fill in an array.");

    let total: number = 0;
    employees.forEach((employee) => (total += employee.calculateSalary()));

    return total;
};

const listEmployee: Employee[] = [];
listEmployee.push(developer, manager);

console.log(
    "Total salary of all employees ",
    calculateTotalSalary(listEmployee),
);
