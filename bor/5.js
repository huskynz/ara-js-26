class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Create the toString() method here
    
    toString() {
        return `The car is a ${this.make} ${this.model} made in the year ${this.year}.`
    }
}

let car = new Car("Nissan", "Leaf", 2017);
console.log(car.toString());