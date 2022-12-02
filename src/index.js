import { showData } from './components/counstriesMap.js'
import { filterToggle } from './components/listFilter.js'
import { darkMode } from './components/darkMode.js'
import { getALlCountries } from "./services/getCountries.js";
import { filterCountry } from './components/searchField.js';

const data = await getALlCountries();
showData(data);
filterCountry(data);