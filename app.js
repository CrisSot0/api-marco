const series = document.getElementById('series')
const serie = document.getElementById('serie').content
const btnLoad = document.getElementById('btnLoad')
const fragment = document.createDocumentFragment()
const selector = document.getElementById('selector')
let tvseries = []

btnLoad.addEventListener('click', () =>{
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'eceb7882b1msh983c54bc02fb5c2p13ee3ajsn9e9bbe1a3761',
            'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
        }
    };
    
    console.log('Serie: ',selector.value)

    fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${selector.value}&search_type=1`, options) //para buscar con 2 nombres %20
        .then(response => response.json())
        .then(response => {
            tvseries = response.results
            console.log(tvseries)
            creaTarjetas()
        })
        .catch(err => console.log(err));
})

const creaTarjetas = () => {
    tvseries.forEach((item) => {
    serie.querySelector('img').setAttribute('src', item.image_url)
    serie.querySelector('h1').textContent = item.name
    const clone = serie.cloneNode(true)
    fragment.appendChild(clone)
    })
    series.appendChild(fragment)
}
    


