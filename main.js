import {formatearNumero} from './src/modules/formateos.js';

let api = "https://restcountries.com/v3.1/all"

document.addEventListener("DOMContentLoaded",async()=>{
    let mainDOM = document.querySelector(".container-countries")
    let paises = await((await fetch(api)).json());
    
    paises.forEach(pais => {
        let image = pais.flags.png;
        let name = pais.name.common;
        let poblacion = formatearNumero(pais.population);
        let capital = pais.capital;

        mainDOM.insertAdjacentHTML("beforeend",
        `
        <div class="container-card">
        <div class="card-img">
          <img src="${image}" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text"><b>Capital: </b>${capital}</p>
          <p class="card-text"><b>Poblacion: </b>${poblacion}</p>
        </div>
      </div>
        `)
    });
});


