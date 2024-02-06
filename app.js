"use strict";
// import { shuffle } from "lodash";
import Country from "./modules/Country";
import Game from "./modules/Game.js";

const tabCountries = [];
const score = 10;
const currentScore = localStorage.getItem;
const getCountryData = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all");
    const country = await data.json();
    return country;
}
console.log(getCountryData());

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    if(endGame){
        alert("C'est fini");
    }
    e.currentTarget.reset();
})

const highscore = () => {
    if(currentScore > score){
        localStorage.setItem('highscore', score);
    }
}

async function fetchCountries() {
    try {
        // Récupération des données depuis l'API
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }
        const countriesData = await response.json();

        // Traitement des données
        const countries = countriesData.map(country => ({
            name: country.name.common, // nom commun pays
            flags: country.flag, // emoji drapeau
            translations: country.translations // traductions nom pays
        }));

        // Mélanger pays (lodash foctionne pas)
        // const shuffledCountries = shuffle(countries);

        return countries;
    } catch (error) {
        console.error(`Erreur lors de la récupération des pays: ${error}`);
    }
}

const country = new Country(fetchCountries());
console.log(country.name); 
console.log(country.flags);