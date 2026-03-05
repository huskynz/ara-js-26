class Toy {
        constructor(price,name,colour) {
        this.name = name;
        this.price = price;
        this.colour = colour;
    }
}

let myToy = new Toy(13.49, "Bobby", "Pink");
console.log(myToy.price);
console.log(myToy.name);
console.log(myToy.colour);