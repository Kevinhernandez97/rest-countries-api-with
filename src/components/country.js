export const country = (dataCountry) => {
  dataCountry = dataCountry ? dataCountry : "";

  return `<article class="article-container">
  <div class="country-image" style="background-image: url('${dataCountry.flag}')"></div>
  <div class="container-list">
    <h2 class='article-title'>${dataCountry.name}</h2>
    <section>
      <div class="description-text">
        <p class="article-subtitle">Population: </p>
        <span class="article-text">${dataCountry.population}</span>
      </div>
      <div class="description-text">
        <p class="article-subtitle">Region: </p>
        <span class="article-text region-name">${dataCountry.region}</span>
      </div>
      <div class="description-text">
        <p class="article-subtitle">Capital: </p>
        <span class="article-text">${dataCountry.capital}</span>
      </div>
    </section>
  </div>
</article>`
};