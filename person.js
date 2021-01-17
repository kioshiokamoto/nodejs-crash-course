class Person {
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        console.log(`Mi nombre es ${this.name} y mi edad es ${this.age}`);
    }
}

module.exports = Person;