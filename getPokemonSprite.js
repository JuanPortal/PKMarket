// import { formatName } from "./getPokemonList.js"
// import { links } from "./links.js"


// const pokemonSprite = document.getElementById('pokemonSprite')
// const form = document.getElementById('form')
// export const searchBar = document.getElementById('searchBar')

// const handleSubmit = e => e.preventDefault()
// form.onsubmit = handleSubmit

// async function fetchPokemon(species) {
//     species = species.toString().toLowerCase()
//     const url = `https://pokeapi.co/api/v2/pokemon/${species}`
//     try {
//         let res = await fetch(url)
//         return await res.json()
//     } catch {
        
//     }
// }

// export async function getSprite(species) {
//     try {
//         const data = await fetchPokemon(species)
//         pokemonSprite.src = data.sprites.other.home.front_default
//     } catch {
        
//     }
// }

// searchBar.addEventListener('input', (e) => {
//     let selectedPokemon = searchBar.value
//     getSprite(selectedPokemon)
//     console.log(links[formatName(selectedPokemon)])
// })




