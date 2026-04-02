class Customer {
    constructor(id, firstName, lastName, bookedRoom, bookingDays) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookedRoom = bookedRoom;
        this.bookingDays = [bookingDays || 0];
    }

        bookRoom (room) {
            if (this.bookedRoom) {
                console.log(`Customer ${this.firstName} ${this.lastName} already has a booked room.`);
                return;
            } else if (room.isBooked) {
                console.log(`Room ${room.roomNumber} is already booked.`);
                return;
            }
            this.bookedRoom = room;
            this.bookingDays.push(this.bookingDays[0] + 1);
            room.isBooked = true;
            }

    toString() {
        return `Customer: ${this.firstName} ${this.lastName} (ID: ${this.id}), Booked Room: ${this.bookedRoom ? this.bookedRoom.roomNumber : 'None'}, Booking Days: ${this.bookingDays[0]}`;
    }
}

// Test Code
let customer = new Customer('C001', 'John', 'Doe');
console.log(customer.toString()); 
// Expected output: "Customer: John Doe (ID: C001), Booked Room: None, Booking Days: 0"

	

