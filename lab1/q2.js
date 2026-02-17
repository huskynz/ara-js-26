class Movie {
    constructor(title, director, year) {
        this.title = title;
        this.director = director;
        this.year = year;
    }

    getDetails() {
        return `${this.title}, directed by ${this.director}, released in ${this.year}.`
    }
}



let movie1 = new Movie('Inception', 'Christopher Nolan', 2010);
console.log(movie1.getDetails());