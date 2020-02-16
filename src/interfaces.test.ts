interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'toyota',
  year: new Date(2008,11,3,9,41,41),
  isBroken: false,
  summary(): string {
    return `
      Made in JP: ${this.name}
    `;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `
      my drink has ${this.sugar} grams of sugar
    `
  }
}

const printSummary = (item: Reportable): void => {
  console.log(`${item.summary()}`)
};

printSummary(oldCivic);
printSummary(drink);
