const filterRegion = document.querySelector('.filter-region');
const filterList = document.querySelector('.filter-list')

const filterToggle = () => {
    filterList.classList.toggle('active');
};
filterRegion.addEventListener('click', filterToggle);


export { filterToggle }