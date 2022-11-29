import { getALlCountries } from '../services/getCountries.js';
import { country } from './country.js';
const containerData = document.querySelector('#countries-map');
const data = await getALlCountries();
data.map((dataCountry) => {
  const title = dataCountry.name.official;
  const population = dataCountry.population;
  const capital = dataCountry.capital;
  const region = dataCountry.region;
  const flag = dataCountry.flags.svg;
  const name = dataCountry.name.common

  const newCountry = {
    title,
    population,
    capital,
    region,
    flag,
    name,
  }

  containerData.innerHTML += country(newCountry);
  console.log();
});



export { data };
