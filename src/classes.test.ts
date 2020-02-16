class Vehicle {
  brandName: string;
  madeYear: number;
  constructor(name: string, year: number) {
    this.brandName = name;
    this.madeYear = year;
  }
  drive(): void {
    console.log(`
      ${this.brandName}: Drive!!!
    `);
  }
  honk(): void {
    console.log(`
      ${this.brandName}: beep! beep!
    `);
  }
}

class Car extends Vehicle {
  drive(): void {
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
