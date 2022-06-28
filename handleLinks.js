import { formatName } from "./getPokemonList"
import { links } from "./links"

const xy  = document.getElementById('xy')
const oras = document.getElementById('oras')
const sm = document.getElementById('sm')
const usum = document.getElementById('usum')
const bundles = document.getElementById('bundles')
const lgpe = document.getElementById('lgpe')
const swsh = document.getElementById('swsh')
const bdsp = document.getElementById('bdsp')
const arceus = document.getElementById('arceus')
const home = document.getElementById('home')
const games = [xy, oras, sm, usum, bundles, lgpe, swsh, bdsp, arceus, home]

let selectedGame;

games.forEach(game => {
    game.addEventListener('click', e => {
        selectedGame = e.target
        console.log(selectedGame.textContent)
        selectedGame.classList.add('selected')
        games.forEach(game => {
            if (game !== selectedGame) {
                game.classList.remove('selected')
            }
        })
    })
})

console.log(links)

/////////////////////////////////////////////////////////////////////////////////////////////

// const pokemonSprite = document.getElementById('pokemonSprite')
// const form = document.getElementById('form')

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

// async function getSprite(species) {
//     try {
//         const data = await fetchPokemon(species)
//         pokemonSprite.src = data.sprites.other.home.front_default
//         console.log(pokemonSprite)
//     } catch {
        
//     }
// }

// searchBar.addEventListener('input', (e) => {
//     let selectedPokemon = searchBar.value
//     getSprite(selectedPokemon)
//     console.log(links[formatName(selectedPokemon)])
// })