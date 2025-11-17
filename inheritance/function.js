function Mammals(sex, age) {
    this.sex=sex;
    this.age=age;
}
Mammals.prototype.breathe = function() {
    return 'breathe';
}
Mammals.prototype.getAge = function() {
        return `My age is ${this.age}`
}
Mammals.prototype.getSex = function() {
    return `I'm a ${this.sex}`
}

function Human(name, sex, age) {
    Mammals.call(this, sex, age);
    this.name=name;
}
Object.setPrototypeOf(Human.prototype, Mammals.prototype);
/*
PRE-ES6 INHERITANCE PATTERN would be
Human.prototype = Object.create(Mammals.prototype); 
Human.prototype.constructor = Human;
*/

Human.prototype.talk = function() {
    return 'talk';
}
    
const me = new Human('Tunir', 'Male', 32);
me.talk();
me.breathe();
me.getAge();
me.getSex();

/* 
For shadowing inherited class method
without modifying the parent class
*/
Human.prototype.breathe = function(){
    return 'Breathe Heavy';
}
me.breathe();
const you = new Human('Tamim', 'Male', 33);
you.breathe();