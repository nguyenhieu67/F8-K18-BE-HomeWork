import { Observer } from "./Observer";

export interface StudentI {
    getName: () => string;
    setName: (name: string) => void;
}

export class Student implements StudentI, Observer {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    update(message: string) {
        console.log(`Student ${this.getName()} received ${message}`);
    }
}
