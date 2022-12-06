import { showData } from "./counstriesMap.js";

const filterRegion = document.querySelector('.filter-region');
const filterList = document.querySelector('.filter-list');
const mainContainer = document.querySelector('.countries-map');
const classRegion = document.querySelectorAll('.region');
const titleRegion = document.querySelector('.subtitle-filter');

const filterToggle = () => {
    filterList.classList.toggle('active');
    filterList.classList.add('desactive');
};
filterRegion.addEventListener('click', filterToggle);

mainContainer.addEventListener('click', () => {
    if (filterList.classList.contains('desactive')) {
        filterList.classList.add('active')
    }
});

export { filterToggle }


const countryRegion = (data) => {
 classRegion.forEach(element => {
  element.addEventListener('click', () => {
      const countryFiltrado2 = data.filter((item) => {
          const filtrado = item.region
          if (filtrado.indexOf(element.innerText) !== -1) {
              titleRegion.innerText = `${element.innerText}`;
              return item
        }
    })
    showData(countryFiltrado2)
  })
 })
};

export { countryRegion }