const series = document.getElementById('series')
const serie = document.getElementById('serie').content
const fragment = document.createDocumentFragment()
const link = 'https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=Peaky%20Blinders&search_type=1'

let tvseries = []

document.addEventListener('DOMContentLoaded', () => {
    cargaSeries()
})

const cargaSeries = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eceb7882b1msh983c54bc02fb5c2p13ee3ajsn9e9bbe1a3761',
            'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
        }
    };
    
    fetch(link, options) //para buscar con 2 nombres %20
        .then(response => response.json())
        .then(response => {
            tvseries = response.results
            dibujaSeries()
            console.log(response)
        })
        .catch(err => console.error(err));
}

const dibujaSeries = () => {
    tvseries.forEach((item) => {
        serie.querySelector('img').setAttribute('src', item.image_url),
        serie.querySelector('h1').textContent = item.name

        const clone = serie.cloneNode(true)
        fragment.appendChild(clone)
    })
    series.appendChild(fragment)
}
