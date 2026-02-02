import { Observer } from "./Observer";
import { Student } from "./Student";

export class TeachingAssistant extends Student implements Observer {
    constructor(name: string) {
        super(name);
    }

    update(message: string): void {
        console.log(
            `Teaching assistant ${this.getName()} received ${message}, so remember to prepare your lecture.`,
        );
    }
}
