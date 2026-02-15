export interface Observer {
    update: (message: string) => void;
}

/*
Observer Pattern preference:
Loose coupling (fewer dependencies)
No constraints
----------------------------
Adding other classes to the class doesn't require modifying the code in the ClassRoom class;
simply adding them will make it work perfectly.
*/
