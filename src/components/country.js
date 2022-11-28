export const country = (dataCountry) => {
  dataCountry = dataCountry ? dataCountry : "";

  return `<article class="article-container">
  <div class="country-image" style="background-image: url('${dataCountry.flag}')"></div>
  <div>
    <h2 class='article-title'>${dataCountry.title}</h2>
    <section>
      <div>
        <p class="article-subtitle">Population:</p>
        <span class="article-text">${dataCountry.population}</span>
      </div>
      <div>
        <p class="article-subtitle">Region:</p>
        <span class="article-text">${dataCountry.region}</span>
      </div>
      <div>
        <p class="article-subtitle">Capital:</p>
        <span class="article-text">${dataCountry.capital}</span>
      </div>
    </section>
  </div>
</article>`;
}
