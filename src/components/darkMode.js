const darkMode = document.querySelector('.darkMode');
const mainContainer = document.querySelector('.main__container-header')

darkMode.addEventListener('click', () => {
    mainContainer.classList.toggle('ligth');
});

export { darkMode }