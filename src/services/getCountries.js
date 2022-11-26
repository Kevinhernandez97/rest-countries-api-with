const getALlCountries = async () => {
  const getData = await fetch("https://restcountries.com/v3.1/all");
  const dataJson = await getData.json();
  
  return dataJson;
}

const getCountryByCode = async (code) => {
  const getData = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  const dataJson = await getData.json();
  
  return dataJson;
}

const getRegion = async (region) => {
  const getData = await fetch(`https://restcountries.com/v2/regionalbloc/${region}`);
  const dataJson = await getData.json();
  
  return dataJson;
}

export { getALlCountries, getCountryByCode, getRegion };