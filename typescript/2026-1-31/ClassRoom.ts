import { Observer } from "./Observer";

export interface ClassRoomI {
    getName: () => string;
    setName: (name: string) => void;
    addStudent: (student: Observer) => void;
    addStudents: (students: Observer[]) => void;
    removeStudent: (student: Observer) => void;
    removeStudents: (students: Observer[]) => void;
    notify: (message: string) => void;
    postAnnouncement: (message: string) => void;
}

export class ClassRoom implements ClassRoomI {
    private name: string;
    private students: Observer[] = [];

    constructor(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public setName(name: string) {
        this.name = name;
    }

    public addStudent(student: Observer) {
        this.students.push(student);
    }

    public addStudents(students: Observer[]) {
        students.forEach((student) => this.students.push(student));
    }

    public removeStudent(student: Observer) {
        this.students = this.students.filter((s) => s !== student);
    }

    public removeStudents(students: Observer[]) {
        this.students = this.students.filter((s) => !students.includes(s));
    }

    public notify(message: string) {
        this.students.forEach((student) => student.update(message));
    }

    public postAnnouncement(message: string) {
        console.log(`ClassRoom ${this.getName()} new announcement ${message}`);
        this.notify(message);
    }
}
