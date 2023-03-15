const series = document.getElementById('series')
const serie = document.getElementById('serie').content
const btnLoad = document.getElementById('btnLoad')
const fragment = document.createDocumentFragment()
const selector = document.getElementById('selector')
let tvseries = []

const buscador = document.getElementById('inputText')



function recargar () {
    window.location.href = window.location.href;
}

btnLoad.addEventListener('click', () => {
    console.log(buscador)

    if(buscador.value){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'eceb7882b1msh983c54bc02fb5c2p13ee3ajsn9e9bbe1a3761',
                'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
            }
        };
        
        //console.log('Serie: ',selector.value)
    
        fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${buscador.value}&search_type=1`, options) //para buscar con 2 nombres %20
            .then(response => response.json())
            .then(response => {
                tvseries = response.results
                console.log(tvseries)
                creaTarjetas()
            })
            .catch(err => console.log(err));

            const optiones = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'eceb7882b1msh983c54bc02fb5c2p13ee3ajsn9e9bbe1a3761',
                    'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
                }
            };
            
            fetch(`https://watchmode.p.rapidapi.com/title/314817/details/?language=ES`, optiones)
                .then(response => response.json())
                .then(response => {
                    tvseries = response
                    console.log(tvseries)
                })
                .catch(err => console.error(err));
    }
})

    

const creaTarjetas = () => {
    tvseries.forEach((item) => {
    serie.querySelector('img').setAttribute('src', item.image_url)
    serie.querySelector('h1').textContent = item.name
    serie.getElementById('pepino').textContent = item.tmdb_type
    serie.getElementById('pepita').textContent = item.year
    const clone = serie.cloneNode(true)
    fragment.appendChild(clone)
    })
    series.appendChild(fragment)
}
    


