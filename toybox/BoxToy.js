class Toy {
  constructor(newName, newColour, newCost) {
    this.name = newName;
    this.colour = newColour;
    this.cost = newCost;
  }

  toString() {
    let result = `${this.name} (${this.colour}) @ $${this.cost.toFixed(2)}`;
    return result;
  }
}

class Box { // eslint-disable-line no-unused-vars
  constructor() {
    this.toyCount = 0;
    this.allMyToys = [];
  }

  addToy(newName, newColour, newCost) {
    let aNewToy = new Toy(newName, newColour, newCost);
    this.allMyToys.push(aNewToy);
    this.toyCount += 1;
  }

  sortToys() {
    this.allMyToys.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      } // a must be equal to b
      return 0;
    });
  }

  toString() {
    this.sortToys();
    let result = `This toybox has ${this.toyCount} toys\n`;
    for (let aToy of this.allMyToys) {
      result += '\t' + aToy.toString() + '\n';
    }
    return result;
  }
}

// Example usage
let myBox = new Box();
myBox.addToy("Teddy Bear", "Brown", 19.99);
myBox.addToy("Lego Set", "Multicolor", 34.95);
myBox.addToy("Action Figure", "Red", 12.50);

console.log(myBox.toString());
