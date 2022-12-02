import { showData } from "./counstriesMap.js";
const inputBuscar = document.querySelector(".search-country-input");

const filterCountry = (data) => {
    inputBuscar.addEventListener("keyup", (e) => {
    const textoCliente = e.target.value.toLowerCase();
    
    const countryFiltrado = data.filter((item) => {
      const filtrado = item.name.common.toLowerCase();
      if (filtrado.indexOf(textoCliente) !== -1) {
        return item;
      }
    });
    showData(countryFiltrado);
});
};

export { filterCountry };