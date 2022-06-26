const pokemonSprite = document.getElementById('pokemonSprite')
const form = document.getElementById('form')
const searchBar = document.getElementById('searchBar')

const handleSubmit = e => e.preventDefault()
form.onsubmit = handleSubmit

async function fetchPokemon(species) {
    species = species.toString().toLowerCase()
    const url = `https://pokeapi.co/api/v2/pokemon/${species}`
    try {
        let res = await fetch(url)
        return await res.json()
    } catch {
        
    }
}

async function getSprite(species) {
    try {
        const data = await fetchPokemon(species)
        pokemonSprite.src = data.sprites.other.home.front_default
    } catch {
        
    }
}

searchBar.addEventListener('input', (e) => {
    getSprite(searchBar.value)
})