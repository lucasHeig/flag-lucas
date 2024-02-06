class Country {
    dataCountry;
    flag;
    #name;
    #tabData = [];
    constructor(countryData){
        this.dataCountry = countryData;
        this.flag = countryData.flag;
        this.validAnswers = this.validAnswers();
    }

    validAnswers() {
        const translations = this.dataCountry.translations;
        const namesArray = Object.values(translations).map(translation => translation.common.toLowerCase());
        return new Set(namesArray);
    }

    #answers() {
        const translation = this.dataCountry;
    }

    #checkAnswer(formdata) {
        const check = formdata.toLowerCase() === this.#answers() ? true : false;
    }

    renderFlag(){
        const container = document.querySelector("#flag");
        const flag = document.createElement("h1");
        flag.textContent = this.flag;
        container.appendChild(flag);
		return this.renderFlag;
    }
    
    get flag(){
        return this.dataCountry.flag;
    }
}
export default Country;