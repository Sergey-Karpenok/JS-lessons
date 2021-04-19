'use strict'

class Fist {

    hello() {
        console.log(`Привет я метод родителя!`);
    }
}

class Second extends Fist {
    constructor() {
        super();
    }

    hello() {
        super.hello();
        console.log(`А я наследуемый метод!`);
    }
}

let fist = new Fist();
let second = new Second();

second.hello();
console.log(second);