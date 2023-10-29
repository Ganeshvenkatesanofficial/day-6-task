class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    getTitle() {
        return this.title;
    }

    getStudio() {
        return this.studio;
    }

    getRating() {
        return this.rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.getRating() === "PG");
    }
}

// Example usage
const movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "PG"),
    new Movie("Movie 4", "Studio D", "R"),
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);
