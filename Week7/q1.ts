class Video { 
   public videoID: string;
   public title: string;
   public genre: string;
   public isRented: boolean;

   constructor(videoID: string, title: string, genre: string) {
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
    public customerID: string;
    public custormerName: string;
    public rentedVideo: Video[];
    public rentalDays: number;
    
    constructor(customerID: string, custormerName: string) {
        this.customerID = customerID;
        this.custormerName = custormerName;
        this.rentedVideo = [];
        this.rentalDays = 0;
    }

    rentVideo(video : Video, rentalDays: number) {
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
    public allVideos: Video[];
    public allCustomers: Customer[];

    constructor() {
        this.allVideos = [];
        this.allCustomers = [];
    }

    addVideo(videoID: string, title: string, genre: string) {
        const newVideo = new Video(videoID, title, genre);
        this.allVideos.push(newVideo);
    }

    addCustomer(customerID: string, custormerName: string) {
        const newCustomer = new Customer(customerID, custormerName);
        this.allCustomers.push(newCustomer);
    }

    findVideo(videoID: string) {
        return this.allVideos.find(video => video.videoID === videoID);
    }

    findCustomer(customerID: string) {
        return this.allCustomers.find(customer => customer.customerID === customerID);
    }

    rentVideo(customerID: string, videoID: string, rentalDays: number) {
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

// Create instances of Video, Customers, and VideoRentalService
const video = new Video('V001', 'Inception', 'Sci-Fi');
const customer1 = new Customer('C001', 'Alice Smith');
const customer2 = new Customer('C002', 'Bob Johnson');
const rentalService = new VideoRentalService();

// Add video and customers to the rental service
rentalService.addVideo('V001', 'Inception', 'Sci-Fi');
rentalService.addCustomer('C001', 'Alice Smith');
rentalService.addCustomer('C002', 'Bob Johnson');

// Rent the video to the first customer
rentalService.rentVideo('C001', 'V001', 7);

// Attempt to rent the same video to the second customer
rentalService.rentVideo('C002', 'V001', 3); 


// Print customer and video details
console.log(customer1.toString()); 
console.log(customer2.toString()); 

console.log(video.toString()); 