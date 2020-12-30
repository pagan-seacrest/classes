class Employee {
    constructor (name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    set name(value) {
        this._name = value;
    }
    get name() {
        return this._name;
    }

    set age(value) {
        this._age = value;
    }
    get age() {
        return this._age;
    }

    set salary(value) {
        this._salary = value;
    }
    get salary() {
        return this._salary;
    }
}

class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
    }
    set salary(value) {
        this._salary = value * 3;
    }
    get salary() {
        this._salary;
    }
}

const teamLead = new Programmer("Bohdan", 23, 1800, "C++");
const freelancer = new Programmer("John", 30, 1200, "JS");

console.log(teamLead);
console.log(freelancer);
