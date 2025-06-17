// Constructors - doesn't return any thing and alwaya start with capital letter

// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function(){
//     console.log(`Hello my name is ${this.name}`);
// };

// let p1 = new Person("Abdul", 20);
// let p2 = new Person("Steve", 25);

// Using classes

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hello my name is ${this.name}`)
//     }
// }
// let p1 = new Person("Abdul", 20);
// let p2 = new Person("Steve", 25);

// Using concept of inheritance

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hello my name is ${this.name}`)
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}

let std1 = new Student("Abdul", 20, 95);
let t1   = new Teacher("Ranitesh", 45, "BEE");