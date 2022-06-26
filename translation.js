const chooseText = document.getElementById("choose");
const questionText = document.getElementById("question");
const storyText = document.getElementById("story");

const firstStepText = document.getElementById("firstStep");
const secondStepText = document.getElementById("secondStep");
const thirdStepText = document.getElementById("thirdStep");
const searchByNameText = document.getElementById("searchByName");

const typeNullText = document.getElementById("typeNull");

const xyText = document.getElementById("XY");
const orasText = document.getElementById("ORAS");
const smText = document.getElementById("SM");
const usumText = document.getElementById("USUM");
const ssText = document.getElementById("SS");
const homeText = document.getElementById("HOME");
const bundles3DSText = document.getElementById("Bundles3DS");
const bundlesSwitchText = document.getElementById("BundlesSwitch");

// TEXT
const choose = "Choose language";
const question = "Never completed your Pokédex?";
const story = "Neither did I! As hard as I tried, I didn't know about the Link cable; and when I did, my friends wouldn't play. I spent years trying to complete it and nothing. Now I dedicate myself to help more people complete their Pokédex or have better pokemon for competitive battles.";

const firstStep = "Choose your game";
const secondStep = "Search your pokemon";
const thirdStep = "Select your prefered site and get it!";
const searchByName = "Search by name";

const typeNull = "Type: Null";

const omegarubyalphasapphire = "Omega Ruby / Alpha Sapphire"
const sunmoon = "Sun / Moon";
const ultrasunultramoon = "Ultra Sun / Ultra Moon";
const swordshield = "Sword / Shield"
const bundles = "Bundles";

// TEXTO
const escoge = "Escoge idioma";
const pregunta = "¿Nunca completaste tu Pokédex?"
const historia = "Yo tampoco! Por más que intentaba, no sabía del cable Link; y cuando supe, mis amigos no jugaban. Pasé años tratando de completarla y nada. Ahora me dedico a que más gente pueda completar la Pokédex o que tengan mejores pokémon para batallas competitivas.";

const primerPaso = "Escoge tu juego";
const segundoPaso = "Busca tu pokémon";
const tercerPaso = "Escoge tu plataforma favorita y consíguelo!";
const buscarPorNombre = "Buscar por nombre";

const codigoCero = "Código Cero";

const rubiomegazafiroalfa = "Rubí Omega / Zafiro Alfa";
const solluna = "Sol / Luna";
const ultrasolultraluna = "Ultra Sol / Ultra Luna";
const espadaescudo = "Espada / Escudo";
const paquetes = "Paquetes";

// ENGLISH
const enFlag = document.getElementById("enFlag")
enFlag.addEventListener("click", ()=>{
    chooseText.textContent = choose;
    questionText.textContent = question;
    storyText.textContent = story;
    firstStepText.textContent = firstStep;
    secondStepText.textContent = secondStep;
    thirdStepText.textContent = thirdStep;
    searchByNameText.textContent = searchByName;
    typeNullText.textContent = typeNull;
    orasText.textContent = omegarubyalphasapphire;
    smText.textContent = sunmoon;
    usumText.textContent = ultrasunultramoon;
    ssText.textContent = swordshield;
    bundles3DSText.textContent = bundles;
    bundlesSwitchText.textContent = bundles;
})

// ESPAÑOL
const esFlag = document.getElementById("esFlag")
esFlag.addEventListener("click", ()=>{
    chooseText.textContent = escoge;
    questionText.textContent = pregunta;
    storyText.textContent = historia;
    firstStepText.textContent = primerPaso;
    secondStepText.textContent = segundoPaso;
    thirdStepText.textContent = tercerPaso;
    searchByNameText.textContent = buscarPorNombre;
    typeNullText.textContent = codigoCero;
    orasText.textContent = rubiomegazafiroalfa;
    smText.textContent = solluna;
    usumText.textContent = ultrasolultraluna;
    ssText.textContent = espadaescudo;
    bundles3DSText.textContent = paquetes;
    bundlesSwitchText.textContent = paquetes;
})