class Video { 

   constructor(videoID, title, genre) {
       this.videoID = videoID;
       this.title = title;
       this.genre = genre;
       this.isRented = false; 
   }

   toString() {
       return `Video ID: ${this.videoID}, Title: ${this.title}, Genre: ${this.genre}, Rented: ${this.isRented}`;
   }
}

class Customer {
    
    constructor(customerID, custormerName) {
        this.customerID = customerID;
        this.custormerName = custormerName;
        this.rentedVideo = [];
        this.rentalDays = 0;
    }

    rentVideo(video, rentalDays) {
        video.isRented = true;
        this.rentedVideo.push(video);
        this.rentalDays += rentalDays;
    }

    toString() {
        let rentedVideoTitles = this.rentedVideo.map(video => video.videoID).join(", ");
        return `Customer ID: ${this.customerID}, Name: ${this.custormerName}, Rented Video: ${rentedVideoTitles || "None"}, Rental Days: ${this.rentalDays}`;
    }
}

class VideoRentalService {
    constructor() {
        this.allVideos = [];
        this.allCustomers = [];
    }

    addVideo(videoID, title, genre) {
        const newVideo = new Video(videoID, title, genre);
        this.allVideos.push(newVideo);
    }

    addCustomer(customerID, custormerName) {
        const newCustomer = new Customer(customerID, custormerName);
        this.allCustomers.push(newCustomer);
    }

    findVideo(videoID) {
        return this.allVideos.find(video => video.videoID === videoID);
    }

    findCustomer(customerID) {
        return this.allCustomers.find(customer => customer.customerID === customerID);
    }

    rentVideo(customerID, videoID, rentalDays) {
        const customer = this.findCustomer(customerID);
        const video = this.findVideo(videoID);
        if (customer && video && !video.isRented) {
            video.isRented = true;
            customer.rentedVideo.push(video);
            customer.rentalDays += rentalDays;
        }
        else if (video && video.isRented) {
            console.log(`Video is already rented.`);
        }
    }

    getAllRentals() {
        return this.allCustomers.map(customer => customer.toString()).join("\n");
        }
 

}

 	

// Create an instance of Video
const video = new Video('V001', 'Inception', 'Sci-Fi');

// Print video details
console.log(video.toString());