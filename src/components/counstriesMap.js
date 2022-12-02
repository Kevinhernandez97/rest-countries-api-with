import { country } from "./country.js";

const containerData = document.querySelector("#countries-map");
const showData = (data) => {
  containerData.innerHTML = ''
  data.map((dataCountry) => {
    const population = dataCountry.population;
    const capital = dataCountry.capital;
    const region = dataCountry.region;
    const flag = dataCountry.flags.svg;
    const name = dataCountry.name.common;

    const newCountry = {
      population,
      capital,
      region,
      flag,
      name,
    };

    containerData.innerHTML += country(newCountry);
    console.log();
  });
};

export { showData };
