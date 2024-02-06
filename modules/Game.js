// import Country from "./modules/Country.js";

class Game {
    #score;
    constructor(tabCountries) {
        this.#score = 0;
        this.countries = countries;
        this.currentCountryIndex = 0;
    }

    start() {
        this.displayCurrentCountry();
    }

    displayCurrentCountry() {
        const currentCountry = new Country(this.countries[this.currentCountryIndex]);
        currentCountry.display();
    }

    checkAnswer(userAnswer) {
        const currentCountry = new Country(this.countries[this.currentCountryIndex]);
        if (currentCountry.isCorrectAnswer(userAnswer)) {
            this.score++;
        }
        this.currentCountryIndex++;
        if (this.currentCountryIndex < this.countries.length) {
            this.displayCurrentCountry();
        } else {
            // console.log(this.#score);
        }
    }

    get score(){
        return this.#score;
    }
}
export default Game;