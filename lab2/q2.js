class Toy {
    constructor(name,colour,cost){
        this.name = name
        this.colour = colour
        this.cost = cost
    }
}

class Box {
    constructor(){
       this.toys = []
    }

    addToy(name, colour, price) {
        const toy = {
            name: name,
            colour: colour,
            price: price
        };
        this.toys.push(toy);
    }

    displayInConsole() {
        if (this.toys.length === 0){
            console.log("The box is empty")
        } else {
            console.log(`This toybox has ${this.toys.length} toys`)
            
            this.toys.reverse().forEach((toy) => {
                console.log(`${toy.colour} ${toy.colour} ${toy.name} - $${toy.price.toFixed(2)}`);
      });
    }
  }
}


    // Adding toys and displaying them
let toyBox = new Box();
toyBox.addToy('Car', 'Red', 10.99);
toyBox.addToy('Doll', 'Blue', 12.50);
toyBox.addToy('Ball', 'Green', 5.75);

// Display the toys in the box
toyBox.displayInConsole();