export const country = (dataCountry) => {
  dataCountry = dataCountry ? dataCountry : "";

  return `<article>
  <div style="background-image: url('${dataCountry.flag}')"></div>
  <div>
    <h2>${dataCountry.title}</h2>
    <section>
      <div>
        <p>Population:</p>
        <span>${dataCountry.population}</span>
      </div>
      <div>
        <p>Region:</p>
        <span>${dataCountry.region}</span>
      </div>
      <div>
        <p>Capital:</p>
        <span>${dataCountry.capital}</span>
      </div>
    </section>
  </div>
</article>`;
}
