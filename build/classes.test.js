"use strict";
class Vehicle {
    constructor(name, year) {
        this.brandName = name;
        this.madeYear = year;
    }
    drive() {
        console.log(`
      ${this.brandName}: Drive!!!
    `);
    }
    honk() {
        console.log(`
      ${this.brandName}: beep! beep!
    `);
    }
}
class Car extends Vehicle {
    drive() {
        console.log(`
      ${this.brandName}: happy Drive ~
    `);
    }
}
const toyota = new Vehicle('TOYOTA', 1999);
const nissan = new Vehicle('NISSAN', 1999);
const ford = new Car('FORD', 1989);
toyota.drive();
toyota.honk();
nissan.drive();
ford.honk();
ford.drive();
