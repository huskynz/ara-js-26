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

class Customer {
    constructor(id, firstName, lastName, bookedRoom, bookingDays) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.bookedRoom = bookedRoom;
        this.bookingDays = bookingDays || 0;
    }

        bookRoom (room, days = 1) {
            if (this.bookedRoom) {
                console.log(`Customer ${this.firstName} ${this.lastName} already has a booked room.`);
                return;
            } else if (room.isBooked) {
                console.log(`Room ${room.roomNumber} is already booked.`);
                return;
            }
            this.bookedRoom = room;
            this.bookingDays += days;
            room.isBooked = true;
            }

    toString() {
        return `Customer: ${this.firstName} ${this.lastName} (ID: ${this.id}), Booked Room: ${this.bookedRoom ? this.bookedRoom.roomNumber : 'None'}, Booking Days: ${this.bookingDays}`;
    }
}

class BookingService {
    
    constructor() {
        this.allRooms = [];
        this.allCustomers = [];
    }

    addRoom(roomNumber, type, price) {
        this.allRooms.push(new Room(roomNumber, type, price, false));
    }

    addCustomer(customerID, firstName, lastName) {
        this.allCustomers.push(new Customer(customerID, firstName, lastName));
    }

    findRoom(roomNumber) {
        return this.allRooms.find(room => room.roomNumber === roomNumber);
    }

    findCustomer(id) {
        return this.allCustomers.find(customer => customer.customerID === id || customer.id === id);
    }

    bookRoom(customerID, roomNumber, days = 1) {
        const customer = this.findCustomer(customerID);
        const room = this.findRoom(roomNumber);
        
        if (customer && room && !room.isBooked) {
            customer.bookRoom(room, days);
        } else {
            console.log("Room is already booked or not found.");
        }
    }

    getAllBookings() {
        return this.allCustomers.map(customer => customer.toString()).join("\n");
    }

}

// Test Code
let service = new BookingService();

// Add rooms
service.addRoom('101', 'Single', 100);
service.addRoom('102', 'Double', 150);

// Add customers
service.addCustomer('C001', 'John', 'Doe');
service.addCustomer('C002', 'Jane', 'Smith');

// Book rooms
service.bookRoom('C001', '101', 3);
service.bookRoom('C002', '102', 5);

// Print all bookings
console.log(service.getAllBookings());