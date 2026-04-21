class Customer {
    constructor(id,firstname,lastname,bookedRoom,bookingDays) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.bookedRoom = bookedRoom;
        this.bookingDays = bookingDays;
    }

    toString() {
        let result = `Customer: ${this.firstname} ${this.lastname} (ID: ${this.id}), Booked Room: ${this.bookedRoom || "None"}, Booking Days: ${this.bookingDays || 0}`;
        return result;
    }
}

// Test Code
let customer = new Customer('C001', 'John', 'Doe');
console.log(customer.toString()); 
// Expected output: "Customer: John Doe (ID: C001), Booked Room: None, Booking Days: 0"

	

