class myToy {
public name: string;
public colour: string;
public cost: number;

  constructor(newName: string, newColour: string, newCost: number) {
    this.name = newName;
    this.colour = newColour;
    this.cost = newCost;
  }

  toString() {
    let result = `${this.name} (${this.colour}) @ $${this.cost.toFixed(2)}`;
    return result;
  }
}

class myToyBox { // eslint-disable-line no-unused-vars
  public toyCount: number;
  public allMyToys: myToy[];

    constructor() {
    this.toyCount = 0;
    this.allMyToys = [];
  }

  addToy(newName: string, newColour: string, newCost: number) {
    let aNewToy = new myToy(newName, newColour, newCost);
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
let myNewBox = new myToyBox();
myNewBox.addToy("Teddy Bear", "Brown", 19.99);
myNewBox.addToy("Lego Set", "Multicolor", 34.95);
myNewBox.addToy("Action Figure", "Red", 12.50);

console.log(myNewBox.toString());