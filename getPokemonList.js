async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=1200'
    try {
        let res = await fetch(url)
        return await res.json()
    } catch (error) {
        console.log(error)
    }
}

export function formatName(name) {
    name = name.replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ')
    const words = name.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ")
}

async function renderDataList() {
    const data = await fetchPokemon()
    let pokemonList = data.results.map(pokemon => formatName(pokemon.name))
    let innerHTML = ''
    pokemonList.forEach(pokemon => innerHTML += `<option value="${pokemon}">${pokemon}</option>`)
    let dataList = document.getElementById('pokemonList')
    dataList.innerHTML = innerHTML
}

renderDataList()