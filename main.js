let api = "https://restcountries.com/v3.1/all"

document.addEventListener("DOMContentLoaded",async()=>{
    let mainDOM = document.querySelector(".container-countries")
    let paises = await((await fetch(api)).json());
    console.log(mainDOM)
    paises.forEach(pais => {
        let image = pais.flags.png;
        let name = pais.name.common;
        let poblacion = pais.population; 
        mainDOM.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title ">${name}</h5>
                <p class="card-text"><b>Capital: </b></p>
                <p class="card-text"><b>Poblacion: </b>${poblacion}</p>
            </div>
        </div>
        `)
    });
});
