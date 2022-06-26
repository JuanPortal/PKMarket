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

let selectedGame

games.forEach(game => {
    game.addEventListener('click', e => {
        selectedGame = e.target
        selectedGame.classList.add('selected')
        games.forEach(game => {
            if (game !== selectedGame) {
                game.classList.remove('selected')
            }
        })
    })
})

