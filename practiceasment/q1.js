class Room {
    constructor(roomNumber, type, price, isBooked) {
        this.roomNumber = roomNumber
        this.type = type
        this.price = price
        this.isBooked = isBooked
    }

    toString() {
        let result = `Room: ${this.roomNumber}, Type: ${this.type}, Price: ${this.price}, Booked: ${this.isBooked || false}`;
        return result;
    }
}

// Test Code
let room = new Room('101', 'Single', 100);
console.log(room.toString()); 
// Expected output: "Room: 101, Type: Single, Price: 100, Booked: false"

	

