class Mammals {
    constructor(sex, age){
        this.sex=sex;
        this.age=age;
    }
    breathe(){
        return 'breathe';
    }
    getAge(){
        return `My age is ${this.age}`
    }
    getSex(){
        return `I'm a ${this.sex}`
    }
}

class Human extends Mammals {
    constructor(name, sex, age){
        super(sex, age);
        this.name=name;
    }
    talk(){
        return 'talk';
    }
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