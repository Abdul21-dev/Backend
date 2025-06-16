// Constructors - doesn't return any thing and alwaya start with capital letter

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function(){
    console.log(`Hello my name is ${this.name}`);
};

let p1 = Person("Abdul", 20);
let p2 = Person("steve", 25);