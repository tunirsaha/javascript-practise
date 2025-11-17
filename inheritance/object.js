const Mammals = {
    init(sex, age) {
        const obj = Object.create(this);
        return Object.assign(obj, { sex, age })
    },
    breathe() {
        return 'breathe';
    },
    getAge() {
        return `My age is ${this.age}`;
    },
    getSex() {
        return `I'm a ${this.sex}`;
    }
}

const Human = Object.create(Mammals);

Human.talk = function(){
    return 'Talk';
}

const me = Human.init('Tunir', 'Male', 32);
me.talk();
me.breathe();
me.getAge();
me.getSex();


/* 
For shadowing inherited class method
without modifying the parent class
*/
Human.breathe = function(){
    return 'Breathe Heavy';
}
me.breathe();
const you = Human.init('Tamim', 'Male', 33);
you.breathe();