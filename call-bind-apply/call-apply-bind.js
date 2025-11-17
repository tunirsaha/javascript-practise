function greet(){
    return `Hello ${this.name}!`;
}

function cuss(cusswords){
    return `Hello ${this.name} you ${cusswords}`;
}

const person = {name: 'Tunir'};

hello.call(person, greet); // Hello Tunir!

hello.apply(person, ['idiot']); // Hello Tunir you idiot

hello.bind(person).call('Tamim') // Hello Tunir